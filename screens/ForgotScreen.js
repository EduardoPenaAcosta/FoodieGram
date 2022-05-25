import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase-config";
import { HeaderTitle } from "../constants/AppStyles";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handleForgotPassword = (email) => {
    auth
      .sendPasswordResetEmail(email)
      .then(function (user) {
        alert("Por favor, revise su email ...");
        navigation.replace("Login");
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground
        source={require("../img/coock.jpeg")}
        resizeMode="cover"
        style={styles.image}
      >
        <HeaderTitle style={styles.title}>Recupera tu contraseña </HeaderTitle>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Introduce tu correo"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            autoCapitalize={"none"}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => handleForgotPassword(email)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Reset password</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    marginLeft: "10%",
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    marginLeft: "20%",
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  title: {
    marginLeft: "7%",
    color: "#ffff",
  },
  logoImage: {},
});
