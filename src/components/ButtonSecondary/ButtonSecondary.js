import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const ButtonSecondary = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#334FFA',
    flex: 1,
    marginLeft: 7,
    marginRight: 7
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 800,
    textAlign: 'center',
    fontSize: 12,
  }
})

ButtonSecondary.propTypes = {
  title: PropTypes.string.isRequired
}

export default ButtonSecondary
