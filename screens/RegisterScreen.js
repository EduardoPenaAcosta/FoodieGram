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
  
  const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigation = useNavigation();
  
    const handleSignUp = () => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((userCredentials) => {
            const user = userCredentials.user;
          })
          .catch((error) => alert(error.message));
    
        setEmail("");
        setPassword("");
        navigation.navigate("Home")
      };
    
      const handleBack = () => {navigation.navigate("Login")}
  
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          source={require("../img/coock.jpeg")}
          resizeMode="cover"
          style={styles.image}
        >
          <HeaderTitle style={styles.title}>Registro </HeaderTitle>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Introduce tu correo"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              autoCapitalize={"none"}
              autoComplete="email"
            />
            <TextInput
              placeholder="Introduce tu contraseña"
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              secureTextEntry={true}
              autoCapitalize={"none"}
            />
          </View>
  
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => handleSignUp()} style={styles.button}>
              <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleBack()}
              style={[styles.button, styles.buttonOutline]}
            >
              <Text style={styles.buttonText}>Volver</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  };
  
  export default RegisterScreen;
  
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
      color: 'black'
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
      marginLeft: "35%",
      color: "#ffff",
    },
    logoImage: {},
  });
  