import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import {StackedAreaChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from '@apollo/client';

import {styles} from './style';
import {COLORS, SIZES} from '../../constants/theme';
import {GET_PARAMS_COVID} from '../../api/graphql/queries/paramsCovid';

const textDanger = 'Bị nhiễm';
const textSucess = 'Khỏi bệnh';
const textDeath = 'Tử vong';

const Home = () => {
  const colors = [COLORS.yellow, COLORS.lightGreen, COLORS.red];
  const keys = ['danger', 'sucess', 'death'];
  const [dataProvince, setDataProvince] = useState([]);
  const [dataNational, setDataNational] = useState([]);
  const [tabs, setTabs] = useState(0);
  const {loading, error, data} = useQuery(GET_PARAMS_COVID);

  const [markerList, setMarkers] = useState();

  // const renderMarkers = c => {
  //   console.log('CCCC: ', c);
  //   <MapMarker data={c} />;
  // };

  useEffect(() => {
    if (!loading && data) {
      setDataNational(data.totalVietNam);
      setDataProvince(data.provinces);
    }
  }, [loading, data]);

  console.log('DATA COVID', dataNational);
  console.log('DATA PROVINCE', dataProvince);

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const dataPie = [
    {
      name: textDanger,
      population: Number(dataNational.confirmed),
      color: COLORS.yellow,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: textSucess,
      population: Number(dataNational.recovered),
      color: COLORS.lightGreen,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: textDeath,
      population: Number(dataNational.deaths),
      color: COLORS.red,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
  ];
  const dataArea = [
    {
      month: new Date(2021, 0, 1),
      danger: 518321,
      sucess: 226321,
      death: 9321,
    },
    {
      month: new Date(2021, 1, 1),
      danger: 529451,
      sucess: 236564,
      death: 10325,
    },
    {
      month: new Date(2021, 2, 1),
      danger: 541156,
      sucess: 256464,
      death: 11546,
    },
    {
      month: new Date(2021, 3, 1),
      danger: 564646,
      sucess: 274654,
      death: 12655,
    },
  ];

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
  if (error) {
    console.error(error);
    return (
      <View style={styles.container}>
        <Text>Error :((</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txtHeader}>Thông tin dịch bệnh</Text>
      <View style={styles.topParams}>
        <View>
          <Text
            style={[
              styles.anytime,
              {color: COLORS.yellow, backgroundColor: COLORS.yellowO},
            ]}>
            {dataNational.confirmed}
          </Text>
          <Text
            style={[
              styles.status,
              {color: COLORS.black, backgroundColor: COLORS.yellowO},
            ]}>
            {textDanger}
          </Text>
          <Text
            style={[
              styles.day,
              {color: COLORS.white, backgroundColor: COLORS.yellow},
            ]}>
            +9.521
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.anytime,
              {color: COLORS.lightGreen, backgroundColor: COLORS.lightGreenO},
            ]}>
            {dataNational.recovered}
          </Text>
          <Text
            style={[
              styles.status,
              {color: COLORS.black, backgroundColor: COLORS.lightGreenO},
            ]}>
            {textSucess}
          </Text>
          <Text
            style={[
              styles.day,
              {color: COLORS.white, backgroundColor: COLORS.lightGreen},
            ]}>
            +11.823
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.anytime,
              {color: COLORS.red, backgroundColor: COLORS.redO},
            ]}>
            {dataNational.deaths}
          </Text>
          <Text
            style={[
              styles.status,
              {color: COLORS.black, backgroundColor: COLORS.redO},
            ]}>
            {textDeath}
          </Text>
          <Text
            style={[
              styles.day,
              {color: COLORS.white, backgroundColor: COLORS.red},
            ]}>
            +312
          </Text>
        </View>
      </View>
      <Text style={styles.txtDateUpdate}>Cập nhật: 21:10, 04/09/2021</Text>
      <View style={styles.listTab}>
        <TouchableOpacity
          onPress={() => setTabs(0)}
          style={[styles.button, tabs === 0 && styles.btnEnable]}>
          <Text
            style={[styles.buttonText, tabs === 0 && {color: COLORS.white}]}>
            Biểu đồ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTabs(1)}
          style={[styles.button, tabs === 1 && styles.btnEnable]}>
          <Text
            style={[styles.buttonText, tabs === 1 && {color: COLORS.white}]}>
            Map
          </Text>
        </TouchableOpacity>
      </View>
      {tabs === 0 && (
        <>
          <PieChart
            data={dataPie}
            width={SIZES.width}
            height={250}
            chartConfig={chartConfig}
            accessor={'population'}
            backgroundColor={'transparent'}
            // paddingLeft={'15'}
            center={[10, 0]}
            absolute
          />
          <StackedAreaChart
            style={styles.areaChart}
            data={dataArea}
            keys={keys}
            colors={colors}
            curve={shape.curveNatural}
            showGrid={false}
            // svgs={svgs}
          />
        </>
      )}
      {tabs === 1 && (
        <View style={{flex: 1}}>
          <MapView
            customMapStyle={styles.mapStyle}
            onMapReady={() => setMarkers(dataProvince.length)}
            mapType="standard"
            provider="google"
            style={{flex: 1}}
            region={{
              latitude: 10.823099,
              longitude: 106.629664,
              latitudeDelta: 0.1646,
              longitudeDelta: 0.5994,
            }}>
            {markerList !== 0
              ? dataProvince.map((d, index) => (
                  <Marker
                    key={index}
                    coordinate={{
                      latitude: Number(d.Lat) + 0.34,
                      longitude: Number(d.Long) - 0.00002,
                    }}
                    tracksViewChanges={false}
                    anchor={{x: 0.5, y: -0.5}}>
                    <View style={styles.markerPoint}>
                      <Icon
                        name="ios-warning"
                        size={30}
                        color="rgba(255,255,255,1)"
                      />
                    </View>
                  </Marker>
                ))
              : null}
          </MapView>
        </View>
      )}
    </View>
  );
};

export default Home;
