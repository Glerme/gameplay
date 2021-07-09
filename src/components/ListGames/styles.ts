import { StyleSheet } from "react-native";
import { global } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignSelf: "center",
  },
  content: {
    flex: 1,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  title: {
    fontFamily: global.fonts.title700,
    color: global.colors.heading,
    fontSize: 18,
  },
  category: {
    fontFamily: global.fonts.text400,
    color: global.colors.highlight,
    fontSize: 13,
    marginRight: 24,
  },
  subtitle: {
    fontFamily: global.fonts.text400,
    color: global.colors.highlight,
    fontSize: 13,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  playersInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    fontFamily: global.fonts.text500,
    color: global.colors.heading,
    fontSize: 13,
    marginLeft: 7,
  },
  player: {
    fontFamily: global.fonts.text500,
    fontSize: 13,
    marginLeft: 7,
    marginRight: 24,
  },
});
