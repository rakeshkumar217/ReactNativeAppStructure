import { StyleSheet } from 'react-native';
import { fonts } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textLabel: {
    fontSize: 16,
    fontFamily: fonts.LatoLight,
    color: 'black',
    marginBottom: 5,
  },
  requiredStar: {
    position: 'absolute',
    left: -10,
    top: -5,
    color: 'red',
    fontSize: 20,
    fontWeight: '500',
  },
  inputView: {
    fontSize: 16,
    fontFamily: fonts.LatoRegular,
    color: 'black',
    height: 90,
    lineHeight: 18,
    textAlignVertical: 'top',
  },
  charLeftText: {
    paddingTop: 3,
    paddingHorizontal: 20,
    color: 'gray',
  },
});
export default styles;
