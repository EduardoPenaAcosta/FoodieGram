import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { useState, React } from "react";
import {
  launchImageLibraryAsync,
  MediaTypeOptions,
} from "expo-image-picker";

import { useNavigation } from "@react-navigation/core";


const UploadRecipieImage = () => {

  const navigation = useNavigation();

  const [coverPage, setCoverPage] = useState(null);
  const [textRecipie, setextRecipie] = useState("");

  const pickImageGalery = async () => {
    const imageResult = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
    });

    if (!imageResult.cancelled) {
      setCoverPage(imageResult.uri);
    }  

    navigation.route()
  }

  const uploadImage = () => {
    navigation.navigate('Home', {coverPage: coverPage, textRecipie: textRecipie});
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableOpacity style={styles.opacityInput} onPress={() => pickImageGalery()}>
        <Text style={styles.textButton}> Presiona para subir las imágenes</Text>
      </TouchableOpacity>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Introduce la receta"
          autoCapitalize={"sentences"}
          placeholderTextColor="#000"
          autoFocus={true}
          onChangeText={(text) => setextRecipie(text)}
          value={textRecipie}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text style={{ marginTop: 17 }}>¡Nueva receta!</Text>
        <Image
          style={styles.imageArrow}
          source={require("../../assets/ArrowLeftLong.png")}
        />
        <TouchableOpacity
          onPress={() => uploadImage()}
        >
          <Image
            style={styles.imageArrow}
            source={require("../../assets/appleicon.png")}
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default UploadRecipieImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    position: "relative",
    alignItems: "flex-start",
    marginTop: 15,
  },
  opacityInput: {
    backgroundColor: "#534b7c",
    borderColor: "#FFFF",
    padding: 100,
    borderRadius: 15,
  },
  textButton: {
    color: "#FFFF",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 30,
  },
  containerInput: {
    marginTop: 10,
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 50,
    paddingLeft: 100,
    paddingRight: 100,
  },
  textInput: {
    color: "#000",
  },
  imageArrow: {
    height: 50,
    width: 50,
  },
});
