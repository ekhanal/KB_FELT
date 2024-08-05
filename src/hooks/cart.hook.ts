import { useMutation, useQuery } from "@tanstack/react-query";
import {
  deleteApi,
  get,
  getWithToken,
  postWithToken,
  put,
} from "../api/client";
import { showErrorMessage, showSuccessMessage } from "../utils/toast";
import { getValue } from "../utils/object";

const TEST_QUERY = {
  cart: "cart",
  wishlist: "wishlist",
  orderstatus: "orderstatus",
  address: "address",
};
export const useAddToCart = () =>
  useMutation({
    mutationFn: (body: object) =>
      postWithToken({
        url: "api/v1/cart/items/",
        body,
      }),
  });

export const useGetAllCart = () =>
  useQuery({
    queryKey: [TEST_QUERY.cart],
    queryFn: () => get({ url: "api/v1/cart/list/" }),
    select: (response) => {
      return response;
    },
  });

export const useEditCart = () =>
  useMutation({
    mutationFn: (body: object) => put({ url: "api/v1/cart/items/", body }),
  });

export const useAddToWishList = () =>
  useMutation({
    mutationFn: (body: object) =>
      postWithToken({
        url: "api/v1/wishlist/items/",
        body,
      }),
  });

export const useGetAllWishList = () =>
  useQuery({
    queryKey: [TEST_QUERY.wishlist],
    queryFn: () =>
      getWithToken({
        url: "api/v1/wishlist/list/",
      }),
  });

export const useGetAllOrder = () =>
  useQuery({
    queryKey: ["order"],
    queryFn: () => get({ url: "api/v1/order/list-order/" }),
  });

export const useCheckout = () =>
  useMutation({
    mutationFn: (body: object) =>
      postWithToken({
        url: "api/v1/order/add-order/",
        body,
      }),
    onSuccess: (response) => {
      showSuccessMessage(getValue(response, "message"));
    },
    onError: (error: unknown) => showErrorMessage(getValue(error, "message")),
  });

export const useDeleteAllCart = () =>
  useMutation({
    mutationFn: (body: object) =>
      deleteApi({
        url: "api/v1/cart/carts/delete-all/",
        body,
      }),
    onSuccess: (response) => {
      showSuccessMessage(getValue(response, "message"));
    },
    onError: (error: unknown) => showErrorMessage(getValue(error, "message")),
  });
export const useDeleteCartItem = () =>
  useMutation({
    mutationFn: (cart_item_id) =>
      deleteApi({
        url: `api/v1/cart/delete/${cart_item_id}/`,
        body: {},
      }),
    onSuccess: (response) => {
      showSuccessMessage(getValue(response, "message"));
    },
    onError: (error: unknown) => showErrorMessage(getValue(error, "message")),
  });

export const useDeleteWishListItems = () =>
  useMutation({
    mutationFn: (wishList_item_id) =>
      deleteApi({
        url: `api/v1/wishlist/wishlist-item/${wishList_item_id}/`,
        body: {},
      }),
    onSuccess: (response) => {
      showSuccessMessage(getValue(response, "message"));
    },
    onError: (error: unknown) => showErrorMessage(getValue(error, "message")),
  });
export const useGetAllOrderByStatus = ({ status }: { status: string }) =>
  useQuery({
    queryKey: [TEST_QUERY.orderstatus],
    queryFn: () =>
      get({ url: `api/v1/order/orders/by-status/?status=${status}` }),
  });
export const useGetCouponcode = () =>
  useQuery({
    queryKey: ["order"],
    queryFn: () => get({ url: `api/v1/coupon/coupons/` }),
  });

export const useApplyCoupon = () =>
  useMutation({
    mutationFn: (body: object) =>
      postWithToken({ url: "api/v1/coupon/apply-coupon/", body }),
    onSuccess: (response) => {
      showSuccessMessage(getValue(response, "message"));
    },
    onError: (error: unknown) => showErrorMessage(getValue(error, "message")),
  });

export const useGetAllAddress = () =>
  useQuery({
    queryKey: [TEST_QUERY.address],
    queryFn: () => get({ url: `api/v1/order/delivery/list/` }),
  });
export const useAddAddress = () =>
  useMutation({
    mutationFn: (body: object) =>
      postWithToken({ url: "api/v1/order/delivery-address/create/", body }),

    onSuccess: (response) => {
      showSuccessMessage(getValue(response, "message"));
    },
    onError: (error: unknown) => showErrorMessage(getValue(error, "message")),
  });

export const useEditAddress = ({ id }: { id: number }) =>
  useMutation({
    mutationFn: (body: object) =>
      put({
        url: `api/v1/order/delivery-address/update/${id}/`,
        body,
      }),

    onSuccess: (response) => {
      showSuccessMessage(getValue(response, "message"));
    },
    onError: (error: unknown) => showErrorMessage(getValue(error, "message")),
  });

export const useDeleteAddres = () =>
  useMutation({
    mutationFn: (delete_id) =>
      deleteApi({
        url: `api/v1/order/delivery-address/delete/${delete_id}/`,
        body: {},
      }),

    onError: (error: unknown) => showErrorMessage(getValue(error, "message")),
  });
export const useGetAllAddressById = ({ id }: { id: number }) =>
  useQuery({
    queryKey: [TEST_QUERY.address],
    queryFn: () => get({ url: `api/v1/order/delivery-address/${id}/` }),
  });
