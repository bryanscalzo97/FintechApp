import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from '../screens/Details/DetailScreen';
import HomeScreen from '../screens/Home/HomeScreen'

const Stack = createNativeStackNavigator();

const AppNavigations = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen 
                name="Details" 
                component={DetailScreen} 
                options={{
                  headerShown: false
                }}
              />
          </Stack.Navigator>
      </NavigationContainer>
  )
}

export default AppNavigations