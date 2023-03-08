import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductImage from './components/ProductImage/ProductImage';

const DetailScreen = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.product}</Text>
      </View>

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
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
  },
  body: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonContainer: {
    padding: 20,
  },
});

export default DetailScreen;
