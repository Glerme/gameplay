import { StyleSheet } from "react-native";
import { global } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    color: global.colors.heading,
    textAlign: "center",
    fontSize: 40,
    marginBottom: 16,
    fontFamily: global.fonts.title700,
    lineHeight: 40,
  },
  subtitle: {
    color: global.colors.heading,
    fontSize: 15,
    textAlign: "center",
    marginBottom: 64,
    fontFamily: global.fonts.title500,
    lineHeight: 25,
  },
});
