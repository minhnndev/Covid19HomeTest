import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  areaChart: {height: 200, paddingVertical: 16},
  topParams: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  txtHeader: {
    marginVertical: 10,
    fontSize: 25,
    fontWeight: '700',
  },
  anytime: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 15,
    width: 110,
    textAlign: 'center',
    borderRadius: 4,
  },
  status: {
    fontSize: 14,
    paddingBottom: 10,
    color: '#000',
    width: 110,
    textAlign: 'center',
  },
  day: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    paddingVertical: 5,
    width: 110,
    textAlign: 'center',
    borderRadius: 4,
  },
  txtDateUpdate: {
    marginTop: 5,
  },
  listTab: {
    borderRadius: 10,
    marginVertical: 20,
    flexDirection: 'row',
    backgroundColor: COLORS.secondary,
  },
  chartStyle: {
    margin: 5,
    height: SIZES.height * 0.25,
    width: SIZES.width * 0.5,
  },
  markerPoint: {
    padding: 10,
    backgroundColor: 'rgba(255,10,0,0.5)',
    borderRadius: 50,
  },
  title: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'gray',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 10,
  },
  btnEnable: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    margin: 1,
  },
});
