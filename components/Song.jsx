import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import IconFavorite from './IconFavorite'

export default function Song ({
  songDetails,
  onTrackPress,
  onFavoritePress,
  favorites
}) {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.left}>
          <TouchableOpacity onPress={onTrackPress}>
            <Text style={styles.text}>{songDetails.track_name}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.right}>
          <IconFavorite
            favorites={favorites}
            onFavoritePress={onFavoritePress}
            songDetails={songDetails}
          />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingHorizontal: 10,
    height: 70
  },
  left: {
    justifyContent: 'center',
    alignContent: 'flex-start',
    flex: 7
  },
  right: {
    justifyContent: 'center',
    alignContent: 'flex-end',
    flex: 1
  },
  text: {
    color: 'black',
    fontSize: 19
  }
})
