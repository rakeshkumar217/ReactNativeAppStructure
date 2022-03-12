import React, { Component } from 'react';
import { TextInput, Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import styles from './style';

export default class CSSelectionField extends Component {
  render() {
    const { title, placeholder,  value, onPress, required, disabled, icon, iconStyle, colorStyle } = this.props;
    return (
      <TouchableWithoutFeedback onPress={disabled ? undefined : onPress}>
        <View style={[styles.container, colorStyle]} pointerEvents="box-only">
          <View style = {[colorStyle]}>
            <View>
              {required ? <Text style={styles.requiredStar}>{'*'}</Text> : null}
              <Text style={styles.textLabel}>{title}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <TextInput
                style={styles.inputView}
                placeholder={placeholder}
                value={value}
                editable={false}
              />
              {icon &&
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    source={icon}
                    style={[{ width: 25, height: 25,  }, iconStyle]}
                    resizeMode="contain"
                  />
                </View>
              }
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
