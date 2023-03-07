import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Points = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>TUS PUNTOS</Text>
        <View style={styles.pointsContainer}>
            <View style={styles.points}>
                <Text style={styles.monthTitle}>Diciembre</Text>
                <Text style={styles.monthPoints}>10,00.00 pts</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      paddingTop:  10,
      paddingBottom: 10
      },
    title: {
        marginBottom: 20,
        color: '#9B9898',
        fontSize: 14,
        fontWeight: 800,
      },
    points: {
      backgroundColor: '#334FFA',
      borderRadius: 20,
      width: 286,
      height: 143,
      marginTop: 21,
      paddingBottom: 21,
      paddingRight: 19,
      paddingLeft: 19,
      marginBottom: 20,
      marginTop: 20
      
    },
    pointsContainer: {
      alignItems: 'center',
      justifyContent: 'center',
        
    },
    monthTitle: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 800,
      marginTop: 21
    },
    monthPoints: {
      color: '#FFFFFF',
      fontSize: 32,
      fontWeight: 800,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      
    }
  })

export default Points