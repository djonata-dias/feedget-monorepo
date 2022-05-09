import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginTop: 36,
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 20,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
    lineHeight: 24,
    marginTop: 8,
  },
  button: {
    marginTop: 24,
    marginBottom: 40,
    width: 173,
    height: 40,
    backgroundColor: theme.colors.surface_secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  buttonText: {
    color: theme.colors.text_primary,
    fontSize: 14,
    fontWeight: "500",
  },
});
