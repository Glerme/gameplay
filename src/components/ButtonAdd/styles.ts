import { StyleSheet } from "react-native";
import { global } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    height: 48,
    width: 48,
    backgroundColor: global.colors.primary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
