import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const BottomBar = () => {
  const navigation = useNavigation();

  const handleGoHome = (app) => {
    navigation.navigate(app);
  };
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            handleGoHome("Home");
          }}
        >
          <Ionicons
            name="home-outline"
            size={40}
            color="white"
            style={styles.separatorButton}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            handleGoHome("UploadRecepie");
          }}
        >
          <Ionicons
            name="fast-food-outline"
            size={40}
            color="white"
            style={styles.separatorButton}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ionicons
            name="person-circle-outline"
            size={40}
            color="white"
            onPress={() => {
              handleGoHome("UserProfiles");
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0782F9",
    width: "100%",
    flexDirection: "row",
    paddingLeft: 120,
    paddingRight: 120,
    paddingBottom: Platform.OS === "ios" ? 20 : 0,
    borderRadius: 10,
  },
  icon: {
    marginLeft: 20,
  },
  separatorButton: {
    marginRight: 60,
  },
});
