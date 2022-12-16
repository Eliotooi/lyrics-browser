import React, { useCallback } from 'react'
import axios from 'axios'
import { FlatList, View, RefreshControl } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Song from '../components/Song'
import { Loading } from '../components/Loading'
import { selectFavoritesList } from '../redux/selectors'
import { removeFavorites, addFavorites } from '../redux/Actions'

export default function Home ({
  navigation,
  addToFavorite,
  removeFromFavorite
}) {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  const dispatch = useDispatch()
  const favorites = useSelector(selectFavoritesList)
  // React.useEffect(() => {
  //   console.log(favorites)
  // }, [favorites])

  const fetchPosts = () => {
    setIsLoading(true)
    axios
      .get(
        'https://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=dc33393b3acf5ba9cfc1dbeff1bc8110&chart_name=top&page=1&page_size=20&country=it&f_has_lyrics=1'
      )
      .then(({ data }) => {
        const tracks = data.message.body.track_list
        setItems(tracks)
        setIsLoading(false)
      })
    // .catch((err) => console.error(err))
  }

  React.useEffect(fetchPosts, [])

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
    navigation.navigate('FullSong', { ...trackDetails })
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={fetchPosts}
          />
        }
        data={items}
        renderItem={({ item }) => (
          <Song
            onFavoritePress={onFavoritePress}
            favorites={favorites}
            onTrackPress={() =>
              onTrackPress({
                trackDetails: {
                  idTrack: item.track.track_id,
                  idCommonTrack: item.track.commontrack_id,
                  title: item.track.track_name
                }
              })
            }
            songDetails={item.track}
          />
        )}
      />
    </View>
  )
}
