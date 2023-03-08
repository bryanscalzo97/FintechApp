import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container} testID="header-container">
        <Text style={styles.title} testID="header-title">Bienvenido de vuelta!</Text>
        <Text style={styles.name} testID="header-name">Ruben Rodriguez</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 800,
    fontFamily: "Avenir"
  },
  name: {
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "Avenir"
  }
})

export default Header