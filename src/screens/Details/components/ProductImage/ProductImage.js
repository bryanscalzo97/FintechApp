import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet } from 'react-native';

const ProductImage = ({ uri }) => {
  return (
    <View style={styles.imageContainer}>
      <View style={styles.imageShadow}>
        <Image
          style={styles.image}
          source={{ uri }}
          testID="product-image"
        />
      </View>
    </View>
  );
};

ProductImage.propTypes = {
  uri: PropTypes.string.isRequired,
};

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
    paddingLeft: 20,
    paddingRight: 20,
  },
  imageShadow: {
    backgroundColor: 'red',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export default ProductImage;
