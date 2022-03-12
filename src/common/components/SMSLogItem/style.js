import { StyleSheet } from 'react-native';
import { fonts } from '../../../utils';

const styles = StyleSheet.create({
  rowContainer: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
  rowContentView: {
    flexDirection: 'column',
    /*alignItems: 'center',*/
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    backgroundColor: 'white',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 3
  },
  title: {
    fontFamily: fonts.LatoBold,
    fontSize: 18,
    marginBottom: 3,
  },
  description: {
    fontFamily: fonts.LatoLight,
    fontSize: 16,
    paddingLeft: 4
  },
  date: {
    fontFamily: fonts.LatoLight,
    fontSize: 16
  }
});
export default styles;
