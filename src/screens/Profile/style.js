import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    padding: 10,
  },
  user: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  phone: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  infor: {
    padding: 20,
  },
  btnEdit: {
    backgroundColor: COLORS.primary,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  textEdit: {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  listMember: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },

  btnMember: {
    flexDirection: 'row',
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 4,
  },
  textMember: {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: 'bold',
  },
});

