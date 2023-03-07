import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'

const DetailScreen = ({ navigation }) => {
  const data = [
    {
      "createdAt": "2022-12-09T06:34:25.607Z",
      "product": "Handmade Metal Shoes",
      "points": 16434,
      "image": "https://loremflickr.com/640/480/transport",
      "is_redemption": false,
      "id": "1"
    }
  ]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DetailScreen</Text>
      </View>
      <ScrollView style={styles.body}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: data[0].image,
            }}
          />

        </View>
        <View>
          <Text style={styles.titleProduct}>Detalles del producto:</Text>
          <Text style={styles.titleDate}>Comprado el 26 de enero, 2019</Text>
          <Text style={styles.titleProduct}>Con esta compra acumulaste:</Text>
          <Text style={styles.points}>100 puntos</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <ButtonPrimary 
          title="Aceptar"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
    paddingBottom: 20,
   
  },
  header: {
    backgroundColor: '#CFD6FF',
    height: 150,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 24,
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 24,
    fontWeight: 800
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
  },
  imageContainer: {
    paddingTop: 19,
    paddingBottom: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  titleProduct: {
    fontSize: 14,
    fontWeight: 800,
    color: '#9B9898'
  },
  titleDate: {
    fontSize: 16,
    fontWeight: 800,
    paddingTop: 19,
    paddingBottom: 20
  },
  points:{
    fontSize: 24,
    fontWeight: 800,
    paddingTop: 32
  },
  buttonContainer: {
    padding: 20,
  }
  
  
})

export default DetailScreen