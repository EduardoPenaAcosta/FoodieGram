import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import React from "react";
import { auth } from "../firebase-config";
import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";

import BarraTop from "../components/HomeComponents/BarraTop";
import Comentarios from "../components/HomeComponents/Comentarios";
import Tarjeta from "../components/HomeComponents/Tarjeta";
import BottomBar from "../components/GeneralComponents/BottomBar";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <BarraTop />
      <ScrollView>
        <Tarjeta />
        <Comentarios />
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomBar />
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
