"use client";
//region Global Imports
import { Alert, Button } from "@mui/material";
//endregion

import { useCookies, IS_SHOW_COOKIE_BANNER } from "~/app/shared";

const COMPONENT_KEY = "CookieBanner";

function CookieBanner() {
  const [isShowCookieBanner, setCookieValue, removeCookie] = useCookies(IS_SHOW_COOKIE_BANNER, true);
  const handleBtnClick = () => {
    // handleToggle();
    setCookieValue(false);
  }
  console.log("isShowCookieBanner", isShowCookieBanner)
  return isShowCookieBanner ? <Alert
      action={
        <Button color="inherit" size="small" onClick={handleBtnClick}>
          UNDO
        </Button>
      }
    >
      We use cookies to ensure you have the best browsing experience on our
      website. Please read our cookie policy for more information about how we
      use cookies
    </Alert> : null
}

export { COMPONENT_KEY };
export default CookieBanner;
