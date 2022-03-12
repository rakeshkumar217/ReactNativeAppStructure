import React, {Component} from 'react';
import {TextInput,Image, Text, View, TouchableWithoutFeedback} from 'react-native';
import styles from './style';

export default class CSUploadField extends Component {
  render() {
    const {title, placeholder, value, onPress, required} = this.props;
    return (
      <TouchableWithoutFeedback onPress={onPress} >
       <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
        <View style={styles.container} pointerEvents="box-only">
          <View>
            {required ? <Text style={styles.requiredStar}>{'*'}</Text> : null}
            <Text style={styles.textLabel}>{title}</Text>
          </View>
          <TextInput
            style={styles.inputView}
            placeholder={placeholder}
            value={value}
            editable={false}
          />
        </View>
        <Image style={{height:30, width:30, marginRight:20,}} source={require('../../../assets/images/upload/upload_img_ic.png')}                            />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
