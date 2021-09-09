import {StyleSheet} from 'react-native';
import COLORS from '../../constants/theme'
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    backgroundColor: COLORS.white,
    elevation: 7,
    padding: 10
  },
  name: {
    color: COLORS.blue,
    fontSize: 16,
    paddingLeft: 10
  },
});
export default styles
