import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    width: 160,
    height: 120,
  },

  headerContainer: {
    minHeight: 216,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  passwordInput: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  signUpButton: {
    marginVertical: 17,
  },
  socialAuthContainer: {
    marginTop: 32,
  },
  socialAuthButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  socialAuthHintText: {
    alignSelf: "center",
    marginBottom: 16,
  },
});
