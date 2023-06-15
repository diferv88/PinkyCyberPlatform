/* eslint-disable react/prop-types */
import { ThemeProvider } from "styled-components";
const theme = {
  color: {
    brandColors: {
      base: {
        Base900: "rgba(21, 24, 27, 1)",
        // to be used for display headings
        Base800: "rgba(42, 48, 54, 1)",
        // to be used for headings
        Base700: "rgba(62, 72, 82, 1)", //! Primary
        // to be used for paragraph text and any other descruptive text.
        Base600: "rgba(83, 96, 109, 1)",
        // TODO
        Base500: "rgba(104, 120, 136, 1)", //! Secondary
        // to be used for input labels, paragraphs and any other descruptive text.
        Base400: "rgba(134, 147, 160, 1)",
        // TODO
        Base300: "rgba(164, 174, 184, 1)", //! Tertiary
        // to be used fot hover state input and dropdown border color
        Base200: "rgba(195, 201, 207, 1)",
        // To be used for default state input and dropdown border color
        Base100: "rgba(225, 228, 231, 1)",
        // To be used for table borders, sorted by column higlight, card borders.
      },
      baseBlue: {
        Base900: "rgba(3, 6, 19, 1)",
        // TODO
        Base800: "rgba(7, 12, 38, 1)",
        // TODO
        Base700: "rgba(10, 17, 56, 1)",
        // TODO
        Base600: "rgba(14, 23, 75, 1)",
        // to be used for hover/active state icon colors, table column heading or secondary button text.
        Base500: "rgba(16, 28, 96, 1)",
        // to be used for deafult stare icon colors, table column heading or secondary button text.
        Base400: "rgba(65, 74, 126, 1)",
        // TODO
        Base300: "rgba(112, 119, 158, 1)",
        // TODO
        Base200: "rgba(160, 165, 191, 1)",
        // to be used fto border color pn default stae secondary buttons and background color on hover/ active secondary buttons/
        Base100: "rgba(207, 210, 223, 1)",
        // to be used for background color on default stae secondary buttons.
      },
      baseRed: {
        Base900: "#28000B",
        // TODO
        Base800: "#500016",
        // TODO
        Base700: "#780022",
        // TODO
        Base600: "#A0002D",
        // TODO
        Base500: "#C80038",
        // to be used for logotype secondary color or any other brand related assest like icons/
        Base400: "#D33360",
        // TODO
        Base300: "#DE6688",
        // TODO
        Base200: "#E999AF",
        // TODO
        Base100: "#F4CCD7",
        // TODO
      },
    },
    systemColors: {
      info: {
        blue800: "#062663",
        // TODO
        blue700: "#0A3A95",
        // TODO
        blue600: "#0D4DC6",
        // to be used for hover/active stare links and primary button text.
        blue500: "#1060F8",
        // to be used for default state link and primary buttons.
        blue400: "#4080F9",
        // TODO
        blue300: "#70A0FB",
        // TODO
        blue200: "#9FBFFC",
        // to be used for background color on default stae secondary action buttons.
        blue100: "#CFDFFE",
        // to be used for information alert background color.
      },
      success: {
        green800: "#0A4A33",
        // TODO
        green700: "#0E6E4D",
        // TODO
        green600: "#139366",
        // to be used for hover/active state positive primary action buttons
        green500: "#18B880",
        // to be used fordefult state positive action primary buttons.
        green400: "#46C699",
        // TODO
        green300: "#74D4B3",
        // to be used for background color on hover/active state seconday positive action buttons.
        green200: "#A3E3CC",
        // to be used for background color on default stae secondary action buttons.
        green100: "#D1F1E6",
        // to be used for information alert background color.
      },
      warning: {
        yellow800: "#644703",
        // TODO
        yellow700: "#956B05",
        // TODO
        yellow600: "#C78E06",
        // to be used for hover state warning primary action buttons
        yellow500: "#F9B208",
        // to be used fordefult state warning action primary buttons.
        yellow400: "#FAC139",
        // TODO
        yellow300: "#FBD16B",
        // to be used for background color on hover/active state seconday warning action buttons.
        yellow200: "#FDE09C",
        // to be used for background color on default stae secondary action buttons.
        yellow100: "#FEF0CE",
        // to be used for information alert background color.
      },
      danger: {
        red800: "#5D1620",
        // TODO
        red700: "#8B2230",
        // TODO
        red600: "#BA2D40",
        // to be used for hover destructive primary action buttons
        red500: "#E83850",
        // to be used fordefult state destructive action primary buttons.
        yellow400: "#ED6073",
        // TODO
        red300: "#F18896",
        // to be used for background color on hover/active state seconday destructive action buttons.
        red200: "#F6AFB9",
        // to be used for background color on default stae secondary action buttons.
        red100: "#FAD7DC",
        // to be used for information alert background color.
      },
    },
    other: {
      white: "#FFFFFF",
      black: "#000000",
    },
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
