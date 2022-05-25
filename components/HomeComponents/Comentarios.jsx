import { View, StyleSheet, Button, Text, Card, Image } from "react-native";

const Comentarios = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Comentario}>
        <View style={styles.cabecera}>
          <Image
            style={styles.imagenPerfil}
            source={require("../../assets/PerritoLindo.png")}
          ></Image>
          <Text style={{ color: "white", fontSize: 18, marginLeft: "5%" }}>
            PerritoLindo34
          </Text>
        </View>

        <View style={styles.mensaje}>
          <Text
            style={{
              color: "black",
              fontSize: 18,
              marginLeft: "5%",
              marginTop: "2%",
            }}
          >
            De las mejores recetas que he probado
          </Text>
        </View>
      </View>

      <View style={styles.Comentario}>
        <View style={styles.cabecera}>
          <Image
            style={styles.imagenPerfil}
            source={require("../../assets/PerritoLindo.png")}
          ></Image>
          <Text style={{ color: "white", fontSize: 18, marginLeft: "5%" }}>
            PerritoLindo34
          </Text>
        </View>

        <View style={styles.mensaje}>
          <Text
            style={{
              color: "black",
              fontSize: 18,
              marginLeft: "5%",
              marginTop: "2%",
            }}
          >
            De las mejores recetas que he probado
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    width: "95%",
    borderRadius: 20,
  },
  imagenPerfil: {
    position: "relative",
    borderRadius: 100,
    height: "70%",
    width: "14%",
    marginLeft: "5%",
    marginTop: "2%",
  },
  cabecera: {
    backgroundColor: "rgb(27, 14, 92)",
    width: "100%",
    height: "35%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  mensaje: {
    backgroundColor: "#CCCCCC",
    borderRadius: 10,
  },
  Comentario: {
    marginTop: 10,
    backgroundColor: "#CCCCCC",
  },
});

export default Comentarios;
