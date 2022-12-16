import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/AntDesign'

import TrackListStack from '../components/TrackListStack'
import FavoriteTrackListStack from '../components/FavoriteTrackListStack'

const Tab = createBottomTabNavigator()
const tabBarIconPlaycircleo = ({ color, size }) => (
  <Icon name='playcircleo' color={color} size={size} />
)
const tabBarIconHearto = ({ color, size }) => (
  <Icon name='hearto' color={color} size={size} />
)

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Songs'
          component={TrackListStack}
          options={{
            headerShown: false,
            tabBarIcon: tabBarIconPlaycircleo
          }}
        />
        <Tab.Screen
          name='Favorite'
          component={FavoriteTrackListStack}
          options={{
            headerShown: false,
            tabBarIcon: tabBarIconHearto
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
