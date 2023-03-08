import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const ProductHeader = ({product}) => {
  const { container, title } = styles;

  return (
    <View style={container} testID="header-container">
      <Text style={title} testID="header-title">
        {product}
      </Text>
    </View>
  );
};

ProductHeader.propTypes = {
  product: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CFD6FF',
    height: 150,
    justifyContent: 'flex-end',
    paddingBottom: 24,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontFamily: 'Avenir',
    fontSize: 24,
    fontWeight: '800',
  },
});

export default ProductHeader;
