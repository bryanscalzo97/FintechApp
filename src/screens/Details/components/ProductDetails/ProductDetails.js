import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { generateStringDate } from '../../../../utils/utils';


const ProductDetails = ({ item }) => {
  return (
    <View>
      <Text testID="product-title" style={styles.titleProduct}>Detalles del producto:</Text>
      <Text testID="product-date" style={styles.titleDate}>{generateStringDate(item?.createdAt)}</Text>
      <Text testID="product-points" style={styles.titleProduct}>Con esta compra acumulaste:</Text>
      <Text testID="product-points-value" style={styles.points}>{item?.points} puntos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    titleProduct: {
      fontSize: 14,
      fontWeight: '800',
      color: '#9B9898',
    },
    titleDate: {
      fontSize: 16,
      fontWeight: '800',
      paddingTop: 19,
      paddingBottom: 20,
    },
    points: {
      fontSize: 24,
      fontWeight: '800',
      paddingTop: 32,
    }
  });

export default ProductDetails