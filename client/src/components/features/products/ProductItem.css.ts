import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/themes.css';

export const productLink = style({
  textDecoration: "none",
  color: vars.colors.complementary
})

export const productCard = style({
  display: "grid",
  justifyItems: "center",
  textAlign: "center",
  borderRadius: "5px",
  background: `${vars.colors.complementary}`,
  padding: `${vars.space['1x']}`,
  border: "1px solid black",
  minHeight: "24em",
  transition: `all .2s ease-in-out`,

  ':hover': {
      transform: `scale(1.1)`,
      boxShadow: `0 5px 15px ${vars.colors.brand}`
  },
})

export const productCardContent = style({
  color: `${vars.colors.primary}`,
  backgroundColor: vars.colors.complementary,
  margin: "0.5rem 0.5rem",
  padding: "0.5rem",
  width: "100%",
})

export const productCardTitle = style({
  fontSize: vars.fontSizes['3x'],
  fontWeight: vars.fontWeights.bold
})

export const productCardCategory = style({
  color: `${vars.colors.primary}`
})


export const onSale = style({
  backgroundColor: "red",
  color: `${vars.colors.complementary}`,
  position: "absolute",
  width: "5em"
})

export const productImage = style({
  minHeight: "10em",
  maxHeight: "10em"
})