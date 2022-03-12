import {StyleSheet, Platform} from 'react-native';
import {fonts} from '../../../utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgb(216,216,217)',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    paddingLeft: 10,
  },
  searchIcon: {
    marginVertical: 5,
    marginRight: 5,
    paddingTop: Platform.OS === 'android' ? 0 : 3,
    fontSize: 20,
    color: 'gray',
  },
  textInput: {
    flex: 1,
    fontFamily: fonts.LatoRegular,
    fontSize: 16,
    paddingVertical: 4,
  },
  cancelButtonContainer: {
    paddingLeft: 10,
  },
  cancelButtonText: {
    fontFamily: fonts.LatoRegular,
    fontSize: 16,
  },
});
export default styles;
