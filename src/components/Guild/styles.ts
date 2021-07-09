import { StyleSheet } from "react-native";
import { global } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontFamily: global.fonts.title700,
    color: global.colors.heading,
    fontSize: 18,
    marginBottom: 11,
  },
  type: {
    fontFamily: global.fonts.text400,
    color: global.colors.highlight,
    fontSize: 13,
    marginBottom: 24,
  },
});
