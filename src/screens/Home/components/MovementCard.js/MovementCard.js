import React from 'react';
import PropTypes from 'prop-types';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { generateStringDate } from '../../../../utils/utils';
import SubtractIcon from '../../../../components/SubtractIcon/SubtractIcon';
import PlusMinusIcon from '../../../../components/PlusMinusIcon/PlusMinusIcon';

const MovementCard = ({ item }) => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Details', { id: item.id, item });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleOnPress}>
      <View style={styles.imageContainer}>
        <Image 
          style={styles.image} 
          source={{ uri: item.image }} 
        />
      </View>
      <View style={styles.bodyCard}>
        <View style={styles.textCard}>
          <Text style={styles.titleProduct}>{item.product}</Text>
          <Text style={styles.date}>
            {generateStringDate(item?.createdAt)}
          </Text>
        </View>
        <View style={styles.numberCard}>
          <PlusMinusIcon value={item.is_redemption} />
          <Text style={styles.pointsQuantity}>{item.points}</Text>
          <SubtractIcon />
        </View>
      </View>
    </TouchableOpacity>
  );
};

MovementCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    product: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    is_redemption: PropTypes.bool.isRequired,
    points: PropTypes.number.isRequired
  }).isRequired
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    flexDirection: 'row',
  },
  textCard: {
    flex: 1,
    padding: 5,
    paddingLeft: 11,
  },
  bodyCard: {
    flex: 1,
    flexDirection: 'row',
  },
  numberCard: {
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleProduct: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  },
  date: {
    fontSize: 12,
    marginTop: 7,
    fontWeight: 'normal',
    fontFamily: 'Avenir',
  },
  pointsQuantity: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight: 12,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  imageContainer: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MovementCard;
