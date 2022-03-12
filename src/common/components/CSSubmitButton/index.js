import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';

export default class CSSubmitButton extends Component {
  render() {
    const {containerStyle, title, onPress} = this.props;
    return (
      <TouchableOpacity
        style={[styles.container, containerStyle]}
        onPress={onPress}>
        <Text style={styles.titleText}> {title || 'SUBMIT'} </Text>
      </TouchableOpacity> 
    );
  }
}
