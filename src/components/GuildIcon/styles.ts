import { StyleSheet } from "react-native";
import { global } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: global.colors.discord,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
});
