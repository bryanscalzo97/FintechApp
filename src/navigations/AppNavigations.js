import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from '../screens/Details/DetailScreen';
import HomeScreen from '../screens/Home/HomeScreen'

const Stack = createNativeStackNavigator();

const AppNavigations = () => {
  return (
          <Stack.Navigator>
              <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                  headerShown: false
                }}
                testID="home-screen"
              />
              <Stack.Screen 
                name="Details" 
                component={DetailScreen} 
                options={{
                  headerShown: false
                }}
                testID="detail-screen"
              />
          </Stack.Navigator>
  )
}

export default AppNavigations