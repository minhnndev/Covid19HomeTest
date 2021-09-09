import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import Header from '../../components/Header/index';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from './style';

const Profile = () => {
  const TextInfor = props => {
    const {name, inforName} = props;
    return (
      <View style={styles.textContainer}>
        <Text style={{fontWeight: 'bold'}}>{name}: </Text>
        <Text numberOfLines={3}>{inforName}</Text>
      </View>
    );
  };
  return (
    <>
      <Header back title="Thông tin cá nhân" />
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.user}>
              <Text style={styles.name}>Trần Lê Tấn Tài</Text>
              <Text style={styles.phone}>094104949</Text>
            </View>
            <View style={styles.infor}>
              <TextInfor name="Ngày sinh" inforName="10/09/2000" />
              <TextInfor name="Số CMND" inforName="20200202020" />
              <TextInfor name="Giới tính" inforName="Nam" />
              <TextInfor name="Số BHYT" inforName="7474747474" />
              <TextInfor name="Tỉnh/TP" inforName="Bình Dương" />
              <TextInfor name="Huyện/TX/TP" inforName="Thủ Dầu Một" />
              <TextInfor name="Phường/xã" inforName="Phú Hòa" />
              <TextInfor name="Ấp/khu phố" inforName="Khu phố 6" />
              <TextInfor name="Tên đường" inforName="Trần Văn Ơn" />
              <TextInfor name="Số nhà" inforName="240" />
              <TextInfor name="Ghi chú" inforName="Ghi chú cc" />
            </View>
            <View style={{alignItems: 'center', paddingTop: 10}}>
              <TouchableOpacity style={styles.btnEdit}>
                <Text style={styles.textEdit}>Chỉnh sửa</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.listMember}>
              <TouchableOpacity style={styles.btnMember}>
                <Text style={styles.textMember}>Dương Lê Phước Trung</Text>
                <Feather name="chevron-right" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Profile;
