"use client"
import { useEffect, useRef } from 'react';
import Cookies, { CookieAttributes } from 'js-cookie';

type UseCookiesReturnType<T> = [T, (value: T, options?: CookieAttributes) => void, (options?: CookieAttributes) => void];

function useCookies<T>(cookieName: string, defaultValue: T, options?: CookieAttributes): UseCookiesReturnType<T> {
  const cookieRef = useRef<T>(defaultValue);

  useEffect(() => {
    const cookieValue = Cookies.get(cookieName);
    if (cookieValue !== undefined) {
      cookieRef.current = JSON.parse(cookieValue);
    } else {
      Cookies.set(cookieName, JSON.stringify(defaultValue), options);
    }
  }, [cookieName, defaultValue, options]);

  const setCookieValue = (value: T, cookieOptions: CookieAttributes = {}) => {
    const mergedOptions = { ...options, ...cookieOptions };
    Cookies.set(cookieName, JSON.stringify(value), mergedOptions);
    cookieRef.current = value;
  };

  const removeCookie = (cookieOptions: CookieAttributes = {}) => {
    const mergedOptions = { ...options, ...cookieOptions };
    Cookies.remove(cookieName, mergedOptions);
    cookieRef.current = defaultValue;
  };

  return [cookieRef.current, setCookieValue, removeCookie];
}

const IS_SHOW_COOKIE_BANNER = 'isShowCookieBanner'
export  { useCookies, IS_SHOW_COOKIE_BANNER };
