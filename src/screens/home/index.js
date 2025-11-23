import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {allTexts} from '../../common';

const Home = ({navigation}) => {
  const {
    screenNames: {category},
  } = allTexts;
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => navigation.navigate(category)}>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
