import { StyleSheet } from "react-native";
import { global } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: global.fonts.title700,
    color: global.colors.heading,
    fontSize: 18,
  },
  subtitle: {
    fontFamily: global.fonts.text400,
    color: global.colors.highlight,
    fontSize: 13,
  },
});
