import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TrackListStack from '../components/TrackListStack';
import FullSong from './FullSong';
import Icon from 'react-native-vector-icons/AntDesign';
import {View} from 'react-native';
import Favorite from './Favorite';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Songs"
          component={TrackListStack}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="playcircleo" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="hearto" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
