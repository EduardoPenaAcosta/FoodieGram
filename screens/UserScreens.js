import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { Dimensions } from "react-native";

import TopBar from "../components/HomeComponents/BarraTop";
import BottomBar from "../components/UserScreenComponents/BottomBar";

import UserDescription from "../components/UserScreenComponents/UserDescription";
import RecipiesSeparator from "../components/UserScreenComponents/RecipiesSeparator";
import Tarjeta from "../components/UserScreenComponents/Tarjeta";

const UserScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TopBar />
        <UserDescription />
        <RecipiesSeparator />
        <ScrollView>
          <View style={styles.containerPosts}>
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
          </View>
        </ScrollView>
      </View>
      <BottomBar />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: 50,
    height: 50,
  },
  users: {
    flexDirection: "row",
  },
  containerPosts: {
    flexDirection: "row",
    width: Dimensions.get("window").width,
  },
});
