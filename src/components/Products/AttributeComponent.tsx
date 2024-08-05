import React from "react";

type Attribute = {
  attribute_name: string;
  value: string;
};

type ProductStock = {
  id: number;
  attributes: Attribute[];
};

type Item = {
  product_stock: ProductStock[];
};

type Props = {
  item: Item;
  combinedAttributes: { [key: string]: string[] };
  attributeName: string;
  selectedAttributes: { [key: string]: { value: string; id: number } };
  handleAttributeChange: (
    attributeName: string,
    value: string,
    id: any
  ) => void;
};

const AttributeComponent: React.FC<Props> = ({
  item,
  combinedAttributes,
  attributeName,
  selectedAttributes,
  handleAttributeChange,
}) => {
  return (
    <div className=" my-2 text-sm flex items-center gap-2">
      <span className="font-semibold">{attributeName}:</span>
      <div className="flex items-center gap-3 ">
        {combinedAttributes[attributeName] &&
          combinedAttributes[attributeName].map((attributeValue, index) => {
            const productStock = item.product_stock.find(
              (stock: ProductStock) =>
                stock.attributes.some(
                  (attr: Attribute) =>
                    attr.attribute_name === attributeName &&
                    attr.value === attributeValue
                )
            );

            const id = productStock?.id;

            return (
              <span
                key={index}
                className={`text-xs px-2 py-1 font-medium rounded-lg cursor-pointer ${
                  selectedAttributes[attributeName]?.value === attributeValue
                    ? "secondary-bg-colors text-[#6C68F0] border  border-blue-800"
                    : "text-xs text-black font-medium mr-2 border p-1 border-blue-800 rounded-lg"
                }`}
                onClick={() =>
                  handleAttributeChange(attributeName, attributeValue, id)
                }
              >
                {attributeValue}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default AttributeComponent;
