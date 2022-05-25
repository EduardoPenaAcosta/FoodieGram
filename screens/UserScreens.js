import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { Dimensions } from "react-native";

import TopBar from "../components/HomeComponents/BarraTop";
import BottomBar from "../components/GeneralComponents/BottomBar";

import UserDescription from "../components/UserScreenComponents/UserDescription";
import RecipiesSeparator from "../components/UserScreenComponents/RecipiesSeparator";
import Tarjeta from "../components/UserScreenComponents/Tarjeta";

const userScreen = () => {
  return (
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
      <BottomBar />
    </View>
  );
};

export default userScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
  },
  users: {
    flexDirection: "row",
  },
  containerPosts: {
    flex: 1,
    flexDirection: "row",
    width: Dimensions.get("window").width,
  },
});
