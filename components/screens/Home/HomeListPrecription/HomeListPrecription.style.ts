import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const HomeListPrecriptionStyles = StyleSheet.create({
  container: {},
  emptyBox: {
    justifyContent: "center",
    alignItems: "center",
    height: 400,
    backgroundColor: "#ffeff8",
  },
  emptyImage: {
    width: 200,
    height: 200,
  },
  emptyText: {
    fontFamily: FONTS.MERIENDA_MEDIUM,
    color: COLORS.dark,
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",
  },
});
export default HomeListPrecriptionStyles;
