import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: 20
  },
  itemHistory: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: COLORS.white
  },
  iconQR: {
    backgroundColor: COLORS.primary,
    width: 60,
    height: 60,
    padding: 12,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  textName: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
    width: 260
  },
  dateTime: {
    color: COLORS.black,
    fontSize: 14,
    paddingLeft: 10,
  },
});
