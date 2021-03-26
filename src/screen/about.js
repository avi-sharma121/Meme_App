import React, {useState} from 'react';
import {View, TouchableHighlight, Text, StatusBar, Image} from 'react-native';

const About = () => {
  return (
    <>
      <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: 30,
            color: '#f05454',
            fontStyle: 'italic',
            textDecorationLine: 'underline',
          }}>
          Khud se Dal lena be!!!
        </Text>
      </View>
    </>
  );
};
export default About;
