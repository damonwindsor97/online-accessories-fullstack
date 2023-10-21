import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/themes.css';

export const PromotionDiv = style({
    textAlign: "center",
    alignContent: "center",
    padding: vars.space['3x']
})

export const PromotionWindow = style({
    width: "60vw",
    border: "solid black",
    margin: "0 auto",
    
})