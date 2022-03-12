import React, { useState, useCallback } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import {
  Button,
  CheckBox,
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
  EmailIcon,
} from "../../assets/icons";

import { KeyboardAvoidingView } from "../../components/KeyboardAvoidingView";

import { styles } from "./styles";

export default ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSignUpButtonPress = () => {
    navigation && navigation.goBack();
  };

  const onSignInButtonPress = () => {
    navigation && navigation.navigate("SignIn");
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  const renderPasswordIcon = props => (
    <TouchableWithoutFeedback onPress={onPasswordIconPress}>
      <Icon {...props} name={passwordVisible ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  const renderCheckboxLabel = useCallback(
    evaProps => (
      <Text {...evaProps} style={styles.termsCheckBoxText}>
        I read and agree to Terms & Conditions
      </Text>
    ),
    [],
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
            style={styles.formInput}
            autoCapitalize="none"
            placeholder="Username"
            size="large"
            accessoryRight={PersonIcon}
            value={username}
            onChangeText={setUsername}
          />
          <Input
            style={styles.formInput}
            autoCapitalize="none"
            placeholder="Email"
            size="large"
            accessoryRight={EmailIcon}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            style={styles.formInput}
            autoCapitalize="none"
            secureTextEntry={!passwordVisible}
            placeholder="Password"
            size="large"
            accessoryRight={renderPasswordIcon}
            value={password}
            onChangeText={setPassword}
          />
          <CheckBox
            style={styles.termsCheckBox}
            checked={termsAccepted}
            onChange={checked => setTermsAccepted(checked)}>
            {renderCheckboxLabel}
          </CheckBox>
        </View>
        <Button
          style={styles.signUpButton}
          size="medium"
          onPress={onSignUpButtonPress}>
          SIGN UP
        </Button>
        <View style={styles.socialAuthContainer}>
          <Text style={styles.socialAuthHintText}>Or Continue With</Text>
          <View style={styles.socialAuthButtonsContainer}>
            <Button
              appearance="outline"
              style={styles.socialIcon}
              accessoryLeft={GoogleIcon}
            />
            <Button
              appearance="outline"
              style={styles.socialIcon}
              accessoryLeft={FacebookIcon}
            />
            <Button
              appearance="outline"
              style={styles.socialIcon}
              accessoryLeft={TwitterIcon}
            />
          </View>
        </View>
        <Button
          style={styles.signInButton}
          appearance="ghost"
          onPress={onSignInButtonPress}>
          Already have account? Sign In
        </Button>
      </KeyboardAvoidingView>
    </Layout>
  );
};
