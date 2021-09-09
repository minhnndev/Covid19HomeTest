import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Header from '../../components/Header/index';
import {styles} from './style';

const Category = () => {
  return (
    <View>
      <Header back title="Lịch sử quét mã" />
      <View style={styles.container}>
        <TouchableOpacity style={styles.itemHistory}>
          <AntDesign
            style={styles.iconQR}
            name="qrcode"
            size={36}
            color="white"
          />
          <View>
            <Text numberOfLines={1} style={styles.textName}>
              Điền gì chưa biết nên cứ để đây lúc nào biết thì điền
            </Text>
            <Text style={styles.dateTime}>10:09 - 10/09/2021</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemHistory}>
          <AntDesign
            style={styles.iconQR}
            name="qrcode"
            size={36}
            color="white"
          />
          <View>
            <Text numberOfLines={1} style={styles.textName}>
              Điền gì chưa biết nên cứ để đây lúc nào biết thì điền
            </Text>
            <Text style={styles.dateTime}>10:09 - 10/09/2021</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Category;
