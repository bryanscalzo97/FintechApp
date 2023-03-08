import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

const ProductImage = ({uri}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{ uri }}
        testID="product-image"
      />
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
      width: '100%',
      aspectRatio: 1,
      borderRadius: 10,
    },
    imageContainer: {
      paddingTop: 19,
      paddingBottom: 32,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

export default ProductImage