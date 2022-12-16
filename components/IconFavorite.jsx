import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { View, TouchableOpacity } from 'react-native'

export default function IconFavorite({
  onFavoritePress,
  favorites,
  songDetails
}) {
  const isInFavorite = favorites.some(
    (songItem) => songItem.track_id === songDetails.track_id
  )

  return (
    <View>
      <TouchableOpacity onPress={() => onFavoritePress(songDetails)}>
        <Icon
          name={isInFavorite ? 'heart' : 'hearto'}
          size={25}
          color={isInFavorite ? 'red' : 'grey'}
        />
      </TouchableOpacity>
    </View>
  )
}
