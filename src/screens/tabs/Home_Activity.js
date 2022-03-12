
import React, { Component } from 'react';
import { View, Platform, Alert } from 'react-native';
import AddIcon from '../../common/components/AddIcon';
import NotificationView from './NotificationView';
import styles from './style';
import {  getNotifications} from '../../redux/dashboard/actions';
import { connect } from 'react-redux';
import { keyDocumentsFilePath, writeFileAtPath } from '../../utils';

class Home_Activity extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Notifications',
    });

    componentDidMount() {
        const { navigation } = this.props;
        navigation.setParams({ callback: this.handleDocumentAdded });

        this.getNotificationsApi();
    }

    getNotificationsApi = () => {
        const { userInfo, getNotifications } = this.props;
        if (userInfo && userInfo.UID) {
            getNotifications({
                UserID: userInfo.UID,
            }, userInfo.SID, () => {
            });
        }
    };

    handleDocumentAdded = () => {
        this.getKeyDocuments();
    };

    onItemSelect = document => {
        const { navigation } = this.props;
        //navigation.navigate('AddKeyDocument', {document});
    };

    navigateToDocumentPreview = (filePath, type) => {
        const { navigation } = this.props;
        navigation.navigate('DocumentPreview', {
            info: { filePath, type },
        });
    };

    handleDocumentDownloadResponse = (filePath, data) => {
        if (Platform.OS === 'ios') {
            this.navigateToDocumentPreview(filePath, data.FileFormat);
        } else {
            Alert.alert(
                'Success!',
                'Your document has been downloaded. Do you want to preview?',
                [
                    { text: 'No' },
                    {
                        text: 'Yes',
                        onPress: () =>
                            this.navigateToDocumentPreview(filePath, data.FileFormat),
                    },
                ],
            );
        }
    };

    handleDownloadDocument = document => {
        // Here we can check for existing downloaded document
        this.props.downloadDocument({ DocumentID: document.DocID }, (data, error) => {
            if (data) {
                const fileName = `${document.DocID}.${data.FileFormat}`;
                const filePath = keyDocumentsFilePath(fileName);
                writeFileAtPath(filePath, data.FilePath).then(() => {
                    this.handleDocumentDownloadResponse(filePath, data);
                });
            } else {
                alert(error);
            }
        });
    };

    render() {
        const { notificationsList } = this.props;
        return (
            <View style={styles.container}>
                <NotificationView
                    data={notificationsList}
                    onItemSelect={this.onItemSelect}
                    handleDownloadDocument={this.handleDownloadDocument}
                />
            </View>
        );
    }
}


const mapStateToProps = state => ({
    userInfo: state.auth.user,
    //notificationsList: state.dashboard.notificationsList || [],
});

const mapDispatchToProps = {
    getNotifications: getNotifications,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home_Activity);
