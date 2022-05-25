import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const RecipiesSeparator = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textSeparator}>Recetas</Text>
      <View style={styles.containerLine}>
        <Image source={require('../../assets/horizontalLine.png')} style={styles.lineStyle}/>
      </View>
    </View>
  );
};

export default RecipiesSeparator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    lineStyle:{
        height: 3,
        width: 400
   }, 
   textSeparator: {
       marginBottom: 10,
       marginLeft: 130,
       fontSize:45,
       fontWeight: 'bold',
       fontStyle: 'italic',
   }
});
