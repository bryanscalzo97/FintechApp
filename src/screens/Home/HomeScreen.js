import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import Header from './components/Header/Header';
import Points from './components/Points/Points';
import Movements from './components/Movements/Movements';
import ButtonSecondary from '../../components/ButtonSecondary/ButtonSecondary';
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
import { calculatePoints, filterByRedemptionTrue, filterByRedemptionFalse } from './utils/utils';

const API_URL = 'https://6222994f666291106a29f999.mockapi.io/api/v1/products';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [points, setPoints] = useState('');

  const fetchData = async () => {
    try {
      setShowAll(true);
      const { data } = await axios.get(API_URL);
      setData(data);
      const points = await calculatePoints(data);
      console.log(typeof points )
      setPoints(points);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDataByRedemption = async (redemption) => {
    try {
      setShowAll(false);
      const { data } = await axios.get(API_URL);
      const filteredData = redemption
        ? filterByRedemptionTrue(data)
        : filterByRedemptionFalse(data);
      setData(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFetchData = () => fetchData();

  const handleFetchDataByRedemption = (redemption) => () => fetchDataByRedemption(redemption);

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Header />
        <Points points={parseInt(points)} />
        <Movements data={data} />
      </View>
      {showAll ? (
        <View style={styles.buttonSecondaryContainer}>
          <ButtonSecondary title="Ganados" onPress={handleFetchDataByRedemption(false)} />
          <ButtonSecondary title="Canjeados" onPress={handleFetchDataByRedemption(true)} />
        </View>
      ) : (
        <View style={styles.buttonPrimaryContainer}>
          <ButtonPrimary title="Todos" onPress={handleFetchData} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 57,
    paddingBottom: 20,
    backgroundColor: '#F8F8F8',
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  buttonSecondaryContainer: {
    flexDirection: 'row',
    paddingHorizontal: 13,
  },
  buttonPrimaryContainer: {
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
