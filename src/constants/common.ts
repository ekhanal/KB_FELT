const PRODUCTION_ENV = "production";
const STAGING_ENV = "staging";

// Use import.meta.env for Vite
// const API_URL = import.meta.env.VITE_API_BASE_URL;

export const BASE_URL = (() => {
  switch (import.meta.env.VITE_ENVIRONMENT) {
    case PRODUCTION_ENV:
      return "http://admin.kbfeltnwool.com";
    case STAGING_ENV:
      return "http://admin.kbfeltnwool.com";
    default:
      return "http://admin.kbfeltnwool.com";
  }
})();

export const AUTH_COOKIE_CONFIG = {
  BEARER_TOKEN: "bearer-token",
  loggedInCookie: "isLoggedIn",
  ACCESS_TOKEN: "pokhara-motors-user-access-token",
  REFRESH_TOKEN: "pokhara-motors-user-refresh-token",
};
