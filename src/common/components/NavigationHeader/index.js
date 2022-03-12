import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './style';

export default class NavigationHeader extends Component {
  render() {
    const { text } = this.props;
    return (
      <View style={styles.container} >
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}
