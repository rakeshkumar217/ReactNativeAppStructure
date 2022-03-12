import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NetInfo from '@react-native-community/netinfo';
import AppNavigations from './Navigation';
import {networkReachability} from '../redux/common/actions';


class AppNavigator extends React.Component {

    componentDidMount() {

        NetInfo.fetch().then(state => {
            this.props.networkReachability(state.isConnected);
        });

        // Subscribe
        this.unsubscribe = NetInfo.addEventListener(state => {
            this.props.networkReachability(state.isConnected);
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <AppNavigations
                ref={nav => {
                    this.navigator = nav;
                }}
            />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //saveFcmToken: bindActionCreators(saveFcmToken, dispatch),
        networkReachability: bindActionCreators(networkReachability, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(AppNavigator);
