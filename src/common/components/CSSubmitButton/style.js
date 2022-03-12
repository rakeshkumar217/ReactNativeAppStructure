import {StyleSheet} from 'react-native';
import {fonts} from '../../../utils';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignSelf: 'center',
    height: 50,
    backgroundColor: 'rgb(37,199,27)',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  titleText: {
    fontFamily: fonts.LatoBold,
    fontSize: 18,
    color: 'white',
  },
});
export default styles;
