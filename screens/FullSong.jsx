import React from 'react'
import axios from 'axios';
import { View, Text, StyleSheet } from 'react-native'
import { Loading } from '../components/Loading';

export default function FullSong({route, navigation}) {
  const [lyric,setLyrics] =React.useState()
  const [details,setDetails] = React.useState()
  const {idTrack, idCommonTrack, title} = route.params.trackDetails

  const [lyricsError, setLyricsError] = React.useState(null)
  const [trackDetailsError, setTrackDetailsError] = React.useState(null)

  const [isLyricsLoading, setIsLyricsLoading] = React.useState(true)
  const [isDetailsLoading, setDetailsLoading] = React.useState(true)

  React.useEffect(() => {
    navigation.setOptions({
      title: title,
    })
    axios
    .get('https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=dc33393b3acf5ba9cfc1dbeff1bc8110&track_id=' + idTrack)
    .then((res) => {
      setLyrics(res.data.message.body.lyrics)
      setIsLyricsLoading(false)
    })
    .catch(err => {
      console.error(err)

      setIsLyricsLoading(false)
      setLyricsError(err)
    })
  },[])
   React.useEffect(() => {
    axios
    .get('https://api.musixmatch.com/ws/1.1/track.get?apikey=dc33393b3acf5ba9cfc1dbeff1bc8110&commontrack_id=' + idCommonTrack)
    .then((res) => {
      setDetails(res.data.message.body.track)
      setDetailsLoading(false)
    })
    .catch(err => {
      console.error(err)

      setDetailsLoading(false)
      setTrackDetailsError(err)
    })
  },[])

if (isDetailsLoading || isLyricsLoading) {
    return (
      <Loading />
    )
}

if (lyricsError || trackDetailsError) {
  return <Text>Error</Text>
}

  return (
    <View style={styles.container}>
        <View style={styles.itemContainer}>
            <View style={styles.title}>
                <Text style={styles.textTitle}>Lirics</Text>
            </View>
            <Text style={styles.text}>{lyric.lyrics_body}</Text>
        </View>
        <View style={styles.itemContainer}>
            <View style={styles.title}>
                <Text style={styles.textTitle}>Details</Text>
            </View>
            <Text style={styles.text}>By {details.artist_name}</Text>
            <Text style={styles.text}>Album: {details.album_name}</Text>
        </View> 
    </View>
    
    
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    itemContainer:{
      backgroundColor: "white",
      flexDirection: "column",
      justifyContent: 'space-between',
      marginBottom: 25,
      borderRadius: 15,
      padding:10,
    },
    title: {
        borderBottomWidth: 1,
      borderBottomColor: "grey",
    },
    textTitle:{
      color: "black",
      fontSize: 19,
      justifyContent: 'center',
      textAlign: "center",
    },
    text: {
        color: "black",
        fontSize: 14,
        textAlign: "left",
    }
  })
