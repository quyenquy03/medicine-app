import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const AddPrescriptionStyles = StyleSheet.create({
  container: {
    padding: 5,
  },
  changeAvatarBox: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  formBox: {},
  formItem: {
    marginBottom: 20,
  },
  formItemLabel: {
    marginBottom: 5,
  },
  textLabel: {
    fontSize: 14,
    fontFamily: FONTS.MERIENDA_MEDIUM,
    color: COLORS.secondary,
  },
  formItemInputBox: {},

  flexRow: {
    flexDirection: "row",
    gap: 10,
  },
  flexCol: {
    flex: 1,
  },
  datePickerStyle: {
    width: "100%",
    height: 50,
    borderRadius: 10,
  },

  imageBox: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "flex-end",
    paddingTop: 10,
  },
  chooseImageBox: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
    height: 125,
    width: 125,
    borderRadius: 5,
    boxShadow: "0 0 10px rgba(238, 102, 200, 0.43)",
  },

  medicineBox: {
    padding: 5,
    borderRadius: 5,
    boxShadow: "0 0 10px rgba(238, 102, 200, 0.43)",
  },
  medicineHeader: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondary,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  medicineHeaderText: {
    fontSize: 14,
    fontFamily: FONTS.MERIENDA_MEDIUM,
    color: COLORS.secondary,
  },
  emptyMedicineBox: {
    alignItems: "center",
    minHeight: 100,
    paddingVertical: 20,
  },
  emptyMedicineText: {
    fontSize: 13,
    fontFamily: FONTS.MERIENDA_LIGHT,
    color: COLORS.secondary,
    textAlign: "center",
    lineHeight: 25,
  },
  buttonAdd: {
    cursor: "pointer",
    backgroundColor: COLORS.backgroundPrimary,
    marginTop: 10,
    borderRadius: 50,
    boxShadow: "0 0 10px rgba(238, 102, 200, 0.43)",
  },
  plusImage: {
    width: 40,
    height: 40,
  },
});
export default AddPrescriptionStyles;
