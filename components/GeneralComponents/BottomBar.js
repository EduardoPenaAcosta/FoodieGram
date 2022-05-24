import { StyleSheet, Text, View, Platform, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";


const BottomBar = () => {

  const navigation = useNavigation();

  const hanleGoHome = (app) => {

      navigation.replace(app);
       
  }


  return (
    <View>
      <View style={styles.container}>
          <TouchableOpacity style={styles.icon} onPress={() => {hanleGoHome('home')}}>
            <Ionicons name="home-outline" size={40} color="white" style={styles.separatorButton}/>
          </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={hanleGoHome('uploadRecepie')} >
          <Ionicons name="fast-food-outline" size={40} color="white" style={styles.separatorButton}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="person-circle-outline" size={40} color="white"  onPress={hanleGoHome('user')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0782F9",
    width: '100%',
    flexDirection: "row",
    paddingLeft: 120,
    paddingRight: 120,
    paddingBottom: Platform.OS === 'ios' ? 20 : 0 ,
    borderRadius: 10,
  },
  icon: {
    marginLeft: 20,
  }, 
  separatorButton: {
    marginRight: 60,
  }
});
