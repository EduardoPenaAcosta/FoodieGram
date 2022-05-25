import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const UserDescription = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.containerDescription}>
          <Text style={styles.boldStyle}>Comida favorita:</Text>
          <Text style={styles.textStyle}>a</Text>
        </View>
        <View style={styles.containerDescription}>
          <Text style={styles.boldStyle}>Experiencia Cocinando:</Text>
          <Text style={styles.textStyle}>a</Text>
        </View>
        <View style={styles.containerDescription}>
          <Text style={styles.boldStyle}>Se define:</Text>
          <Text style={styles.textStyle}>a</Text>
        </View>
        <View style={styles.containerDescription}>
          <Text style={styles.boldStyle}>Usuario: </Text>
          <Text style={styles.textStyle}>a</Text>
        </View>
      </View>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={require("../../assets/PerritoLindo.png")}
        />
      </View>
    </View>
  );
};

export default UserDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginRight: 10,
    marginTop: 30,
    marginLeft: 10,
  },
  containerDescription: {
    flexDirection: "row",
    marginTop: 10,
  },
  containerImage: {
    marginLeft: 30,
    borderRadius: 10,
  },
  boldStyle: {
    fontWeight: "bold",
    fontSize: "italic",
    fontSize: 16,
  },
  textStyle: {
    fontSize: 16,
  },
  image: {
    width: Platform.OS === "ios" ? 150 : 120,
    height: Platform.OS === "ios" ? 150 : 120,
  },
});
