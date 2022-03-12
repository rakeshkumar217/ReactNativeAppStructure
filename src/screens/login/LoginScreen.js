import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Text, Image, ImageBackground, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, NativeModules
} from 'react-native';
import styles from './style';
import DeviceInfo from 'react-native-device-info';

// redux action
import { submitLoginDetail, submitCanotLogin } from "../../redux/auth/actions";

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      aggencyId: '',
      username: '',
      password: '',
      error: null,
      deviceId: '',
      isOn: false
    };

    this.state.deviceId = DeviceInfo.getUniqueId();
  }



  isValid() {
    const { aggencyId, username, password, deviceId } = this.state;
    let valid = false;

    if (aggencyId.length > 0 && username.length > 0 && password.length > 0) {
      valid = true;
    }

    // if (aggencyId.length === 0 && username.length === 0 && password.length === 0) {
    //   alert("Please enter AgencyId, Username and Password.");
    // } else if (username.length === 0 && password.length === 0) {
    //   alert("Please enter Username and Password.");
    // } else
    if (aggencyId.length === 0) {
      alert('Please enter AgencyId.');
    } else if (username.length === 0) {
      alert('Please enter Username.');
    } else if (password.length === 0) {
      alert('Please enter Password.');
    }

    return valid;
  }

  onSignIn() {

    const { aggencyId, username, password, deviceId } = this.state;
    console.log('Message' + username);

    //,
    //     "debug": "open 'rndebugger://set-debugger-loc?host=localhost&port=19001'"

    if (this.isValid()) {
      //debugger;
      const { submitLoginDetail, fcmToken, isOnline } = this.props;
      //const isOnli = this.props;

      if (!isOnline) {
        alert('No Internet Connection.');
        return;
      }
      this.props.navigation.navigate("Home");
      //const {submitLoginDetail}=this.props;
      /*submitLoginDetail(
        { DomainURL: aggencyId, uname: username, Pwd: password, MType: "Android", NotificationType: "FCM", DeviceID: deviceId },
        (success, error) => {
          //debugger;
          if (success) {
            //alert("Success: "+success);
            this.props.navigation.navigate("Home");
          } else {
            setTimeout(() => {
              alert(error);
            }, 750);
          }
        }
      );*/
    } else {
      const { error } = this.state;
      if (error != null) {
        //alert(""+error);
      }
      //
    }
  }

  isValidUsername() {
    const { aggencyId, username, password } = this.state;
    let valid = false;

    if (aggencyId.length > 0 && username.length > 0) {
      valid = true;
    }

    // if (aggencyId.length === 0 && username.length === 0) {
    //   alert("Please enter AgencyId and Username.");
    // } else
    if (aggencyId.length === 0) {
      alert('Please enter AgencyId.');
    } else if (username.length === 0) {
      alert('Please enter Username.');
    }
    return valid;
  }

  onForgotPass() {

    const { aggencyId, username } = this.state;
    if (this.isValidUsername()) {
      //debugger;
      const {submitCanotLogin} = this.props;
      submitCanotLogin(
        {AgencyId: aggencyId, Username: username},
        (success, error) => {
          //debugger;
          if (success) {
            //alert(success);
            this.props.navigation.navigate('Home', {
              question: error.Question,
              requestId: error.RequestId,
            });
            // this.props.navigation.navigate("DealerOTPVerify", {
            //   phoneNumber,
            //   dealerCode
            // });
          } else {
            setTimeout(() => {
              alert('' + error);
            }, 1250);
          }
        }
      );
      //alert('Great: ${password}');
    } else {
      const { error } = this.state;
      //alert(error);
    }
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const {data} = this.props;

    //c6e34ce1-f8f3-40c9-9b0f-edf8c3f36aba--sid
    //d1815a07-b8d4-4d56-b086-0113c8fab286--userid
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#2696d6" />
        <ScrollView style={styles.scrollView} keyboardShouldPersistTaps='always'>
          <ImageBackground style={styles.topView} >
            <View style={{ paddingTop: 50, paddingLeft: 8, alignSelf: 'flex-start' }}>
              <Image
                style={{ width: 40, height: 40 }}
                 />
              <Text style={styles.textLarge}>Zoom Login</Text>
              <Text style={styles.text}>Please enter your meeting id, username & password to continue</Text>
            </View>
          </ImageBackground>
          <Text style={{height:5}}>  </Text>
          {/* Agency Id input */}
          <Text style={styles.textLabel}>Meeting ID</Text>
          <TextInput placeholder="Meeting ID" style={styles.inputView} keyboardType="number-pad"
            returnKeyType={"next"} onChangeText={(aggencyId) => this.setState({ aggencyId })}
            onSubmitEditing={() => { this.Username.focus(); }} blurOnSubmit={false} />
          <View style={{ backgroundColor: 'grey', marginTop: 10, height: 1 }} />

          {/* User Name input */}
          <Text style={styles.textLabel}>Your Name</Text>
          <TextInput placeholder="Username" style={styles.inputView} ref={(input) => { this.Username = input; }}
            returnKeyType={"next"} onChangeText={(username) => this.setState({ username })}
            onSubmitEditing={() => { this.Password.focus(); }} blurOnSubmit={false} />
          <View style={{ backgroundColor: 'grey', marginTop: 10, height: 1 }} />

          {/* Password Id input */}
          <Text style={styles.textLabel}>Password</Text>
          <TextInput placeholder="Password" style={[styles.inputView]} secureTextEntry={true}
            ref={(input) => { this.Password = input; }} returnKeyType={"done"}
            onChangeText={(password) => this.setState({ password })} />

          {/* Login Button */}
          {<TouchableOpacity style={[styles.button]} onPress={this.onSignIn.bind(this)}>
            <Text style={[styles.buttonText]}>Join</Text>
          </TouchableOpacity>}

          {/* clickable text */}
          {<TouchableOpacity onPress={this.onForgotPass.bind(this)} >
            <Text style={[styles.forgotText]}>Start Meeting? Click here</Text>
          </TouchableOpacity>}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  //debugger;
  return {
    isOnline: state.common.isOnline
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitLoginDetail: bindActionCreators(submitLoginDetail, dispatch),
    submitCanotLogin: bindActionCreators(submitCanotLogin, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
