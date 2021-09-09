import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    flexDirection: 'column',
  },
  lable: {
    width: null,
    height: 150,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    fontSize: 20
  },
  txtInformation: {
    color: '#338AFF',
    fontSize: 25,
  },

  phoneInput: {
    height: 50,
    marginTop: 30,
    marginBottom: 25,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 12,
    borderWidth: 0.1,
    padding: 5,
    fontSize: 15,
    flexDirection: 'row',
  },
  icon: {
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
  },
  confirm: {
    flexDirection: 'row',
    margin: 10,
    alignSelf: 'center',
    marginRight: 10,
    marginLeft: 30
  },
  txtConform: {
    color: '#0C0E11',
    fontSize: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 30,
  },
  txtRules: {
    color: '#0D68C3',
    fontWeight: 'bold',
  },
  btnNext: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    height: 60,
    backgroundColor: '#CDCECF',
    marginLeft: 80,
    marginRight: 80,
    marginTop: 50,
  },
  next: {
    color: 'white',
  },
  btnSkip: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginLeft: 80,
    marginRight: 80,
    marginTop: 100,
  },
  skip: {
    fontSize: 20,
    color: '#0D68C3',
  },
});
