//common style

import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../assests/colors';
import {fonts} from 'util';

const window = Dimensions.get('window');

module.exports = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    toolbar: {
        width: window.width,
        height: 56,
        justifyContent: 'center',
        backgroundColor: colors.primary,

    },
    toolbarTitle: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loadingView: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
    },
    loadingViewChild: {
        backgroundColor: 'white',
        height: 110,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 5,
    },
    loadingTextStyle: {
        fontSize: 16,
        color: '#444444',
        marginTop: 16,
        fontWeight: 'bold',
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: "#999999"
    },
    inputLabel: {
        fontFamily: fonts.LatoRegular,
        color: "#FFFFFF",
        fontSize: 17
    },
    inputText: {
        borderColor: "#FFFFFF",
        borderBottomWidth: 1,
        margin: 5,
        fontSize: 27,
        fontFamily: fonts.LatoRegular,
        color: "#FFFFFF",
        minWidth: 20,
        minHeight: 52
    }
});
















//end