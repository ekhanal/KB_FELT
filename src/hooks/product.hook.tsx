import { useMutation, useQuery } from "@tanstack/react-query";
import { get, postWithToken } from "../api/client";
import { showErrorMessage, showSuccessMessage } from "../utils/toast";
import { getValue } from "../utils/object";

const TEST_QUERY = {
  test: "test",
  banner: "banner",
  products: "products",
  topProducts: "topProducts",
  slider: "slider",
  productDetails: "productDetails",
  categoriesPage: "categoriesPage",
  subcatgory: "subcatgory",
  category: "category",
  featureProduct: "featureProduct",
  comment: "comment",
  flashsells: "flashsells",
};
export const useGetAllSearchData = ({ searchTerm }: { searchTerm: string }) => {
  return useQuery({
    queryKey: [TEST_QUERY.test, searchTerm],
    queryFn: () => get({ url: `api/v1/product/search/?search=${searchTerm}` }),
    select: (response) => {
      return response;
    },
  });
};

export const useGetAllCategory = () => {
  return useQuery({
    queryKey: [TEST_QUERY.test],
    queryFn: () => get({ url: `api/v1/product/categories/` }),
    select: (response) => {
      return response;
    },
  });
};
export const useGetAllCategoryAndSubcategory = () => {
  return useQuery({
    queryKey: [TEST_QUERY.category],
    queryFn: () => get({ url: `api/v1/product/all/categories/` }),
    select: (response) => {
      return response;
    },
  });
};
export const useGetAllBanners = () => {
  return useQuery({
    queryKey: [TEST_QUERY.banner],
    queryFn: () => get({ url: "api/v1/product/banner/" }),
    select: (response) => {
      return response;
    },
  });
};
export const useGetAllSlider = () => {
  return useQuery({
    queryKey: [TEST_QUERY.slider],
    queryFn: () => get({ url: "api/v1/product/slider/" }),
    select: (response) => {
      return response;
    },
  });
};
export const useGetAllProducts = () => {
  return useQuery({
    queryKey: [TEST_QUERY.products],
    queryFn: () => get({ url: "api/v1/product/all/product/list" }),
    select: (response) => {
      return response;
    },
  });
};

export const useGetAllTopProducts = () => {
  return useQuery({
    queryKey: [TEST_QUERY.topProducts],
    queryFn: () => get({ url: "api/v1/product/popular-products/" }),
    select: (response) => {
      return response;
    },
  });
};

export const useGetAllFeaturedProducts = () => {
  return useQuery({
    queryKey: [TEST_QUERY.featureProduct],
    queryFn: () => get({ url: "api/v1/product/featured-products/" }),
    select: (response) => {
      return response;
    },
  });
};
export const useGetAllProductDetails = ({
  prod_slug,
}: {
  prod_slug: string;
}) => {
  return useQuery({
    queryKey: [TEST_QUERY.productDetails],
    queryFn: async () =>
      await get({ url: `api/v1/product/details/${prod_slug}/` }),
    select: (response) => {
      return response;
    },
  });
};

export const useGetAllCategoryPage = ({
  category_slug,
}: {
  category_slug: string;
}) => {
  return useQuery({
    queryKey: [TEST_QUERY.categoriesPage],
    queryFn: () =>
      get({
        url: `api/v1/product/category/${category_slug}/subcategories/`,
      }),
    select: (response) => {
      return response;
    },
  });
};
export const useGetAllSubcategoryProduct = ({
  sub_category_slug,
}: {
  sub_category_slug: string;
}) => {
  return useQuery({
    queryKey: [TEST_QUERY.subcatgory],
    queryFn: () =>
      get({
        url: `api/v1/product/sub-categories/${sub_category_slug}/`,
      }),
    select: (response) => {
      return response;
    },
  });
};
export const useGetAllComment = ({ product_id }: { product_id: any }) => {
  return useQuery({
    queryKey: [TEST_QUERY.comment],
    queryFn: () =>
      get({
        url: `api/v1/product/comments/${product_id}/`,
      }),
    select: (response) => {
      return response;
    },
  });
};

export const usePostComment = () =>
  useMutation({
    mutationFn: (body: object) =>
      postWithToken({
        url: "api/v1/product/add/comments/",
        body,
      }),
    onSuccess: (response) => {
      showSuccessMessage(getValue(response, "message"));
    },
    onError: (error: unknown) => showErrorMessage(getValue(error, "message")),
  });
export const useGetAllFlashsellsProducts = () => {
  return useQuery({
    queryKey: [TEST_QUERY.flashsells],
    queryFn: () => get({ url: "api/v1/product/flashsells/" }),
    select: (response) => {
      return response;
    },
  });
};
