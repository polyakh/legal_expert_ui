export const PATH_INDEX = "/";
export const PATH_SERVICES = "/services/";
export const PATH_ABOUT_US = "/about-us/";
export const PATH_CONTACTS = "/contacts/";
export const PATH_PRIVACY_POLICY = "/privacy-policy/";

export const ROUTES_PATH: Record<string, string> = {
  PATH_INDEX,
  PATH_SERVICES,
  PATH_ABOUT_US,
  PATH_CONTACTS,
  PATH_PRIVACY_POLICY,
};

export type RoutesPath = {
  [key in keyof typeof ROUTES_PATH]: typeof ROUTES_PATH[key];
};