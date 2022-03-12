import {StyleSheet} from 'react-native';
import {fonts} from '../../../utils';

const styles = StyleSheet.create({
  rowContainer: {
    paddingHorizontal: 15,
  },
  rowContentView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    backgroundColor: 'white',
  },
  leftIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.LatoBold,
    fontSize: 18,
    color: '#000000',
    marginBottom: 3,
  },
  description: {
    fontFamily: fonts.LatoLight,
    fontSize: 16,
  },
  rightIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});
export default styles;
