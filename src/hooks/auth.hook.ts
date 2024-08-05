import { useMutation, useQuery } from "@tanstack/react-query";
import { getWithToken, post, postWithToken, put, get } from "../api/client";
import { showErrorMessage, showSuccessMessage } from "../utils/toast";
import { getValue } from "../utils/object";

const QUERY = {
  userProfile: "userProfile",
  footer: "footer",
};
export const useRegisterUser = () =>
  useMutation({
    mutationFn: (body: object) =>
      post({
        url: "api/v1/user/register",
        body,
        contentType: "multipart/form-data",
      }),
    onSuccess: (response) => {
      showSuccessMessage(getValue(response, "message"));
    },
    onError: (error: unknown) => showErrorMessage(getValue(error, "message")),
  });

export const useOtpVerify = () => {
  return useMutation({
    mutationFn: (body: object) =>
      post({ url: "api/v1/user/verify-otp/", body }),
    onSuccess: (response) => {
      showSuccessMessage(getValue(response, "message"));
    },
    onError: (error: unknown) => {
      showErrorMessage(getValue(error, "message"));
    },
  });
};
export const useLoginAccount = () =>
  useMutation({
    mutationFn: (body: object) => post({ url: "api/v1/user/login", body }),
    onSuccess: (response) => {
      showSuccessMessage(getValue(response, "message"));
    },
    onError: (error: unknown) => showErrorMessage(getValue(error, "message")),
  });

export const usePasswordReset = () =>
  useMutation({
    mutationFn: (body: object) =>
      post({
        url: "api/v1/users/change-user-password",
        body,
      }),
  });

export const useForgotPassword = () =>
  useMutation({
    mutationFn: (body: object) =>
      post({
        url: "api/v1/user/forgot/password",
        body,
      }),
  });
export const useChangePassword = () =>
  useMutation({
    mutationFn: (body: object) =>
      postWithToken({
        url: "api/v1/user/change/password",
        body,
      }),
  });

export const useForgotPasswordConfirm = () =>
  useMutation({
    mutationFn: (body: object) =>
      post({
        url: "api/v1/user/reset/password",
        body,
      }),
  });

export const useLogout = () =>
  useMutation({
    mutationFn: (body: object) =>
      postWithToken({
        url: "api/v1/user/logout",
        body,
      }),
  });
export const useUserProfile = () => {
  return useQuery({
    queryKey: [QUERY.userProfile],
    queryFn: () => getWithToken({ url: "api/v1/user/profile" }),
    staleTime: 0,
    select: (response) => {
      return response;
    },
  });
};

export const useUpdateUserProfile = () =>
  useMutation({
    mutationFn: (body: object) =>
      put({
        url: "api/v1/user/profile",
        body,
        contentType: "multipart/form-data",
      }),
  });

export const useGetAllFooter = () =>
  useQuery({
    queryKey: [QUERY.footer],
    queryFn: () => get({ url: "api/v1/organization/settings/" }),
    select: (response) => {
      return response;
    },
  });
export const useForgotPasswordOtp = () =>
  useMutation({
    mutationFn: (body: object) => post({ url: "api/v1/user/otp", body }),
  });
