import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const BottomBar = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.icon}>
          <Ionicons name="home-outline" size={40} color="white" />
        </View>
        <View style={styles.icon}>
          <Ionicons name="fast-food-outline" size={40} color="white" />
        </View>
        <View style={styles.icon}>
          <Ionicons name="person-circle-outline" size={40} color="white" />
        </View>
      </View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0782F9",
    width: "100%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flexDirection: "row",
    paddingLeft: 120,
    paddingRight: 120,
  },
  icon: {
    marginLeft: 20,
  }
});
