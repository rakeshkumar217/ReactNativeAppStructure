import React from "react";
import { View, TouchableOpacity } from "react-native";
import colors from "../../../utils/colors";

function RadioButton({ style, renderLabel, containerStyle, selected, onRadioPress }) {
    return (
        <TouchableOpacity style={containerStyle} 
            onPress={onRadioPress}>
            <View style={[{
                height: 24,
                width: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: '#000',
                alignItems: 'center',
                justifyContent: 'center',
            }, style]}>
                {
                    selected ?
                        <View style={{
                            height: 18,
                            width: 18,
                            borderRadius: 9,
                            backgroundColor: colors.appColor,
                        }} />
                        : null
                }
            </View>
            {renderLabel()}
        </TouchableOpacity>
    );
}

export default RadioButton;