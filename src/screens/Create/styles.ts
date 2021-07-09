import { StyleSheet } from "react-native";
import { global } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontFamily: global.fonts.title700,
    color: global.colors.heading,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  select: {
    flexDirection: "row",
    width: "100%",
    height: 68,
    borderColor: global.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    paddingRight: 25,
    overflow: "hidden",
  },
  selectBody: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: global.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
  },
  field: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  colunm: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    marginRight: 4,
    fontSize: 15,
    fontFamily: global.fonts.text500,
    color: global.colors.highlight,
  },
  caracteresLimit: {
    fontFamily: global.fonts.text400,
    fontSize: 13,
    color: global.colors.highlight,
  },
  footer: {
    marginVertical: 20,
    marginBottom: 56,
  },
});
