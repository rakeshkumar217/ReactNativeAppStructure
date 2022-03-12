/**
 * Common Styles For All Components
 */
import { fonts } from "../utils";

export default (commonStyles = {
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: "#999999"
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
