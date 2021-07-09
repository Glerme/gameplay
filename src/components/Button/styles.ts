import { StyleSheet } from "react-native";
import { global } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    backgroundColor: global.colors.primary,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    flex: 1,
    color: global.colors.heading,
    fontSize: 15,
    textAlign: "center",
    fontFamily: global.fonts.text500,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: global.colors.line,
  },
  icon: {
    width: 24,
    height: 18,
  },
});
