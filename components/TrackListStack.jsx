import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/AntDesign'

import FullSong from '../screens/FullSong'
import Home from '../screens/Home'

const Stack = createNativeStackNavigator()

const headerRightIcon = () => (
  <Icon name='hearto' size={25} color='grey' />
)

export default function TrackListStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ title: 'Browse' }}
      />
      <Stack.Screen
        name='FullSong'
        component={FullSong}
        options={{
          title: 'Song',
          headerRight: headerRightIcon
        }}
      />
    </Stack.Navigator>
  )
}
