import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import Header from './components/Header/Header'
import Points from './components/Points/Points'
import Movements from './components/Movements/Movements'
import ButtonSecondary from '../../components/ButtonSecondary/ButtonSecondary'
import { DataContext } from '../../contexts/apiContext';


const HomeScreen = ({ navigation }) => {
  const {
    data,
    filteredData,
    filter1,
    filter2,
    fetchData,
    filterByFilter1,
    filterByFilter2
  } = useContext(DataContext);

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter1Change = event => {
    const { value } = event.target;
    filterByFilter1(value);
  };

  const handleFilter2Change = event => {
    const { value } = event.target;
    filterByFilter2(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Header />
        <Points />
        <Movements data={filteredData}/>
      </View>
        <View style={styles.buttonContainer}>
          <ButtonSecondary title='Ganados'/>
          <ButtonSecondary title='Canjeados'/>
        </View>
       
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
    buttonContainer: {
      flexDirection: 'row',
      paddingLeft: 13,
      paddingRight: 13
    }
    
  })

export default HomeScreen