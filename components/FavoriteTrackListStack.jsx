import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import FullSong from '../screens/FullSong'
import Favorite from '../screens/Favorite'

const Stack = createNativeStackNavigator()
const headerRightIcon = () => (
  <Icon name='hearto' size={25} color='grey' />
)
export default function FavoriteTrackListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='FavoriteList'
        component={Favorite}
        options={{ title: 'Browse' }}
      />
      <Stack.Screen
        name='FullSongFavorite'
        component={FullSong}
        options={{
          title: 'Song',
          headerRight: headerRightIcon
        }}
      />
    </Stack.Navigator>
  )
}
