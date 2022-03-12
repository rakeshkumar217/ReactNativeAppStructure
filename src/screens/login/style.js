import { StyleSheet } from "react-native";
import { fonts, colors } from "../../utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
      },
      scrollView: {
        backgroundColor: '#e6e5eb',
        marginHorizontal: 0,
      },
      topView: {
        backgroundColor: 'blue',
        marginHorizontal: 0,
        height : 210
      },
      inputView: {
        fontSize: 16,
        color: 'black',
        marginHorizontal: 10,
          paddingLeft:5,
        paddingTop: 5,
      },
      textLarge: {
        fontSize: 18,
        fontFamily: fonts.LatoBold,
        color: 'white',
        marginHorizontal: 5,
        paddingTop: 5
      },
      text: {
        fontSize: 16,
          fontFamily: fonts.LatoRegular,
        color: 'white',
        marginHorizontal: 5,
        paddingTop: 5
      },
       textLabel: {
        fontSize: 14,
           fontFamily: fonts.LatoRegular,
        color: 'black',
        marginHorizontal: 15,
        paddingTop: 10
      },
       buttonText: {
        fontSize: 16,
           fontFamily: fonts.LatoRegular,
        color: 'white',
        marginHorizontal: 5, 
        alignSelf:'center'
      },
      forgotText: {
        fontSize: 14,
        fontFamily: fonts.LatoRegular,
        color: 'black',
        marginHorizontal: 5, 
        marginTop: 15,
        alignSelf:'center'
      },
      button: {
            display: 'flex',
            height: 45,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginHorizontal: 15, 
            backgroundColor: '#2696d6',
            shadowColor: '#2696d6',
            shadowOpacity: 0.4,
            shadowOffset: { height: 10, width: 0 },
            shadowRadius: 20,
        },
        sectionHeading: {
            color: '#5188E3',
            fontSize: 17,
            fontFamily: fonts.LatoRegular,
            paddingHorizontal: 15,
            paddingVertical: 10
        },
        labelText: {
                fontFamily: fonts.LatoBold,
                fontSize: 19,
                color: '#000000'
        }

});

export default styles;