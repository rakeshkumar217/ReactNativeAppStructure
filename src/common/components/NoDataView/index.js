import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';

class NoDataView extends Component {
  render() {
    const {isLoading, message, isOnline} = this.props;

    let newMessage = "";
    if(message){
      newMessage = message;
    }else{
      if(isOnline){
        newMessage = 'No Records Found';
      }else{
        newMessage = 'No Internet Connection';
      }
    }
    return (
      <View>
        {isLoading ? null : (
          <Text numberOfLines={0} style={styles.messageText}>
            {newMessage || 'No Records Found'}
          </Text>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.common.loading,
  isOnline: state.common.isOnline,
});

export default connect(mapStateToProps)(NoDataView);
