import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/themes.css';

export const btnBox = style({
  width: "10%",
  margin: `${vars.space['4x']} auto`
})

export const listGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
  gap: vars.space['2x'],
  width: "80%",
  margin: `${vars.space['2x']} auto`,
  justifyItems: "center",
})