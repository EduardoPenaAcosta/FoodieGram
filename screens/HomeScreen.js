import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

import BarraTop from "../components/HomeComponents/BarraTop";
import Comentarios from "../components/HomeComponents/Comentarios";
import Tarjeta from "../components/HomeComponents/Tarjeta";
import BottomBar from "../components/GeneralComponents/BottomBar";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <BarraTop />
      <ScrollView>
        <Tarjeta />
        <Comentarios />
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
});
