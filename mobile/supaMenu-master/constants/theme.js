import { Dimensions, Platform, PixelRatio } from "react-native";
const { width, height } = Dimensions.get("window");

export const headerTitle = "KFD";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const COLORS = {
  // base colors
  primary: "#4A06D7", // orange
  secondary: "#F1F0F5", // gray
  dark: '#2B2D2F',

  // colors
  black: "#1E1F20",
  lightBlack: "#c0c0c0",
  white: "#FFFFFF",

  red: "#ff0000",
  lightRed: "#fdd6d6",

  inputGray: "#A4A5A6",
  iconGray: "#d6d4d5",
  lightGray: "#F5F5F6",
  lightGray2: "#F6F6F7",
  lightGray3: "#EFEFF1",
  lightGray4: "#F8F8F9",
  transparent: "transparent",
  darkgray: "#898C95",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 16,
  iconSize: 24,
  cardSize: 70,
  radius: 8,
  padding: 8,
  padding2: 12,
  margin: 14,

  // font sizes
  largeTitle: normalize(50),
  h1: normalize(24),
  h2: normalize(17),
  h3: normalize(17),
  h4: normalize(16),
  h5: normalize(19),
  h6: normalize(20),
  body1: normalize(30),
  body2: normalize(16),
  body3: normalize(15),
  body3B: normalize(15),
  body4: normalize(14),
  body5: normalize(12),
  body6: 13,

  //fontWeight
    Thin: "100",
    UltraLight: "200",  
    Light: "300",
    Regular: "400",
    Medium: "500",
    Semibold: "600",
    Bold: "700",
    Heavy: "800",
    Black: "900",

  // app dimensions
  width,
  height,
  half: height / 2,
};

export const FONTS = {
  pageTitle: {
    fontSize: SIZES.h6,
    color: COLORS.dark,
    fontWeight:SIZES.Semibold
  },
  largeTitle: {
    fontFamily: "Roboto-regular",
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: {
    fontFamily: "Roboto-Bold",
    fontSize: SIZES.font,
    lineHeight: normalize(27),
  },
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: "Roboto-Bold", fontSize: SIZES.h5, lineHeight: 22 },
  body1: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },

  body3B: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body3B,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: "Roboto-Regular",
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

const appTheme = { COLORS, SIZES, FONTS, normalize };

export default appTheme;
