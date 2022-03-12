import React, { Component } from 'react';
import { SafeAreaView, FlatList, Text, View } from 'react-native';
import DocumentItem from '../../common/components/DocumentItem';
import styles from './style';
import NoDataView from '../../common/components/NoDataView';

export default class NotificationView extends Component {
  // @SerializedName("SrNumber")
  // @Expose
  // private Integer srNumber;
  // @SerializedName("AlertString")
  // @Expose
  // private String alertString;
  // @SerializedName("AlertType")
  // @Expose
  // private String alertType;
  // @SerializedName("TotalPages")
  // @Expose
  // private Integer totalPages;
  // @SerializedName("TotalCount")
  // @Expose
  // private Integer totalCount;

  //leftIcon={require('../../assets/images/documentIcon/documentIcon.png')}   

  renderItem = item => {
    const { onItemSelect, handleDownloadDocument } = this.props;
    // debugger;
    return (
      <DocumentItem

        title={item.AlertType}
        description={`${item.AlertString}`}
        onPress={() => onItemSelect(item)}
        onPressRightIcon={() => handleDownloadDocument(item)}
      />
    );
  };
  render() {
    const { data } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          data={data}
          renderItem={({ item }) => this.renderItem(item)}
          ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
          ListEmptyComponent={() => <NoDataView />}
          keyExtractor={({ id }) => id}
        />
      </SafeAreaView>
    );
  }
}
