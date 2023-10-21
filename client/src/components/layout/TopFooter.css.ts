import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const TopFooter = style({
    color: vars.colors.complementary,
    backgroundColor: vars.colors.grey200,
    padding: vars.space["3x"],
    borderTop: `1px solid ${vars.colors.grey300}`,
    textAlign: "center"
})

export const TopFooterContent = style({
    content: "",
    display: "inline",
    clear: "both",
})

export const TopFooterNav = style({
    float: "left",
    width: "33.33%"
})

export const NavStyling = style({
    listStyleType: "none",
})