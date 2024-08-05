import axios, { AxiosResponse } from "axios";
import { AUTH_COOKIE_CONFIG, BASE_URL } from "../constants/common";
import { getCookie, removeCookie, setCookie } from "../utils/cookie";
import { parseApiError } from "../helper/error";

const getToken = () => getCookie(AUTH_COOKIE_CONFIG.ACCESS_TOKEN);

axios.interceptors.request.use(
  async (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      // If no token exists, ensure Authorization header is not set
      delete config.headers.Authorization;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to an unauthorized status and the request hasn't been retried yet
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Set the retry flag to true

      try {
        const refreshToken = getCookie(AUTH_COOKIE_CONFIG.REFRESH_TOKEN);

        if (!refreshToken) {
          // Handle missing refresh token scenario
          removeCookie(AUTH_COOKIE_CONFIG.ACCESS_TOKEN);
          removeCookie(AUTH_COOKIE_CONFIG.REFRESH_TOKEN);
          return Promise.reject(error);
        }

        const response = await axios.post(
          `${BASE_URL}/api/v1/user/token/refresh/`,
          {
            refresh: refreshToken,
          }
        );

        const { access } = response.data;

        // Set the new access token in the cookies
        setCookie({
          cookieName: AUTH_COOKIE_CONFIG.ACCESS_TOKEN,
          value: access,
          expiresIn: 1, // Set the expiration time in days
        });

        // Update axios default authorization header with the new access token
        axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;

        // Retry the original request with the new access token
        originalRequest.headers["Authorization"] = `Bearer ${access}`;
        return axios(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);

        // Remove cookies if token refresh fails
        removeCookie(AUTH_COOKIE_CONFIG.ACCESS_TOKEN);
        removeCookie(AUTH_COOKIE_CONFIG.REFRESH_TOKEN);

        return Promise.reject(refreshError);
      }
    }

    // Reject the error if it's not an unauthorized status or if the request has already been retried
    return Promise.reject(error);
  }
);
interface ApiRequestParams {
  url: string;
  params?: Record<string, any>;
  body?: any;
  contentType?: string;
}

const get = async ({ url, params }: ApiRequestParams) => {
  const headers: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const token = getToken();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const requestParams = {
    ...params,
  };

  const fullUrl = `${BASE_URL}/${url}`;

  return axios
    .get(fullUrl, {
      headers,
      params: requestParams,
      withCredentials: true,
    })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error) => {
      const errorMessage = parseApiError(error);
      throw Error(errorMessage);
    });
};
const post = async ({
  url,
  body,
  contentType = "application/json",
}: ApiRequestParams) => {
  const fullUrl = `${BASE_URL}/${url}`;

  const headers = {
    Accept: "application/json",
    "Content-Type": contentType,
  };

  return axios
    .post(fullUrl, body, { headers, withCredentials: true })
    .then((response: AxiosResponse) => response.data)
    .catch((error) => {
      throw Error(parseApiError(error));
    });
};

const postWithToken = async ({
  url,
  body,
  contentType = "application/json",
}: ApiRequestParams) => {
  const fullUrl = `${BASE_URL}/${url}`;

  const headers = {
    Accept: "application/json",
    "Content-Type": contentType,
    Authorization: `Bearer ${getToken()}`,
  };

  return axios
    .post(fullUrl, body, { headers, withCredentials: true })
    .then((response: AxiosResponse) => response.data)
    .catch((error) => {
      throw Error(parseApiError(error));
    });
};

const deleteApi = async ({ url }: ApiRequestParams) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  };

  const fullUrl = `${BASE_URL}/${url}`;

  return axios
    .delete(fullUrl, { headers, withCredentials: true })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error) => {
      throw Error(parseApiError(error));
    });
};

const put = async ({
  url,
  body,
  contentType = "application/json",
}: ApiRequestParams) => {
  const fullUrl = `${BASE_URL}/${url}`;
  const headers = {
    Accept: "application/json",
    "Content-Type": contentType,
    Authorization: `Bearer ${getToken()}`,
  };
  return axios
    .put(fullUrl, body, { headers, withCredentials: true })
    .then((response: AxiosResponse) => response.data)
    .catch((error) => {
      throw Error(parseApiError(error));
    });
};

const patch = async ({
  url,
  body,
  contentType = "application/json",
}: ApiRequestParams) => {
  const fullUrl = `${BASE_URL}/${url}`;
  const headers = {
    Accept: "application/json",
    "Content-Type": contentType,
  };
  return axios
    .patch(fullUrl, body, { headers, withCredentials: true })
    .then((response: AxiosResponse) => response.data)
    .catch((error) => {
      throw Error(parseApiError(error));
    });
};

const getWithToken = async ({ url, params }: ApiRequestParams) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  };

  console.log({ headers });

  const requestParams = {
    ...params,
  };

  const fullUrl = `${BASE_URL}/${url}`;

  return axios
    .get(fullUrl, {
      headers,
      params: requestParams,
      withCredentials: true,
    })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error) => {
      const errorMessage = parseApiError(error);
      throw Error(errorMessage);
    });
};

const patchWithToken = async ({
  url,
  body,
  contentType = "application/json",
}: ApiRequestParams) => {
  const fullUrl = `${BASE_URL}/${url}`;
  const headers = {
    Accept: "application/json",
    "Content-Type": contentType,
    Authorization: `Bearer ${getToken()}`,
  };
  return axios
    .patch(fullUrl, body, { headers, withCredentials: true })
    .then((response: AxiosResponse) => response.data)
    .catch((error) => {
      throw Error(parseApiError(error));
    });
};

const postAuth = async ({
  url,
  body,
  contentType = "application/json",
}: ApiRequestParams) => {
  const fullUrl = `${BASE_URL}/${url}`;

  const headers = {
    Accept: "application/json",
    "Content-Type": contentType,
    // Authorization: `Bearer ${getToken()}`,
  };

  return axios
    .post(fullUrl, body, { headers, withCredentials: true })
    .then((response: AxiosResponse) => response.data)
    .catch((error) => {
      throw Error(parseApiError(error));
    });
};

export {
  get,
  post,
  put,
  deleteApi,
  patch,
  getWithToken,
  patchWithToken,
  postWithToken,
  postAuth,
};
