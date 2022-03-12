import React, {Component} from 'react';
import {TextInput, View, TouchableOpacity, Text, Keyboard} from 'react-native';
import styles from './style';
// import {Icon} from 'native-base';

export default class SearchBar extends Component {
  state = {
    focused: false,
  };

  onFocus = () => {
    this.setState({focused: true});
    const {onFocus} = this.props;
    if (onFocus) {
      onFocus();
    }
  };

  onCancel = () => {
    this.setState({focused: false});
    const {onCancel} = this.props;
    Keyboard.dismiss();
    if (onCancel) {
      onCancel();
    }
  };

  render() {
    const {focused} = this.state;
    const {searchText, onSearchTextChanged, placeholder} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          {/* <Icon style={styles.searchIcon} name="ios-search" /> */}
          <TextInput
            ref={ref => (this.searchBarRef = ref)}
            style={styles.textInput}
            placeholder={placeholder || 'Search'}
            value={searchText}
            clearButtonMode="while-editing"
            onFocus={() => this.onFocus()}
            onChangeText={onSearchTextChanged}
          />
        </View>
        {focused && (
          <TouchableOpacity
            style={styles.cancelButtonContainer}
            onPress={() => this.onCancel()}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
