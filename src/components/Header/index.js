import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style'

const Header = props => {
  const navigation = useNavigation();
  const {back} = props;
  return (
    <View style={styles.header}>
      {back && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={30} />
        </TouchableOpacity>
      )}
      <Text style={styles.name}>{props.title}</Text>
    </View>
  );
};

export default Header;
