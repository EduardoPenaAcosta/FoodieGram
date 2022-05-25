import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase-config";

import BarraTop from "../components/OptionsScreen/BarraTop";
import BottomBar from "../components/GeneralComponents/BottomBar";

const OptionsScreen = () => {

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
      <Text style={styles.titleText}>Configuración</Text>
      <Image
        style={styles.image}
        source={require("../assets/PerritoLindo.png")}
      />
      <Text style={styles.userText}> PerritoLindo34 </Text>
      <View style={styles.lineStyle}>
        <Image
          source={require("../assets/horizontalLine.png")}
          style={styles.lineStyle}
        />
      </View>
      <View>
        <View style={styles.touchableOption}>
          <TouchableOpacity>
            <Text style={styles.textOption}>Notificaciones</Text>
          </TouchableOpacity>
          <Image
            style={styles.arrowStyle}
            source={require("../assets/ArrowLeftLong.png")}
          />
        </View>
        <View style={styles.touchableOption}>
          <TouchableOpacity>
            <Text style={styles.textOption}>Privacidad</Text>
          </TouchableOpacity>
          <Image
            style={styles.arrowStyle}
            source={require("../assets/ArrowLeftLong.png")}
          />
        </View>
        <View style={styles.touchableOption}>
          <TouchableOpacity>
            <Text style={styles.textOption}>Seguridad</Text>
          </TouchableOpacity>
          <Image
            style={styles.arrowStyle}
            source={require("../assets/ArrowLeftLong.png")}
          />
        </View>
        <View style={styles.touchableOption}>
          <TouchableOpacity>
            <Text style={styles.textOption}>Cuentas</Text>
          </TouchableOpacity>
          <Image
            style={styles.arrowStyle}
            source={require("../assets/ArrowLeftLong.png")}
          />
        </View>
        <View style={styles.touchableOption}>
          <TouchableOpacity>
            <Text style={styles.textOption}>Ayuda</Text>
          </TouchableOpacity>
          <Image
            style={styles.arrowStyle}
            source={require("../assets/ArrowLeftLong.png")}
          />
        </View>
        <View style={styles.touchableOption}>
          <TouchableOpacity>
            <Text style={styles.textOption}>Información</Text>
          </TouchableOpacity>
          <Image
            style={styles.arrowStyle}
            source={require("../assets/ArrowLeftLong.png")}
          />
        </View>
        <View style={styles.touchableOption}>
          <TouchableOpacity onPress={() => handleSignOut()}>
            <Text style={styles.textOption}>Cerrar sesión</Text>
          </TouchableOpacity>
          <Image
            style={styles.arrowStyle}
            source={require("../assets/ArrowLeftLong.png")}
          />
        </View>
      </View>
      
      <View style={styles.bottomBar}>
        <BottomBar />
      </View>
    </View>
  );
};

export default OptionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleText: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 40,
  },
  image: {
    borderRadius: 100,
  },
  userText: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 5,
  },
  lineStyle: {
    height: 3,
    width: 400,
  },
  touchableOption: {
    backgroundColor: "#F0F0F0",
    padding: 5,
    flexDirection: "row",
    marginTop: 10,
  },
  textOption: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomBar: {
    marginTop: Platform.OS === "ios" ? 98 : 30,
  },
  arrowStyle: {
    width: 50,
    height: 50,
    marginTop: -15,
    marginLeft: 60,
  },
});
