import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';

export default class AddIcon extends Component {
  render() {
    const {onPress} = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{'+'}</Text>
      </TouchableOpacity>
    );
  }
}
