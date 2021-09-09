import React from 'react';
import numeral from 'numeral';
import {View, Text, StyleSheet} from 'react-native';
import {Marker} from 'react-native-maps';

const MapMarker = ({data}) => {
  console.log('MAP: ', data);
  return (
    <Marker
      coordinate={[{latitude: data.Lat, longitude: data.Long}]}
      tracksViewChanges={false}
      anchor={{x: 0.5, y: -0.5}}>
      <View style={styles.container}>
        <Text style={styles.title}>
          {numeral(data.cases.active).format('0,0')}
        </Text>
      </View>
    </Marker>
  );
};

export {MapMarker};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#bdbdbd',
    backgroundColor: 'rgb(242, 63, 52)',
  },
  title: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
