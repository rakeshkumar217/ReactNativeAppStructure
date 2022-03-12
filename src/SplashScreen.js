//Splash screen
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { StatusBar, ImageBackground, View} from 'react-native';


class SplashScreen extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     newsHeadline: [],
    //     onLoading: true,
    // };
  }

  componentDidMount() {
    //
    if (Platform.OS === 'ios') {
      this.goToNextScreen();
    } else {
      setTimeout(() => {
        this.goToNextScreen();
      }, 1000);
    }
  }

  goToNextScreen() {
    //Fname, Lname, OfficeId, SID, UID, UType
    const {Auth} = this.props;
    if (
      Auth != null &&
      Auth.user != null &&
      Auth.user.UID != null &&
      Auth.user.UID.length > 0
    ) {

      this.props.navigation.navigate('Home');

    } else {
      this.props.navigation.navigate('LoginScreen');
    }
  }
  // Render any loading content that you like here
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#2696d6" barStyle="light-content" />
        <ImageBackground
          source={require('./assets/images/splash/splash_screen.png')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isOnline: state.common.isOnline,
    Auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //submitLoginDetail: bindActionCreators(submitLoginDetail, dispatch),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashScreen);
//export default SplashScreen;
