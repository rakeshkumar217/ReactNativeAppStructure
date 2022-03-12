import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './style';

export default class BackIcon extends Component {
  render() {
    const { onPress } = this.props;
    return ( 
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image style={styles.image}
          source={require('../../../assets/images/backarrow/arrow_left.png')}
        />
      </TouchableOpacity>
    );
  }
}
