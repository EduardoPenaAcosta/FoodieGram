import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const Tarjeta = () => {

    const prueba = () => {
        console.log('prueba');
    } 
    return (
        <View style={styles.container2}>
            <ImageBackground source={require("../../assets/Hamburguesa-1.jpg")} style={styles.image2} imageStyle={{ borderRadius: 10 }} resizeMode="cover">
                <View style={styles.botonesTopBar}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => prueba()}>
                        <EvilIcons name="search" size={34} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.botonesTopBar2}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => prueba()}>
                        <EvilIcons name="search" size={34} color="white" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container2: {
        marginLeft: 5,
        borderRadius: 10,
        width: 200,
        marginTop: 20,
        flexDirection: "row",
    },
    image2: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    botonesTopBar: {
        marginTop:"82%",
        backgroundColor: 'rgb(27, 14, 92)',
        width:"30%",
        height: 42,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 10,
        borderBottomStartRadius: 10,
        alignItems: "center",
        flexDirection: 'column',
        justifyContent: "center",
        opacity:0.7,
    },
    botonesTopBar2: {
        backgroundColor: 'rgb(27, 14, 92)',
        width:"30%",
        height: 42,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 10,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: "81.7%",
        opacity: 0.7,
    },
    


});


export default Tarjeta;