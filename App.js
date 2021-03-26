import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Memetok from './src/screen/memetok';
import Favourites from './src/screen/favourites';
import About from './src/screen/about';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ff9999" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
              let iconName;
              if (route.name === 'MemeTok') {
                iconName = 'laughing';
                return <Fontisto name={iconName} size={25} color={color} />;
              } else if (route.name === 'Favourites') {
                iconName = 'favorite-outline';
                return (
                  <MaterialIcons name={iconName} size={25} color={color} />
                );
              } else if (route.name === 'About') {
                iconName = 'account-cowboy-hat';
                return (
                  <MaterialCommunityIcons
                    name={iconName}
                    size={25}
                    color={color}
                  />
                );
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: '#e1e1e1',
            activeBackgroundColor: '#ff9999',
            inactiveTintColor: '#30475e',
            inactiveBackgroundColor: '#ff9999',
            showLabel: false,
          }}>
          <Tab.Screen name="MemeTok" component={Memetok} />
          <Tab.Screen name="Favourites" component={Favourites} />
          <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
