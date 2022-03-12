import React, { Component } from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import styles from './style';

export default class CSInputSteeper extends Component {

  render() {
    const {
      title,
      placeholder,
      returnKeyType,
      value,
      keyboardType,
      editable,
      onChangeText,
      minusPress,
      plusPress,
      selection,
      required,
    } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonLeft} onPress={() => minusPress(selection)} >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TextInput style={styles.buttonCenter}
          value={value}
          editable={editable}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
        />

        <TouchableOpacity style={styles.buttonRight} onPress={() => plusPress(selection)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        {/* <View>
          {required ? <Text style={styles.requiredStar}>{'*'}</Text> : null}
          <Text style={styles.textLabel}>{title}</Text>
        </View>
        <TextInput
          style={styles.inputView}
          placeholder={placeholder}
          value={value}
          editable={editable}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={false}
        /> */}
      </View>
    );
  }
}
