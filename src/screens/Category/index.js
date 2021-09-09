import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import Header from '../../components/Header/index';
import {styles} from './style';
const TOpacityCustom = props => {
  const {icon, title} = props;
  return (
    <TouchableOpacity style={styles.btnItem}>
      <Feather style={styles.iconBtnItem} name={icon} size={24} color="white" />
      <Text style={styles.textBtnItem}>{title}</Text>
    </TouchableOpacity>
  );
};

const Category = () => {
  return (
    <View>
      <Header title="Danh mục" />
      <View style={styles.container}>
        <TOpacityCustom icon="user" title="Thông tin cá nhân" />
        <TOpacityCustom icon="message-circle" title="Gửi hỏi đáp" />
        <TOpacityCustom icon="alert-circle" title="Giới thiệu" />
      </View>
    </View>
  );
};

export default Category;
