import { CiHeart, CiShare2 } from "react-icons/ci";
import { LiaStarSolid } from "react-icons/lia";
import ProductTabs from "../../components/Products/ProductTabs";
import Button from "../../components/common/Button/Button";
import { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetAllProductDetails } from "../../hooks/product.hook";
import { getValue } from "../../utils/object";
import {
  useAddToCart,
  useAddToWishList,
  useDeleteAllCart,
  useGetAllCart,
} from "../../hooks/cart.hook";
import { showErrorMessage, showSuccessMessage } from "../../utils/toast";
import { PATH } from "../../constants/path";
import AttributeComponent from "../../components/Products/AttributeComponent";

const ProductDetailPage = () => {
  const { prod_slug } = useParams<{ prod_slug?: string }>();
  const [quantity, setQuantity] = useState(1); // Initial quantity value
  const mainImageRef = useRef(null);
  const { refetch: cartFetch } = useGetAllCart();

  const validCategorySlug = prod_slug || "";

  const { data: productdetails } = useGetAllProductDetails({
    prod_slug: validCategorySlug,
  });

  const { mutateAsync: addToCart } = useAddToCart();
  const { mutateAsync: addToWishlist } = useAddToWishList();
  const { mutateAsync: deleteAllCart } = useDeleteAllCart();

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  console.log(productdetails);
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleImageClick = (image: any) => {
    setMainImage(image);
  };

  const productDetailsData = Array.isArray(productdetails)
    ? productdetails
    : productdetails
    ? [productdetails]
    : [];
  console.log({ product: productDetailsData });

  // const relatedProduct = productdetails?.related_products;
  // const Id = productDetailsData?.[0]?.id;
  // const { data: getcomment } = useGetAllComment({ product_id: Id });

  useEffect(() => {
    if (productdetails) {
      const images = productdetails.product_images.map((imgs: any) =>
        getValue(imgs, "file")
      );
      setMainImage(images[0]);

      // Set default selected attributes
      const defaultAttributes: {
        [key: string]: { value: string; id: number };
      } = {};
      productdetails.product_stock.forEach((stock: any) => {
        stock.attributes.forEach((attr: any) => {
          if (!defaultAttributes[attr.attribute_name]) {
            defaultAttributes[attr.attribute_name] = {
              value: attr.value,
              id: stock.id,
            };
          }
        });
      });
      setSelectedAttributes(defaultAttributes);
    }
  }, [productdetails]);

  // Function to combine and manage attributes
  const combineAttributes = (product_stock: any) => {
    const combinedAttributes: { [key: string]: string[] } = {};

    product_stock.forEach((stock: any) => {
      stock.attributes.forEach((attr: any) => {
        if (!combinedAttributes[attr.attribute_name]) {
          combinedAttributes[attr.attribute_name] = [];
        }
        combinedAttributes[attr.attribute_name].push(attr.value);
      });
    });

    // Remove duplicate values
    for (const key in combinedAttributes) {
      combinedAttributes[key] = [...new Set(combinedAttributes[key])];
    }

    return combinedAttributes;
  };

  const [mainImage, setMainImage] = useState();
  const [selectedAttributes, setSelectedAttributes] = useState<{
    [key: string]: { value: string; id: number };
  }>({});

  const handleAttributeChange = (
    attrName: string,
    value: string,
    id: number
  ) => {
    setSelectedAttributes({
      ...selectedAttributes,
      [attrName]: { value, id },
    });
  };

  const addCart = async () => {
    try {
      const selectedStock = productDetailsData[0]?.product_stock.find(
        (stock: any) =>
          Object.keys(selectedAttributes).every((attrName) =>
            stock.attributes.some(
              (attr: any) =>
                attr.attribute_name === attrName &&
                attr.value === selectedAttributes[attrName].value
            )
          )
      );
      console.log({ selected: selectedStock });
      if (!selectedStock) {
        showErrorMessage("Selected Stock is not available");
        return;
      }

      const dataCart = {
        product_id: productDetailsData[0]?.id,
        quantity: quantity,
        stock_id: selectedStock.id,
      };
      const response = await addToCart(dataCart);
      cartFetch();
      showSuccessMessage(getValue(response, "message"));
    } catch (error) {
      console.error("Error adding to cart:", error);
      showErrorMessage("Please Login First");
    }
  };

  const addWishlist = async () => {
    try {
      const selectedStock = productDetailsData[0]?.product_stock.find(
        (stock: any) =>
          Object.keys(selectedAttributes).every((attrName) =>
            stock.attributes.some(
              (attr: any) =>
                attr.attribute_name === attrName &&
                attr.value === selectedAttributes[attrName].value
            )
          )
      );
      console.log({ selected: selectedStock });
      if (!selectedStock) {
        showErrorMessage("Selected Stock is not available");
        return;
      }

      const dataCart = {
        product: productDetailsData[0]?.id,
        quantity: 1,
        stock: selectedStock.id,
      };
      const response = await addToWishlist(dataCart);
      showSuccessMessage(getValue(response, "message"));
    } catch (error) {
      console.error("Error adding to cart:", error);
      showErrorMessage("Please Login First");
    }
  };
  const buyNow = async () => {
    deleteAllCart({});
    try {
      const selectedStock = productDetailsData[0]?.product_stock.find(
        (stock: any) =>
          Object.keys(selectedAttributes).every((attrName) =>
            stock.attributes.some(
              (attr: any) =>
                attr.attribute_name === attrName &&
                attr.value === selectedAttributes[attrName].value
            )
          )
      );

      if (!selectedStock) {
        showErrorMessage("Selected Stock is not available");
        return;
      }

      const dataCart = {
        product_id: productDetailsData[0]?.id,
        quantity: quantity,
        price: selectedStock.addprice,
        stock_id: selectedStock.id,
        attributes: selectedAttributes,
      };
      const response = await addToCart(dataCart);
      showSuccessMessage(getValue(response, "message"));
    } catch (error) {
      showErrorMessage("Please Login First");
    }
  };
  const getAttribute = productdetails?.product_stock?.[0]?.attributes;
  console.log({ attribute: getAttribute });

  // const handleAttribute = (attributes) => {
  //   if (!attributes) {
  //     return []; // Return an empty array if attributes is undefined
  //   }

  //   const uniqueAttributes = {};
  //   attributes.forEach((attribute) => {
  //     const key = attribute.attribute_name;

  //     if (uniqueAttributes[key]) {
  //       uniqueAttributes[key].value += `, ${attribute.value}`;
  //     } else {
  //       uniqueAttributes[key] = { ...attribute };
  //     }
  //   });

  //   return Object.values(uniqueAttributes);
  // };

  return (
    <>
      {productDetailsData?.map((item: any) => {
        const combinedAttributes = combineAttributes(item.product_stock);

        return (
          <div key={item.id}>
            <div className="full flex flex-col mx-5 lg:mx-20 md:flex-row gap-5 mb-8 mt-2">
              <div className="w-full md:w-1/2 flex flex-col ">
                <div className="flex flex-col-reverse lg:flex-row gap-5 w-full relative ">
                  {/* small image */}
                  <div className="  flex lg:flex-col items-center gap-2  ">
                    {item.product_images?.map((imgs: any, index: number) => (
                      <div
                        key={index}
                        className="w-24 h-24 overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => handleImageClick(imgs.file)}
                      >
                        <img
                          src={getValue(imgs, "file")}
                          alt={`small-pic-${index}`}
                          className="w-24 h-24 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  {/* product image */}
                  <div>
                    <div className="relative w-full">
                      <img
                        ref={mainImageRef}
                        src={mainImage}
                        className="w-full h-full object-cover md:min-h-[300px] lg:min-h-[500px]"
                      />
                      <div
                        className="absolute top-2 right-3 flex flex-col gap-2 bg-white rounded-full cursor-pointer"
                        onClick={() => addWishlist()}
                      >
                        <CiHeart size={30} className="rounded-full p-1" />
                      </div>
                      <div className="absolute top-12 right-3 flex flex-col gap-2 rounded-full bg-white">
                        <CiShare2 size={30} className="rounded-full p-1" />
                      </div>
                      <div className="absolute top-2 left-2 rounded-full bg-red-500 text-white p-2 w-14 h-14 flex items-center justify-center">
                        <span className="text-xs font-bold">
                          25%
                          <br />
                          off
                        </span>
                      </div>
                    </div>
                    <div className=" w-full flex gap-2 md:gap-5 mt-5 sticky bottom-0">
                      <Button
                        title="Add to cart"
                        styles="cursor-pointer  "
                        onClick={() => addCart()}
                      />

                      <Link to={PATH.paymentMethod} className="w-full">
                        <Button
                          title="Buy Now"
                          styles="cursor-pointer secondary-bg-colors text-color"
                          onClick={buyNow}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* right product details */}
              <div className="w-full md:w-1/2 h-full">
                <h1 className="text-sm text-gray-500 my-2">
                  {" "}
                  Brand{" "}
                  <span className="text-color font-semibold">
                    {getValue(item, "brand.name")}
                  </span>
                  <span className="text-xs ml-2">
                    {getValue(item, "modelno")}
                  </span>
                </h1>
                <p className="text-black font-semibold text-sm md:text-lg ">
                  {item.product_name}
                </p>
                <div className="gap-2 flex items-center my-2">
                  <span className="text-lg text-blue-500 font-semibold">
                    ${getValue(item, "current_price")}
                  </span>
                  <span className="text-gray-400 line-through text-xs ">
                    ${item.previous_price}
                  </span>
                  <span className="text-white text-xs px-1 rounded-lg bg-rose-500">
                    66% off
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2 ">
                  <LiaStarSolid className="text-yellow-500" />
                  <span className="text-sm   font-medium">
                    {/* {getcomment?.[0]?.rating} */} 1
                    <span className="text-gray-500 font-normal ml-1 text-sm">
                      (120 reviews)
                    </span>
                    <span className="ml-1">
                      {getValue(item, "warehouse.warehousename")}
                    </span>
                  </span>
                </div>

                <p
                  className={
                    item.product_stock[0]?.quantity
                      ? " text-green-700 text-sm  font-semibold mr-2"
                      : "text-red-500 text-sm font-semibold pr-2"
                  }
                >
                  {item.product_stock[0]?.quantity
                    ? "In Stock "
                    : "Out Of Stock "}
                  {item.product_stock[0]?.quantity}
                </p>
                {/* Size selection */}
                <div className=" text-sm">
                  {Object?.keys(combinedAttributes)?.map((attributeName) => (
                    <div className="">
                      <AttributeComponent
                        key={attributeName}
                        item={item}
                        combinedAttributes={combinedAttributes}
                        attributeName={attributeName}
                        selectedAttributes={selectedAttributes}
                        handleAttributeChange={handleAttributeChange}
                      />
                    </div>
                  ))}
                </div>

                {/* Quantity selection */}
                <div className="items-center my-2 text-sm">
                  <span className="mr-2 font-semibold block">Quantity</span>
                  <div className="flex items-center justify-between rounded-lg h-8 bg-white w-24 mt-1 font-bold border border-black text-sm">
                    <button
                      className="py-1 px-2 text-xl"
                      onClick={decrementQuantity}
                    >
                      -
                    </button>

                    <span className="px-2 py-1">{quantity}</span>
                    <button className="py-1 px-2" onClick={incrementQuantity}>
                      +
                    </button>
                  </div>
                </div>
                {/* Product highlights */}
                <div className="my-4">
                  <span className="font-semibold text-sm">
                    Product Highlights:
                  </span>
                  <ul>
                    <li
                      className="text-sm text-gray-500 mt-1 "
                      dangerouslySetInnerHTML={{
                        __html: item.producthighlight,
                      }}
                    ></li>
                  </ul>
                </div>

                {/* Display selected attributes */}
              </div>
            </div>
            <div className="px-5 lg:px-20">
              <ProductTabs
                data={productDetailsData}
                id={productDetailsData[0]?.id}
              />
            </div>
          </div>
        );
      })}
      ;
    </>
  );
};

export default ProductDetailPage;
