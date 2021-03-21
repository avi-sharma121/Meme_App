import React from 'react';
import {View, StyleSheet, Text, FlatList, ScrollView} from 'react-native';

import Favorite from '../components/favourite';

function favourites(props) {
  return (
    <ScrollView style={styles.container}>
      <Favorite />
      <Favorite />
      <Favorite />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default favourites;

/*
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Favourites(props) {
  return (
    <View style={styles.container}>
      <View style={styles.favourite}>
        <View style={{width: '80%'}}>
          <Image
            source={{
              uri:
                'https://3.bp.blogspot.com/-nRs-bSPzYYU/W-dldasAbDI/AAAAAAAAFMM/q0pdE92W8sQcdSCHNaScyG5gt6aIU--BQCLcBGAs/s1600/good-morning-have-a-good-day-with-beautiful-nature.jpg',
            }}
            style={{width: '100%', height: '95%', marginTop: 0}}
          />
        </View>
        <View style={{alignItems: 'flex-end', justifyContent: 'space-evenly'}}>
          <MaterialCommunityIcons
            name="download"
            size={35}
            color={'white'}
            onPress={() => dowload()}
          />
          <MaterialIcons
            name="favorite"
            size={35}
            color={'white'}
            onPress={() => favorite()}
          />
          <MaterialCommunityIcons
            name="share"
            size={35}
            color={'white'}
            onPress={() => share()}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
  },
  favourite: {
    backgroundColor: 'blue',
    width: '100%',
    height: '90%',
    flex: 1,
    //alignItems: 'flex-end',
    //justifyContent: 'space-evenly',
  },
});

export default Favourites;

*/
/*
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Favourites = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
      <View style={{flex: 3, backgroundColor: 'red'}} />
      <View style={{flex: 1, backgroundColor: 'green'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
  },
});

export default Favourites;

*/
