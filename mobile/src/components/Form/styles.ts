import { theme } from "./../../theme/index";
import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    alignItems: "center",
    flex: 1,
    keyboardVerticalOffset: getBottomSpace(),
  },
  title: {
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
    fontSize: 20,
    paddingHorizontal: 8,
  },
  headerButton: {
    position: "absolute",
    left: 8,
    zIndex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: theme.colors.text_primary,
    marginVertical: 16,
    width: "100%",
    top: 0,
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 24,
  },
  titleText: {
    fontSize: 20,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  textInput: {
    width: 327,
    height: 112,
    padding: 12,
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.regular,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "flex-end",
    width: "100%",
  },
  screenshotButton: {
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,
    padding: 8,
  },
});
