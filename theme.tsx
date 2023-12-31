import { extendTheme } from "@chakra-ui/react";
import ButtonStyle from "./component/Style/ButtonStyle";

const theme = extendTheme({
  colors: {
    Color: {
      ColorWhite: "#FFFFFF",
      ColorPrimary: "#3B3A5D",
      SecondaryColor: "#FFBB50",
      ContentColor1: "#8F8F8F",
      ContentColor2: "#F2F2F2",
      ContentColor3: "#F5F1EF", 
      ContentColor4: "#8E8E8E", 
      LinkColor: "#B16642",
      BorderColor: "#B16642",
      TextColor: "#0A0B3B",
      TextColor2: "#A4A4A4",
      TextColor3: "#757575",
    },
  },
  components: {
    Button: ButtonStyle,
  },
});
export default theme;
