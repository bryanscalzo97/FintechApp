import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

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

PlusMinusIcon.propTypes = {
  value: PropTypes.bool.isRequired,
};

export default PlusMinusIcon;
