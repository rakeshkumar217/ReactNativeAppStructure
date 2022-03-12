import { StyleSheet } from 'react-native';
import { fonts } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  requiredStar: {
    position: 'absolute',
    left: -10,
    top: -5,
    color: 'red',
    fontSize: 20,
    fontWeight: '500',
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
