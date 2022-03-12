import {StyleSheet} from 'react-native';
import {fonts} from '../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.LatoRegular,
    color: 'black',
    marginTop: 12,
    marginBottom: 5,
    alignSelf: 'center'
  },

  itemSeparator: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'gray',
  },
});
export default styles;
