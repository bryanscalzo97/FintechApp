import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Points = ({ points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} testID="points-title">TUS PUNTOS</Text>
      <View style={styles.pointsContainer}>
        <View style={styles.points} testID="points-month">
          <Text style={styles.monthTitle} testID="points-month-title">Diciembre</Text>
          <Text style={styles.monthPoints} testID="points-month-points">{isNaN(points) ? '-' : points} pts</Text>
        </View>
      </View>
    </View>
  );
};

Points.propTypes = {
  points: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    marginBottom: 20,
    color: '#9B9898',
    fontSize: 14,
    fontWeight: '800',
  },
  points: {
    backgroundColor: '#334FFA',
    borderRadius: 20,
    width: 286,
    height: 143,
    marginTop: 20,
    marginBottom: 20,
    paddingRight: 19,
    paddingLeft: 19,
    paddingBottom: 21,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  pointsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    marginTop: 21,
  },
  monthPoints: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '800',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default Points;
