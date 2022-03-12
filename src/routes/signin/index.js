import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import {
  Button,
  Input,
  Text,
  Icon,
  Avatar,
  Layout,
} from "@ui-kitten/components";
import {
  FacebookIcon,
  GoogleIcon,
  PersonIcon,
  TwitterIcon,
} from "../../assets/icons";
import { KeyboardAvoidingView } from "../../components/KeyboardAvoidingView";
import { styles } from "./styles";

export default ({ navigation }) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const onSignInButtonPress = () => {
    navigation && navigation.goBack();
  };

  const onSignUpButtonPress = () => {
    navigation && navigation.navigate("SignUp4");
  };

  const onForgotPasswordButtonPress = () => {
    navigation && navigation.navigate("ForgotPassword");
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  const renderPasswordIcon = props => (
    <TouchableWithoutFeedback onPress={onPasswordIconPress}>
      <Icon {...props} name={passwordVisible ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  return (
    <Layout style={styles.container}>
      <KeyboardAvoidingView>
        <View style={styles.headerContainer}>
          <Avatar
            style={styles.logo}
            source={require("../../assets/images/logo.png")}
            shape="square"
          />
          <Text category="s1">OFW Tambayan Group</Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            placeholder="Email"
            accessoryRight={PersonIcon}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            style={styles.passwordInput}
            placeholder="Password"
            accessoryRight={renderPasswordIcon}
            value={password}
            secureTextEntry={!passwordVisible}
            onChangeText={setPassword}
          />
          <View style={styles.forgotPasswordContainer}>
            <Button
              style={styles.forgotPasswordButton}
              appearance="ghost"
              onPress={onForgotPasswordButtonPress}>
              Forgot your password?
            </Button>
          </View>
        </View>
        <Button
          style={styles.signInButton}
          size="medium"
          onPress={onSignInButtonPress}>
          SIGN IN
        </Button>
        <View style={styles.socialAuthContainer}>
          <Text style={styles.socialAuthHintText}>
            Or Sign In using Social Media
          </Text>
          <View style={styles.socialAuthButtonsContainer}>
            <Button
              appearance="ghost"
              size="giant"
              accessoryLeft={GoogleIcon}
            />
            <Button
              appearance="ghost"
              size="giant"
              accessoryLeft={FacebookIcon}
            />
            <Button
              appearance="ghost"
              size="giant"
              accessoryLeft={TwitterIcon}
            />
          </View>
        </View>
        <Button
          style={styles.signUpButton}
          appearance="ghost"
          onPress={onSignUpButtonPress}>
          Don't have an account? Sign Up
        </Button>
      </KeyboardAvoidingView>
    </Layout>
  );
};
