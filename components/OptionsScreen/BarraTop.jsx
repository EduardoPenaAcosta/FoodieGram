import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { auth } from "../../firebase-config";
import { useNavigation } from "@react-navigation/core";

const BarraTop = () => {
  const prueba = () => {
    console.log("prueba");
  };
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  const handleOptions = () => {
    navigation.navigate("Options");
  };

  return (
    <View style={styles.navhome}>
      <View style={styles.logo}>
        <Image
          style={styles.logoBar}
          source={require("../../assets/foodygram.png")}
        ></Image>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  logoBar: {
    marginLeft: 150,
    marginTop: 20,
    width: 200,
    height: 30,
  },
  navhome: {
    position: "relative",
    flexDirection: "row",
    backgroundColor: "#1b0e5c",
    height: 45,
    width: "100%",
    marginTop: 35,
    borderBottomEndRadius: 2,
    borderBottomStartRadius: 2,
  },
  logo: {
    marginTop: -12,
    left: -40,
    marginRight: "10%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },

  botonesTopBar: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingLeft: Platform.OS === "ios" ? 60 : 40,
  },
});



export default BarraTop;
