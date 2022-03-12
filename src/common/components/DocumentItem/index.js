import React, {Component} from 'react';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';
import styles from './style';

export default class DocumentItem extends Component {
  render() {
    const {
      leftIcon,
      title,
      description,
      rightIcon,
      onPress,
      onPressRightIcon,
    } = this.props;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.rowContainer}>
          <View style={styles.rowContentView}>
            {leftIcon ? (
              <Image style={styles.leftIcon} source={leftIcon} />
            ) : null}
            <View style={styles.infoContainer}>
              <Text style={styles.title}> {title} </Text>
              <Text style={styles.description}>{description}</Text>
            </View>
            {rightIcon ? (
              <TouchableOpacity onPress={onPressRightIcon}>
                <Image style={styles.rightIcon} source={rightIcon} />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
