"use client";
import { useEffect, useRef, useState } from "react";
import Cookies, { CookieAttributes } from "js-cookie";

type UseCookiesReturnType<T> = [
  T,
  (value: T, options?: CookieAttributes) => void,
  (options?: CookieAttributes) => void
];
// TODO Improve the hook; we have two re-renders when we mount our Component.
function useCookies<T>(
  cookieName: string,
  defaultValue: T,
  options?: CookieAttributes
): UseCookiesReturnType<T> {
  const [cookieValue, setCookieValue] = useState<T>(() => {
    const cookie = Cookies.get(cookieName);
    if (cookie !== undefined) {
      return JSON.parse(cookie);
    }
    Cookies.set(cookieName, JSON.stringify(defaultValue), options);
    return defaultValue;
  });

  const setCookie = (value: T, cookieOptions: CookieAttributes = {}) => {
    const mergedOptions = { ...options, ...cookieOptions };
    Cookies.set(cookieName, JSON.stringify(value), mergedOptions);
    setCookieValue(value);
  };

  const removeCookie = (cookieOptions: CookieAttributes = {}) => {
    const mergedOptions = { ...options, ...cookieOptions };
    Cookies.remove(cookieName, mergedOptions);
    setCookieValue(defaultValue);
  };

  useEffect(() => {
    setCookieValue((prevValue) => {
      const cookie = Cookies.get(cookieName);
      if (cookie !== undefined) {
        const parsedCookie = JSON.parse(cookie);
        if (parsedCookie !== prevValue) {
          return parsedCookie;
        }
      }
      return prevValue;
    });
  }, [cookieName]);

  return [cookieValue, setCookie, removeCookie];
}

const IS_SHOW_COOKIE_BANNER = "isShowCookieBanner";
export { useCookies, IS_SHOW_COOKIE_BANNER };
