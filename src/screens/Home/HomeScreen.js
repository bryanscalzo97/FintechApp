import { View, StyleSheet } from 'react-native'
import React, { useEffect, useState} from 'react'
import Header from './components/Header/Header'
import Points from './components/Points/Points'
import Movements from './components/Movements/Movements'
import ButtonSecondary from '../../components/ButtonSecondary/ButtonSecondary'
import axios from 'axios'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'
import { calculatePoints, filterByRedemptionTrue, filterByRedemptionFalse } from './utils/utils'

const HomeScreen = () => {
  const [data, setData] = useState(null)
  const [showAll, setShowAll] = useState(true)
  const [points, setPoints] = useState('')

  const fetchData = async () => {
    setShowAll(true)
    try {
      const {data} = await axios.get('https://6222994f666291106a29f999.mockapi.io/api/v1/products');
      console.log(data)
      setData(data)
      const points = await calculatePoints(data)
      setPoints(points)
    } catch (error) {
      console.log(error);
    }
  }
  const fetchDataProfit = async () => {
    setShowAll(false)
    try {
      const {data} = await axios.get('https://6222994f666291106a29f999.mockapi.io/api/v1/products');
      const filterData = await filterByRedemptionFalse(data)
      setData(filterData)
    } catch (error) {
      console.log(error);
    }
  }
  const fetchDataExpenses = async () => {
    setShowAll(false)
    try {
      const {data} = await axios.get('https://6222994f666291106a29f999.mockapi.io/api/v1/products');
      const filterData = await filterByRedemptionTrue(data)
      setData(filterData)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Header />
        <Points points={points}/>
        <Movements data={data}/>
      </View>
      {showAll ?
          <View style={styles.buttonSecondaryContainer}>
            <ButtonSecondary title='Ganados' onPress={() => fetchDataProfit()}/>
            <ButtonSecondary title='Canjeados' onPress={() => fetchDataExpenses()}/>
          </View>
        : <View style={styles.buttonPrincipalContainer}>
            <ButtonPrimary title='Todos' onPress={() => fetchData()}/>
          </View>
      
      }
      
       
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F8F8F8',
      flex: 1,
      paddingTop: 57,
      paddingBottom: 20,
      
    },
    bodyContainer: {
      paddingLeft: 20,
      paddingRight: 20,
      flex: 1
    },
    buttonSecondaryContainer: {
      flexDirection: 'row',
      paddingLeft: 13,
      paddingRight: 13
    },
    buttonPrincipalContainer: {
      paddingRight: 20,
      paddingLeft: 20
    }
    
  })

export default HomeScreen