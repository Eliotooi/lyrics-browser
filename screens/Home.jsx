import React, { useCallback } from 'react';
import axios from 'axios';
import {FlatList, View, RefreshControl} from 'react-native';
import Song from '../components/Song';
import {Loading} from '../components/Loading';
import {connect} from 'react-redux';
import {ADD_FAVORITES, REMOVE_FAVORITES} from '../redux/Type';

const Home = ({navigation, addToFavorite, removeFromFavorite, favorites = []}) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get(
        'https://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=dc33393b3acf5ba9cfc1dbeff1bc8110&chart_name=top&page=1&page_size=20&country=it&f_has_lyrics=1',
      )
      .then(({data}) => {
        const tracks = data.message.body.track_list;
        setItems(tracks);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  };

  React.useEffect(fetchPosts, []);

  const onFavoritePress = useCallback(item => {
    const exsistingItem = favorites.find(
      favoriteItem =>
        item?.track && favoriteItem.track.track_id === item.track.track_id,
    );
    
    if (exsistingItem) {
      removeFromFavorite(exsistingItem.track.track_id);
    } else {
      addToFavorite(item);
    }
  }, [removeFromFavorite, addToFavorite, favorites])

  const onTrackPress = trackDetails => {
    navigation.navigate('FullSong', {...trackDetails});
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({item}) => (
          <Song
            onFavoritePress={onFavoritePress}
            onTrackPress={() =>
              onTrackPress({
                trackDetails: {
                  idTrack: item.track.track_id,
                  idCommonTrack: item.track.commontrack_id,
                  title: item.track.track_name,
                },
              })
            }
            songDetails={item.track}
          />
        )}
      />
    </View>
  );
};

function mapStateToProps(state) {
  return {
    favorites: state.favorites.favorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToFavorite: item => dispatch({type: ADD_FAVORITES, payload: item}),
    removeFromFavorite: id => dispatch({type: REMOVE_FAVORITES, payload: id}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
