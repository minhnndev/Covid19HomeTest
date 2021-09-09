import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Keyboard} from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import RNOtpVerify from 'react-native-otp-verify';

import {styles} from './style';

const AuthOTP = () => {
  const [otp, setOTP] = useState();

  const getHash = () =>
    RNOtpVerify.getHash().then(console.log).catch(console.log);

  const startListeningForOtp = () =>
    RNOtpVerify.getOtp()
      .then(p => RNOtpVerify.addListener(this.otpHandler))
      .catch(p => console.log(p));

  const otpHandler = message => {
    const otp = /(\d{4})/g.exec(message)[1];
    setOTP({otp});
    RNOtpVerify.removeListener();
    Keyboard.dismiss();
  };

  useEffect(() => {
    getHash();
    startListeningForOtp();

    return () => RNOtpVerify.removeListener();
  }, []);

  return (
    <View style={styles.container}>
      <OtpInputs handleChange={code => console.log(code)} numberOfInputs={6} />
    </View>
  );
};

export default AuthOTP;
