import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const HomeAddPresciptionStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    marginTop: 20,
  },
  text: {
    fontFamily: FONTS.MERIENDA_EXTRA_BOLD,
    fontSize: 20,
    color: COLORS.primary,
  },
  buttonAdd: {
    cursor: "pointer",
    backgroundColor: COLORS.backgroundPrimary,
    borderRadius: 50,
    boxShadow: "0 0 10px rgba(238, 102, 200, 0.43)",
  },
  plusImage: {
    width: 40,
    height: 40,
  },
});
export default HomeAddPresciptionStyles;
