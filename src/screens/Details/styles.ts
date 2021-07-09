import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { global } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: "100%",
    height: 234,
    justifyContent: "flex-end",
    marginBottom: 30,
  },
  bannerContent: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontFamily: global.fonts.title700,
    color: global.colors.heading,
  },
  subTitle: {
    fontSize: 13,
    fontFamily: global.fonts.text400,
    color: global.colors.heading,
  },
  members: {
    marginLeft: 24,
    marginTop: 24,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: getBottomSpace(),
  },
});
