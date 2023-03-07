import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { generateStringDate } from '../../../../utils/utils'
import Svg, { SvgProps, Path } from "react-native-svg"
import SubtractIcon from '../../../../components/SubtractIcon/SubtractIcon'
import PlusMinusIcon from '../../../../components/PlusMinusIcon/PlusMinusIcon'

const Movements = ({data, route}) => {
  const navigation = useNavigation()
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity 
        style={styles.card}
        onPress={() => navigation.navigate('Details', {id: item.id, item})}
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
            <Text>{generateStringDate(item?.createdAt)}</Text>
          </View>
          <View style={styles.numberCard}>
              <PlusMinusIcon value={item.is_redemption}/>
              <Text style={styles.pointsQuantity}>{item.points}</Text>
              <SubtractIcon />
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
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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
        paddingRight: 12
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