import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';

import {CheckBox} from 'react-native-elements';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {styles} from './style';

function Phone() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.lable}>
        <Text style={styles.txtInformation}>Thông tin</Text>
      </View>

      <Text style={styles.lable}>
        Vui lòng cũng cấp số điện thoại của bạn để nhận được hỗ trợ y tế sớm nhất khi bạn có nguy cơ nhiễm COVID-19
      </Text>

      <View>
        <View style={styles.phoneInput}>
          <View>
            <SimpleLineIcons
              name="screen-smartphone"
              size={25}
              style={styles.icon}
            />
          </View>

          <TextInput
            placeholder="Nhập số điện thoại"
            keyboardType="numeric"
            onChangeText={text => setPhoneNumber(text)}
          />
        </View>
      </View>

      <View style={styles.confirm}>

        <CheckBox value={isSelected} onValueChange={setSelection} />
        <Text style={styles.txtConform}>
          Xác nhận những thông tin bạn cung cấp là chính xác. Bạn đã đọc, đồng ý với{' '} <Text style={styles.txtRules}>Điều khoản sử dụng </Text> và đồng ý chia sẻ thông tin cá nhân của bạn với cơ quan y tế khi bạn được xác định nhiễm hoặc nghi nhiễm Covid-19
        </Text>
      </View>

      
      <View>
        <TouchableOpacity style={styles.btnNext}>
          <Text style={styles.next}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.btnSkip}>
          <Text style={styles.skip}>Bỏ qua</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Phone;
