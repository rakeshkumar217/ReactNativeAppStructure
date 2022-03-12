import { StyleSheet, Platform } from 'react-native';
import { fonts } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    width: Platform.OS === 'ios' ? 120 : 100,
    height: Platform.OS === 'ios' ? 40 : 34,
    flexDirection: 'row',
    alignContent: 'stretch',
    justifyContent: 'center',
  },
  requiredStar: {
    position: 'absolute',
    left: -10,
    top: -5,
    color: 'red',
    fontSize: 20,
    fontWeight: '500',
  },
  buttonLeft: {
    display: 'flex',
    height: Platform.OS === 'ios' ? 40 : 34,
    width: Platform.OS === 'ios' ? 40 : 34,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    backgroundColor: '#2696d6',
    borderColor: '#838383',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonRight: {
    flex: 1,
    height: Platform.OS === 'ios' ? 40 : 34,
    width: Platform.OS === 'ios' ? 40 : 34,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 1,
    marginLeft: -1,
    backgroundColor: '#2696d6',
    borderColor: '#838383',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonCenter: {
    flex: 1,
    height: Platform.OS === 'ios' ? 40 : 34,
    width: Platform.OS === 'ios' ? 40 : 34,
    borderRadius: 0,
    borderWidth: 1,
    marginLeft: -1,
    paddingTop: Platform.OS === 'ios' ? 0 : 8,
    backgroundColor: '#FFFFFF',
    borderColor: '#838383',
    textAlign: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 26,
    fontFamily: fonts.LatoBold,
    color: '#FFFFFF'
  },
  textLabel: {
    fontSize: 16,
    fontFamily: fonts.LatoLight,
    color: 'black',
    marginBottom: 5,
  },
  inputView: {
    fontSize: 16,
    fontFamily: fonts.LatoRegular,
    color: 'black',
  },
});
export default styles;
