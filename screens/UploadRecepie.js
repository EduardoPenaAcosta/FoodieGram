import { StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
} from "expo-image-picker";


import BottomBar from "../components/GeneralComponents/BottomBar";
import BarraTop from "../components/HomeComponents/BarraTop";
import UploadRecipieImage from "../components/UploadRecepieComponents/UploadRecipieImage";

const UploadRecepie = () => {
  return (
    <View style={styles.container}>
      <BarraTop />
      <UploadRecipieImage />
      <BottomBar />
    </View>
  );
};

export default UploadRecepie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
