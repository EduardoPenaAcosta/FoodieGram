import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Text,
} from "react-native";
import {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import {SwipeListView} from "react-native-swipe-list-view";

import BarraTop from "../components/HomeComponents/BarraTop";
import Comentarios from "../components/HomeComponents/Comentarios";
import Tarjeta from "../components/HomeComponents/Tarjeta";
import BottomBar from "../components/GeneralComponents/BottomBar";

const HomeScreen = () => {
  useEffect(() => {
    const reloadPosts = ({coverPage,comentarios}) => {
      imagesPost= [coverPage, ... imagesPost];
      listComments = [comentarios, ...comments]
      console.log('hola');
    }
      
  })

  const [comments, setComments] = useState(listComments);

  let listComments = [
    {
      id: Math.random() * 1,
      photo: '../assets/PerritoLindo.png',
      username: 'MiCompañero',
      comentario: 'Me encanta la receta, ya la he hecho varias veces, espectacular!'
    },
    {
      id: Math.random() * 1,
      photo: '../assets/PerritoLindo.png',
      username: 'JunitoBen',
      comentario: 'Me encanta la receta, ya la he hecho varias veces, espectacular!'
    },
    {
      id: Math.random() * 1,
      photo: '../assets/PerritoLindo.png',
      username: 'Calvicie4000',
      comentario: 'Me encanta la receta, ya la he hecho varias veces, espectacular!'
    },
    {
      id: Math.random() * 1,
      photo: '../assets/PerritoLindo.png',
      username: 'CalvoSexyAprobado',
      comentario: 'Awita al nota que hizo esta receta, ni un pelo de tonto tiene!'
    }
  ]

  let imagesPost = [
    {
      id: Math.random() * 1,
      photoPath: '../../assets/Hamburguesa-1.jpg'
    }
  ]



  const setNewImage = () => {
    const path = route.params.paramsKey;
    imagesPost = [{
      id: Math.random() * 1,
      photoPath: image.photoPath
    }, ...imagesPost]
    listComments = [{id: Math.random() * 1,photo: '../assets/PerritoLindo.png',username: 'CalvoSexyAprobado',comentario: comments },...listComments];
    console.log('hola')
  }

  return (  
    <View style={styles.container}>
      <BarraTop />
      <FlatList
        data={imagesPost}
        renderItem = {(data) => {
          return(
            <View style={{flex: 1}}>
                  <Tarjeta 
                  data={data}
                  />
                  <Comentarios
                    comments={comments}
                  />
            </View>
          );
      }}
        keyExtractor={item => item.id}
      />
        
      <BottomBar />
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
});
