import { StyleSheet } from "react-native";
import { global } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: global.fonts.title700,
    color: global.colors.heading,
    fontSize: 18,
  },
  nameStatus: {
    fontFamily: global.fonts.text400,
    color: global.colors.highlight,
    fontSize: 13,
  },
  subtitle: {
    fontFamily: global.fonts.text400,
    color: global.colors.highlight,
    fontSize: 13,
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
  },
  bulletStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
});
