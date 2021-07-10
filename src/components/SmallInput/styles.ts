import { StyleSheet } from "react-native";
import { global } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: global.colors.secondary40,
    borderRadius: 8,
    color: global.colors.heading,
    fontFamily: global.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    textAlign: "center",
    borderWidth: 1,
    borderColor: global.colors.secondary50,
  },
});
