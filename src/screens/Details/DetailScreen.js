import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductImage from './components/ProductImage/ProductImage';
import ProductHeader from './components/ProductHeader/ProductHeader';

const DetailScreen = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <ProductHeader product={item.product}/>

      <ScrollView style={styles.body}>
        <ProductImage uri={item.image} />
        <ProductDetails item={item} />
      </ScrollView>

      <View style={styles.buttonContainer}>
        <ButtonPrimary
          title="Aceptar"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      
    </View>
  );
};

DetailScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        product: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        is_redemption: PropTypes.bool.isRequired,
        points: PropTypes.number.isRequired
      }).isRequired
    }).isRequired
  }).isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
    paddingBottom: 20,
  },
  body: {
    flex: 1,
  },
  buttonContainer: {
    padding: 20,
  },
});

export default DetailScreen;
