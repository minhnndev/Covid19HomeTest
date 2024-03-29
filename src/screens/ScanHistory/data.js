import React from 'react';
import {Text, View} from 'react-native';
const TextTimeDate = props => {
  return (
    <View style={{paddingRight: 10}}>
      <Text style={{fontWeight: 'bold', color: '#fff'}}>{props.date}</Text>
      <Text style={{color: '#fff'}}>{props.time}</Text>
    </View>
  );
};

const data = [
  {
    time: <TextTimeDate date="10/09/2021" time="10:12" />,
    title: 'Trần Lê Tấn Tài',
    description: 'Chỉ số PCR = 21 -> Âm tính',
  },
];

export default data;
