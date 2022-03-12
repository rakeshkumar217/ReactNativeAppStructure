import React, {Component} from 'react';
import {TextInput, Text, View} from 'react-native';
import styles from './style';

export default class CSInputView extends Component {
  render() {
    const {
      title,
      maxLength,
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
      <>
        <View style={styles.container}>
          <View>
            {required ? <Text style={styles.requiredStar}>{'*'}</Text> : null}
            <Text style={styles.textLabel}>{title}</Text>
          </View>
          <TextInput
            multiline
            maxLength={maxLength}
            style={styles.inputView}
            placeholder={placeholder}
            value={value}
            editable={editable}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            blurOnSubmit={false}
          />
        </View>
        {editable && maxLength ? (
          <Text style={styles.charLeftText}>{`${maxLength -
            value.length} characters left`}</Text>
        ) : null}
      </>
    );
  }
}
