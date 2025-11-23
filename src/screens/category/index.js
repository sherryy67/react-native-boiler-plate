import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Category = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Category Screen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.text}>Back </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Category;
