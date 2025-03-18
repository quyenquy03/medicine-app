import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const HomeCalendarStyle = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  titleBox: {},
  titleText: {
    fontSize: 18,
    fontFamily: FONTS.MERIENDA_MEDIUM,
    color: COLORS.primary,
  },
  actionBox: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#ffeff8",
  },
  modeBox: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
    overflow: "hidden",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  },
  modeItem: {
    padding: 5,
  },
  active: {
    backgroundColor: COLORS.textGray,
  },
  iconCalendar: {
    width: 18,
    height: 18,
  },
  calendar: {
    flexDirection: "row",
    width: "100%",
    gap: 5,
    justifyContent: "space-between",
  },
  calendarItem: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.backgroundPrimary,
    cursor: "pointer",
    minHeight: 70,
    borderRadius: 5,
    padding: 5,
    minWidth: 45,
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  },
  calendarItemActive: {
    backgroundColor: COLORS.secondary,
  },
  traceText: {
    fontSize: 12,
    color: "#333",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingBottom: 5,
    fontFamily: FONTS.MERIENDA_MEDIUM,
  },
  traceTextActive: {
    color: COLORS.textWhite,
    borderBottomColor: COLORS.textWhite,
  },
  dateTextActive: {
    color: COLORS.textWhite,
  },
  dateText: {
    fontSize: 18,
    fontFamily: FONTS.MERIENDA_EXTRA_BOLD,
    color: COLORS.primary,
  },
  monthText: {
    fontSize: 12,
    fontFamily: FONTS.MERIENDA_MEDIUM,
  },
  calendarFull: {},
  calendarFullHeader: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  calendarFullHeaderItem: {
    fontFamily: FONTS.MERIENDA_MEDIUM,
    minWidth: 45,
    textAlign: "center",
  },
  calendarFullBody: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    justifyContent: "space-between",
    marginTop: 10,
  },
  calendarFullBodyItem: {
    minWidth: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  calendarFullItemTextBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.backgroundPrimary,
    borderRadius: 55,
    width: 25,
    height: 25,
  },
  calendarFullItemTextBoxInactive: {
    backgroundColor: COLORS.secondary,
  },
  calendarFullItemText: {
    fontFamily: FONTS.MERIENDA_MEDIUM,
    color: COLORS.primary,
    lineHeight: 18,
    fontSize: 12,
  },
  calendarFullItemTextActive: {
    color: COLORS.textWhite,
  },
});
export default HomeCalendarStyle;
