import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlusMinusIcon = ({ value }) => {
  const iconColor = value ? 'red' : 'green';

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text
        testID={value ? 'minus-icon' : 'plus-icon'}
        style={{ marginRight: 4, color: iconColor, fontSize: 18, fontWeight: '800' }}
      >
        {value ? '-' : '+'}
      </Text>
    </View>
  );
};



export default PlusMinusIcon;
