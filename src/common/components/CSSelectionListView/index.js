import React, {Component} from 'react';
import {Text, View, FlatList, TouchableWithoutFeedback} from 'react-native';
import SearchBar from '../SearchBar';
import styles from './style';

export default class CSSelectionListView extends Component {
  renderItem = item => {
    const {getTitle, onItemSelect} = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => onItemSelect(item)}>
        <View style={styles.rowContainer}>
          <Text style={styles.title}>{getTitle(item)}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    const {searchText, data, keyExtractor, onSearchTextChanged, title, titleValue} = this.props;
    return (
      <View style={styles.container}>
        {title ? 
            <View style={{ height: 50, backgroundColor: '#e6e5eb'}}>
              <Text style={styles.title}>{titleValue}</Text>
            </View>:
            <SearchBar
            searchText={searchText}
            onSearchTextChanged={onSearchTextChanged}
          />
        }       
        <FlatList
          style={styles.container}
          data={data}
          renderItem={({item}) => this.renderItem(item)}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          keyExtractor={keyExtractor}
        />
      </View>
    );
  }
}
