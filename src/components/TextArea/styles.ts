import { StyleSheet } from "react-native";
import { global } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 95,
    backgroundColor: global.colors.secondary40,
    borderRadius: 8,
    color: global.colors.heading,
    fontFamily: global.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    borderWidth: 1,
    borderColor: global.colors.secondary50,
    paddingHorizontal: 16,
    paddingTop: 16,
    textAlignVertical: "top",
  },
});
