import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Button} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function memetok(props) {
  const left = () => {
    console.log('Left Button Press');
    setImage(
      'https://positivevichar.com/wp-content/uploads/2020/03/Good-morning-images-in-nature.jpg',
    );
  };
  const dowload = () => {
    console.log('Download Button Press');
  };
  const favorite = () => {
    console.log('Favorite Button Press');
  };
  const share = () => {
    console.log('Share Button Press');
  };
  const right = () => {
    console.log('Right Button Press');
    setImage(
      'https://3.bp.blogspot.com/-nRs-bSPzYYU/W-dldasAbDI/AAAAAAAAFMM/q0pdE92W8sQcdSCHNaScyG5gt6aIU--BQCLcBGAs/s1600/good-morning-have-a-good-day-with-beautiful-nature.jpg',
    );
  };

  const [image, setImage] = useState(
    'https://www.imagediamond.com/blog/wp-content/uploads/2019/11/Good-Morning-nature-images-30.jpg',
  );
  return (
    <View style={styles.container}>
      <View
        style={{
          height: '90%',
          weight: '100%',
          backgroundColor: 'white',
          alignItems: 'center',
          flex: 1,
          margin: 20,
          borderRadius: 30,
          overflow: 'hidden',
        }}>
        <Image
          source={{
            uri: image,
          }}
          style={{width: '100%', height: '100%', marginTop: 0}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: '#444f5a',
          height: '25%',
          width: '90%',
          alignSelf: 'center',
          margin: 20,
          flex: 0.1,
          alignItems: 'center',
          borderRadius: 50,
        }}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={35}
          color={'white'}
          onPress={() => left()}
        />
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
        <MaterialCommunityIcons
          name="chevron-right"
          size={35}
          color={'white'}
          onPress={() => right()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default memetok;
