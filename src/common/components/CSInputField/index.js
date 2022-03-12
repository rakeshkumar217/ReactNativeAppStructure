import React, {Component} from 'react';
import {TextInput, Text, View} from 'react-native';
import styles from './style';

export default class CSInputField extends Component {
  render() {
    const {
      title,
      placeholder,
      value,
      keyboardType,
      returnKeyType,
      editable,
      onChangeText,
      onSubmitEditing,
      required,
    } = this.props;
    return (
      <View style={styles.container}>
        <View>
          {required ? <Text style={styles.requiredStar}>{'*'}</Text> : null}
          <Text style={styles.textLabel}>{title}</Text>
        </View>
        <TextInput
          style={styles.inputView}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          editable={editable}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}         
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={false}
        />
      </View>
    );
  }
}
