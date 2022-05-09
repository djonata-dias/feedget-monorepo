import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  text: {
    fontSize: 12,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
  },
});
