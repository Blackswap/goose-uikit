import { MediaQueries, Breakpoints, Spacing, Shadows } from "./types";
import { baseColors } from "./colors";

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`);

const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  nav: `@media screen and (min-width: ${breakpointMap.lg}px)`,
};

export const shadows: Shadows = {
  elevation: `0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)!important;`,
  base: `0px 0px 0px 1px  ${baseColors.primary}, 0px 0px 0px 4px  ${baseColors.primary}`,
  level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
  active: `0 3px 1px -2px ${baseColors.primary},0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0  ${baseColors.primary} ;`,
  success: `0 3px 1px -2px ${baseColors.success},0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0  ${baseColors.success} ;`,
  warning: `0 3px 1px -2px ${baseColors.warning},0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0  ${baseColors.warning} ;`,
  focus: `0px 0px 0px 1px  ${baseColors.primary}, 0px 0px 0px 4px  ${baseColors.primary}`,
  inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64];

const radii = {
  small: "2px",
  default: "16px",
  card: "32px",
  circle: "50%",
};

const zIndices = {
  dropdown: 10,
  modal: 100,
};

const padding = {
  small: "2px",
  default: "16px",
  card: "32px",
  farmCard: "24px",
  circle: "50%",
};

const font = {
  name: "Raleway, sans-serif",
  weight: {
    base: 400,
  },
};

export default {
  font,
  siteWidth: 1200,
  breakpoints,
  mediaQueries,
  spacing,
  shadows,
  radii,
  zIndices,
  padding,
};
