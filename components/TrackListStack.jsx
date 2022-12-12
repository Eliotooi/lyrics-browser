import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FullSong from "../screens/FullSong";
import  Home  from "../screens/Home";

const Stack = createNativeStackNavigator()

export default function TrackListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{title: 'Browse'}}/>
      <Stack.Screen name="FullSong" component={FullSong} options={{title: 'Song'}}/>
    </Stack.Navigator>
  )
}
