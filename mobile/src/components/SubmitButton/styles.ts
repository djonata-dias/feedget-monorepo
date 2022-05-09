import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = (disabled?: boolean) =>
  StyleSheet.create({
    container: {
      width: 279,
      height: 40,
      backgroundColor: disabled
        ? theme.colors.brand_500
        : theme.colors.brand_300,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 4,
    },
    text: {
      color: disabled ? theme.colors.text_secondary : theme.colors.text_primary,
    },
  });
