import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/themes.css'

export const hardwareHeading = style({
    marginTop: "2em",
    color: `${vars.colors.complementary}`
})

export const cartSection = style({
    backgroundColor: `${vars.colors.compTwo}`,
    borderRadius: "5px",
    color: `${vars.colors.brandLight}`,
    width: "40vw",
    margin: "auto"
})

export const cartItem = style({
    backgroundColor: `${vars.colors.grey600}`,
    margin: "1em auto",
    width: "80%"
})