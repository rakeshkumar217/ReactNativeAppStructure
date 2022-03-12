import React, { Component } from 'react';
import { TouchableWithoutFeedback, Text, View, Image } from 'react-native';
import styles from './style';

export default class SMSLogItem extends Component {
  render() {
    const { title, description, date } = this.props;
    return (
      <TouchableWithoutFeedback>
        <View style={styles.rowContainer}>
          <View style={styles.rowContentView}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}> {title} </Text>
              <Text style={styles.date}> {date} </Text>
            </View>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
