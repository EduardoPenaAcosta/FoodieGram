import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import BottomBar from '../components/GeneralComponents/BottomBar'

const UploadRecepie = () => {
  return (
    <View style={styles.container}>
        <View>
            
            <Text>hola</Text>
            <BottomBar />
        </View>
      
    </View>
  )
}

export default UploadRecepie

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

})