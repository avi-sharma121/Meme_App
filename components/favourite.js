import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Favorite = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 3.5}}>
        <Image
          source={{
            uri:
              'https://3.bp.blogspot.com/-nRs-bSPzYYU/W-dldasAbDI/AAAAAAAAFMM/q0pdE92W8sQcdSCHNaScyG5gt6aIU--BQCLcBGAs/s1600/good-morning-have-a-good-day-with-beautiful-nature.jpg',
          }}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View
        style={{
          flex: 0.5,
          backgroundColor: 'white',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <MaterialCommunityIcons
          name="download"
          size={35}
          color={'#444f5a'}
          onPress={() => dowload()}
        />
        <MaterialIcons
          name="favorite"
          size={35}
          color={'#444f5a'}
          onPress={() => favorite()}
        />
        <MaterialCommunityIcons
          name="share"
          size={35}
          color={'#444f5a'}
          onPress={() => share()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    flexDirection: 'row',
    height: 500,
    marginBottom: 5,
  },
});

export default Favorite;
