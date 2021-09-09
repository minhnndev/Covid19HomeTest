import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main: {
    flex: 1,
    marginTop: -15
  },
  form: {
    margin: 20
  },
  title: {
    paddingBottom: 5,
    fontWeight: 'bold'
  },
  redStar: {
    color: 'red'
  },
  inputContainer: {
    backgroundColor: '#f8f9fa',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 3,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 5
  },
  inputContent: {
    backgroundColor: '#f8f9fa',
    fontSize: 14,
    width: 300,
    paddingLeft: 8
  },
  picker: {
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 3,
    height: 50,
    width: 370,
    marginBottom: 10
  },
  button: {
    alignItems: 'center', 
    backgroundColor: COLORS.primary, 
    padding: 10, marginTop: 10, 
    borderRadius: 4
  },
  disableButton: {
    alignItems: 'center', 
    backgroundColor: 'grey', 
    padding: 10, marginTop: 10, 
    borderRadius: 4
  },
  errMessage: {
    color: 'red',
    fontStyle: 'italic',
    paddingBottom: 5
  }
});
