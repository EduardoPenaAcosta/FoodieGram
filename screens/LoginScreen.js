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
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const toOtherScreen = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return toOtherScreen;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
      })
      .catch((error) => alert(error.message));

    setEmail("");
    setPassword("");
  };

  const handleSigIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged with:", user.email);
      })
      .catch((error) => alert(error.message));

    setEmail("");
    setPassword("");
  };

  const changeScreen = () => {
    navigation.replace("ForgotPassword")
  }

  return (    
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground 
        source={require('../img/coock.jpeg')}
        resizeMode="cover"
        style={styles.image}
        >
      <HeaderTitle
        style={styles.title}
      >Bienvenido a </HeaderTitle>
      <Image 
        source={require('../assets/foodygram.png')} 
        style={styles.logoImage}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Introduce tu correo"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          autoCapitalize={"none"}
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
        <TouchableOpacity onPress={() => handleSigIn()} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSignUp()}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeScreen()}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonText}>Forgot password?</Text>
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
    backgroundColor: "#1B0E5C",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "#1B0E5C",
    marginTop: 5,
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  title:{
    marginLeft: "7%",
    color: '#ffff',
  },
  logoImage: {
    marginLeft: 60
  }


});
