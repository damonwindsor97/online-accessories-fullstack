import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const OaButton = style({
    margin: vars.space['1x'],
    padding: vars.space['1x'],
    color: vars.colors.primary,
    backgroundColor: vars.colors.brandDark,
    borderRadius: 10,
    border: `0px ${vars.colors.complementary} solid`,
    textTransform: "uppercase",
    fontFamily: vars.fonts.brand,
    fontWeight: vars.fontWeights.bolder,
    textAlign: "center",
    transition: "0.2s ease-in",
  
    ":hover": {
      color: vars.colors.complementary,
      backgroundColor: vars.colors.brandLight,
      border: `0px ${vars.colors.complementary} solid`,
    }
  })