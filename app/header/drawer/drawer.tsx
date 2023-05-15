"use client";

//region Global Imports
import React, { useState } from "react";
import NextLink from "next/link";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
//endregion

import { NAV_ITEMS } from "~/app/header";

const COMPONENT_KEY = "Drawer";

interface DrawerOwnProps {
  onClose: () => void;
}
function Logo() {
  return <img src="/next.svg" alt="Your Logo" width={40} height={40} />;
}

function Drawer({ onClose }: DrawerOwnProps) {
  return (
    <Box onClick={onClose} sx={{ textAlign: "center" }}>
      <NextLink href="/">
        <Logo />
      </NextLink>
      <Divider />
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item} disablePadding>
            <NextLink href={`/${item.toLowerCase()}`}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export { COMPONENT_KEY };
export default Drawer;
