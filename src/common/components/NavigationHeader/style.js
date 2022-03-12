import { StyleSheet } from 'react-native';
import {fonts} from '../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.LatoRegular,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginLeft: 30

  },
});
export default styles;
