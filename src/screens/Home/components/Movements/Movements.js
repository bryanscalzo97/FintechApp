import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Movements = ({data}) => {
  const navigation = useNavigation()
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity 
        style={styles.card}
        onPress={() => navigation.navigate('Details')}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />

        </View>
        <View style={styles.bodyCard}>
          <View style={styles.textCard}>
            <Text style={styles.titleProduct}>{item.product}</Text>
            <Text>26 de enero 2019</Text>
          </View>
          <View style={styles.numberCard}>
            <Text style={styles.pointsQuantity}>{item.points}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>TUS MOVIMIENTOS</Text>
        <FlatList
          data={data}
          style={styles.list}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
    </View>
  )
}

const styles = StyleSheet.create({
      container: {
        paddingTop:  10,
        paddingBottom: 10,
        marginBottom: 43,
        flex: 1,
      },
      list: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingTop: 13,
        paddingBottom: 13
      },
      card: {
        padding: 10,
        flexDirection: 'row'
      },
      textCard: {
        flex: 1,
        padding: 5,
        paddingLeft: 11
      },
      bodyCard: {
        // backgroundColor: '#CDCDCD',
        flex: 1,
        flexDirection: 'row'
      },
      numberCard: {
        justifyContent: 'center'
      },
      title: {
        marginBottom: 20,
        color: '#9B9898',
        fontSize: 14,
        fontWeight: 800,
      },
      titleProduct: {
        fontSize: 14,
        fontWeight: 800,
      },
      pointsQuantity: {
        fontSize: 16,
        fontWeight: 800,
      },
      image: {
        width: 55,
        height: 55,
        borderRadius: 10
      },
      imageContainer: {
        rounded: 10,
        justifyContent: 'center',
        alignItems: 'center'
      }
  })
export default Movements