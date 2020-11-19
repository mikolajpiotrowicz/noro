export interface Theme {
  colors: any;
  boxShadows: any;
  fontWeights: any;
  breakpoints: any;
  size: any;
}
export const theme: Theme = {
  colors: {
    black: "#000",
    gray1: "#707070",
    gray2: "#999",
    gray3: "#c0c0c0",
    gray4: "#f3f3f3",
    white: "#fff",
    gradient1: "#43F0DF",
    gradient2: "#F61A1A",
  },
  boxShadows: {
    smallShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.04)",
  },
  size: {
    h1: 32,
    h2: 24,
    h3: 16,
    small: 12,
  },
  fontWeights: {
    light: 400,
    normal: 500,
    bold: 800,
  },
  breakpoints: {
    smMobile: 360,
    mdMobile: 520,
    mobile: 768,
    tablet: 1024,
    desktop: 1440,
    bigDesktop: 1600,
  },
};
