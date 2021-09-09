import React, {useEffect, useState} from 'react';
import {Text, View, Linking, Platform, Picker} from 'react-native';
import {styles} from './style';
import {COLORS} from '../../constants/theme';
import {Header, InputValue} from '../../components';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import Feather from 'react-native-vector-icons/Feather';
import {RadioButton} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import {useValidation} from 'react-native-form-validator';
//import {Picker} from '@react-native-picker/picker';

import customValidationMessages from '../../validate/customValidationMessages';
import {HanhChinhVN} from '../../utils';

function Info() {
  // Hanh chinh Viet Nam
  const provinces = HanhChinhVN.provinces;

  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('0');
  const [cmnd, setCMND] = useState('');
  const [bhyt, setBHYT] = useState('');
  const [province, setProvince] = useState(null);
  const [district, setDistrict] = useState(null);
  const [ward, setWard] = useState(null);
  const [town, setTown] = useState('');
  const [detailAdd, setDetailAdd] = useState('');
  const [note, setNote] = useState('');
  const [agree, setAgree] = useState(false);

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [birthday, setBirthday] = useState(new Date());
  const [birthdayDisplay, setBdDisplay] = useState(null);

  useEffect(() => {
    setDisplayBirtday(birthday);
  }, []);

  const setDisplayBirtday = birthday => {
    let format = `${birthday.getDate()}/${
      birthday.getMonth() + 1
    }/${birthday.getFullYear()}`;
    setBdDisplay(format);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setBirthday(currentDate);
    setDisplayBirtday(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const [checked, setChecked] = useState('0');
  const checkedVerify = () => {
    if (checked) return 0;
    return 1;
  };

  const {validate, isFieldInError, getErrorsInField, getErrorMessages} =
    useValidation({
      state: {
        fullname,
        phone,
        birthday,
        gender,
        cmnd,
        provinces,
        district,
        ward,
        town,
        detailAdd,
        agree,
      },
      messages: customValidationMessages,
    });

  const onPressButton = () => {
    const isOk = validate({
      fullname: {maxlength: 30, required: true},
      phone: {required: true, maxlength: 10},
      birthday: {required: true},
      gender: {required: true},
      cmnd: {required: true, maxlength: 12},
      provinces: {required: true},
      district: {required: true},
      ward: {required: true},
      town: {required: true},
      detailAdd: {required: true},
    });
    /*Xử lý*/
  };

  return (
    <View style={styles.container}>
      <Header back title="Thông tin cá nhân" />
      <View style={styles.main}>
        <ScrollView>
          <View style={styles.form}>
            {/*Họ và tên*/}
            <Text style={styles.title}>
              Họ và Tên <Text style={styles.redStar}>*</Text>
            </Text>
            <InputValue
              placeholder="Họ và Tên"
              icon="user-o"
              value={fullname}
              onChangeText={fullname => setFullname(fullname)}
            />
            {isFieldInError('fullname') &&
              getErrorsInField('fullname').map(errorMessage => (
                <Text style={styles.errMessage}>{errorMessage}</Text>
              ))}

            {/*Số điện thoại*/}
            <Text style={styles.title}>
              Số điện thoại <Text style={styles.redStar}>*</Text>
            </Text>
            <InputValue
              placeholder="Số điện thoại"
              icon="phone"
              onChangeText={phone => setPhone(phone)}
            />
            {isFieldInError('phone') &&
              getErrorsInField('phone').map(errorMessage => (
                <Text style={styles.errMessage}>{errorMessage}</Text>
              ))}

            {/*Ngày tháng năm sinh*/}
            <Text style={styles.title}>
              Ngày tháng năm sinh <Text style={styles.redStar}>*</Text>
            </Text>
            <View style={styles.inputContainer}>
              <Feather name="calendar" style={{fontSize: 22}} />
              <TextInput
                style={styles.inputContent}
                placeholder="dd/MM/yyyy"
                value={birthdayDisplay}
                // onChangeText={birthday => setInfoUser({...infoUser, ...{birthday}})}
              />
              <TouchableOpacity onPress={showDatepicker}>
                <Feather name="chevron-down" style={{fontSize: 22}} />
              </TouchableOpacity>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={birthday}
                  mode={mode}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
            {isFieldInError('birthday') &&
              getErrorsInField('birthday').map(errorMessage => (
                <Text style={styles.errMessage}>{errorMessage}</Text>
              ))}

            {/*Giới tính*/}
            <Text style={styles.title}>
              Giới tính <Text style={styles.redStar}>*</Text>
            </Text>
            <RadioButton.Group
              onValueChange={gender => setGender(gender)}
              value={gender}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                  <RadioButton
                    value="0"
                    status={checked === '0' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('0')}
                  />
                  <Text style={{paddingTop: 8}}>Nam</Text>
                </View>
                <View style={{flexDirection: 'row', paddingLeft: 10}}>
                  <RadioButton
                    value="1"
                    status={checked === '1' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('1')}
                  />
                  <Text style={{paddingTop: 8}}>Nữ</Text>
                </View>
              </View>
            </RadioButton.Group>
            {isFieldInError('gender') &&
              getErrorsInField('gender').map(errorMessage => (
                <Text style={styles.errMessage}>{errorMessage}</Text>
              ))}

            {/*CMND*/}
            <Text style={styles.title}>
              Số CMND/Căn cước công dân <Text style={styles.redStar}>*</Text>
            </Text>
            <InputValue
              placeholder="CMND/Căn cước công dân"
              icon="id-card-o"
              onChangeText={cmnd => setCMND(cmnd)}
            />
            {isFieldInError('cmnd') &&
              getErrorsInField('cmnd').map(errorMessage => (
                <Text style={styles.errMessage}>{errorMessage}</Text>
              ))}

            {/*BHYT*/}
            <Text style={styles.title}>Bảo hiểm Y tế</Text>
            <InputValue
              placeholder="Bảo hiểm Y tế"
              icon="id-card"
              onChangeText={bhyt => setBHYT(bhyt)}
            />

            {/*Tỉnh/TP*/}
            <Text style={styles.title}>
              Tỉnh/Thành phố <Text style={styles.redStar}>*</Text>
            </Text>
            <View style={styles.picker}>
              <Picker
                province={province}
                style={{height: 50, width: 370}}
                onValueChange={(itemValue, itemIndex) => {
                  setProvince(itemValue);
                  setDistrict(null);
                  setWard(null);
                }}>
                {Object.keys(provinces).map(item => {
                  return (
                    <Picker.Item
                      label={provinces[item].name_with_type}
                      value={provinces[item].code}
                      key={provinces[item].code}
                    />
                  );
                })}
              </Picker>
            </View>
            {isFieldInError('provinces') &&
              getErrorsInField('provinces').map(errorMessage => (
                <Text style={styles.errMessage}>{errorMessage}</Text>
              ))}

            {/*Quận/Huyện/Thị xã/Thành phố*/}
            <Text style={styles.title}>
              Quận/Huyện/Thị xã/Thành phố <Text style={styles.redStar}>*</Text>
            </Text>
            <View style={styles.picker}>
              <Picker
                district={district}
                style={{height: 50, width: 370}}
                onValueChange={(itemValue, itemIndex) => {
                  setDistrict(itemValue);
                  setWard(null);
                }}>
                <Picker.Item label="Chọn" value={null} key={null} />
                {province !== null &&
                  Object.keys(provinces[province]['quan-huyen']).map(item => {
                    return (
                      <Picker.Item
                        label={
                          provinces[province]['quan-huyen'][item].name_with_type
                        }
                        value={provinces[province]['quan-huyen'][item].code}
                        key={provinces[province]['quan-huyen'][item].code}
                      />
                    );
                  })}
              </Picker>
            </View>
            {isFieldInError('district') &&
              getErrorsInField('district').map(errorMessage => (
                <Text style={styles.errMessage}>{errorMessage}</Text>
              ))}

            {/*Xã/Phường/Thị trấn*/}
            <Text style={styles.title}>
              Xã/Phường/Thị trấn <Text style={styles.redStar}>*</Text>
            </Text>
            <View style={styles.picker}>
              <Picker
                ward={ward}
                style={{height: 50, width: 370}}
                onValueChange={(itemValue, itemIndex) => setWard(itemValue)}>
                <Picker.Item label="Chọn" value={null} key={null} />
                {province !== null &&
                  district !== null &&
                  Object.keys(
                    provinces[province]['quan-huyen'][district]['xa-phuong'],
                  ).map(item => {
                    let wardd =
                      provinces[province]['quan-huyen'][district]['xa-phuong'][
                        item
                      ];
                    return (
                      <Picker.Item
                        label={wardd.name_with_type}
                        value={wardd.code}
                        key={wardd.code}
                      />
                    );
                  })}
              </Picker>
            </View>
            {isFieldInError('ward') &&
              getErrorsInField('ward').map(errorMessage => (
                <Text style={styles.errMessage}>{errorMessage}</Text>
              ))}

            {/*Ấp/Khu phố*/}
            <Text style={styles.title}>
              Ấp/Khu phố <Text style={styles.redStar}>*</Text>
            </Text>
            <InputValue
              placeholder="Ấp/Khu phố"
              onChangeText={town => setTown(town)}
            />
            {isFieldInError('town') &&
              getErrorsInField('town').map(errorMessage => (
                <Text style={styles.errMessage}>{errorMessage}</Text>
              ))}

            {/*Địa chỉ chi tiết*/}
            <Text style={styles.title}>Địa chỉ chi tiết</Text>
            <InputValue
              placeholder="Địa chỉ chi tiết"
              onChangeText={detailAdd => setDetailAdd(detailAdd)}
            />
            {isFieldInError('detailAdd') &&
              getErrorsInField('detailAdd').map(errorMessage => (
                <Text style={styles.errMessage}>{errorMessage}</Text>
              ))}

            {/*Ghi chú*/}
            <Text style={styles.title}>Ghi chú</Text>
            <View style={styles.inputContainer}>
              <TextInput
                multiline
                numberOfLines={3}
                style={{backgroundColor: '#f8f9fa', fontSize: 14, width: 350}}
                textAlignVertical="top"
                placeholder="Ghi chú"
                onChangeText={note => setNote(note)}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 20,
                alignContent: 'center',
                marginTop: 5,
              }}>
              <CheckBox
                style={{marginLeft: -15}}
                disabled={false}
                value={agree}
                onValueChange={newValue => setAgree(newValue)}
              />
              <Text>
                Tôi cam kết các thông tin công khai là đúng sự thật và đồng ý
                với
                <Text
                  style={{color: COLORS.primary}}
                  onPress={() => Linking.openURL('http://google.com')}>
                  {' '}
                  Điều khoản sử dụng
                </Text>
              </Text>
            </View>

            {isFieldInError('agree') &&
              getErrorsInField('agree').map(errorMessage => (
                <Text style={styles.errMessage}>{errorMessage}</Text>
              ))}

            <TouchableOpacity
              disabled={!agree}
              style={agree ? styles.button : styles.disableButton}
              onSubmit
              onPress={onPressButton}>
              <Text style={{color: 'white', fontSize: 16}}>ĐỒNG Ý</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Info;
