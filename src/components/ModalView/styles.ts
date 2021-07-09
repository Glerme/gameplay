import { StyleSheet } from "react-native";
import { global } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  overlay: {
    backgroundColor: global.colors.overlay,
    flex: 1,
  },
  bar: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: global.colors.secondary30,
    alignSelf: "center",
    marginTop: 13,
  },
});
