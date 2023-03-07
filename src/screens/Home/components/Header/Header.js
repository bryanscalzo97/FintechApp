import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Bienvenido de vuelta!</Text>
        <Text style={styles.name}>Ruben Rodriguez</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 800
  },
  name: {
    fontSize: 16,
    fontWeight: 400
  }
})

export default Header