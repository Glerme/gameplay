import { StyleSheet } from "react-native";
import { global } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  user: {
    flexDirection: "row",
  },
  greeting: {
    fontFamily: global.fonts.title500,
    fontSize: 24,
    color: global.colors.heading,
    marginRight: 6,
  },
  username: {
    fontFamily: global.fonts.title700,
    fontSize: 24,
    color: global.colors.heading,
  },
  message: {
    fontFamily: global.fonts.text400,
    color: global.colors.highlight,
  },
});
