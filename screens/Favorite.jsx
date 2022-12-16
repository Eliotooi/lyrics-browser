import React, { useCallback } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Song from '../components/Song'
import { selectFavoritesList } from '../redux/selectors'
import { removeFavorites, addFavorites } from '../redux/Actions'

export default function Favorite({ navigation }) {
  const dispatch = useDispatch()
  const favorites = useSelector(selectFavoritesList)
  const onFavoritePress = useCallback(
    (item) => {
      const isSongInFavorites = favorites.some(
        (song) => song.track_id === item.track_id
      )
      if (isSongInFavorites) {
        dispatch(removeFavorites(item.track_id))
      } else {
        dispatch(addFavorites(item))
      }
    },
    [favorites, dispatch]
  )

  const onTrackPress = (trackDetails) => {
    navigation.navigate('FullSongFavorite', { ...trackDetails })
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <Song
            onFavoritePress={onFavoritePress}
            favorites={favorites}
            onTrackPress={() =>
              onTrackPress({
                trackDetails: {
                  idTrack: item.track_id,
                  idCommonTrack: item.commontrack_id,
                  title: item.track_name
                }
              })
            }
            songDetails={item}
          />
        )}
      />
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
