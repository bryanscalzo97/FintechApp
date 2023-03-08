import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MovementCard from '../MovementCard.js/MovementCard';

const Movements = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TUS MOVIMIENTOS</Text>
      <FlatList
        data={data}
        style={styles.list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MovementCard item={item} />}
      />
    </View>
  );
};

Movements.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      product: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
      is_redemption: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 43,
  },
  list: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 13,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    color: '#9B9898',
    marginBottom: 20,
  },
});

export default Movements;
