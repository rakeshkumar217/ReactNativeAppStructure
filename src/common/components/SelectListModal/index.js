import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from "react-native";

import { fonts } from "../../../utils";
import colors from "../../../utils/colors";

const SelectListModal = ({ isVisible, onRequestClose, title, items, onSelectItem }) => (
    <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onRequestClose}
    >
        <TouchableWithoutFeedback onPress={onRequestClose}>
            <View style={{ justifyContent: 'center', flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' }}>
                <View style={{ backgroundColor: '#fff', marginHorizontal: 30, borderRadius: 8 }}>
                    <View style={{ padding: 15, marginBottom: 5, borderBottomColor: '#ddd', borderBottomWidth: 1, backgroundColor: colors.appColor }}>
                        <Text style={styles.modalHeading}>{title}</Text>
                    </View>
                    <ScrollView style={{ maxHeight: 400, minHeight: 100 }}>
                        {(items && items.length > 0) &&
                            items.map((menu, key) => (
                                <TouchableOpacity onPress={() => onSelectItem(menu)} key={key} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
                                    <Text style={styles.menuItem}>{menu.label}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                    <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center', borderTopColor: '#ddd', borderTopWidth: 1 }}>
                        <TouchableOpacity onPress={onRequestClose} style={{ backgroundColor: colors.appColor, padding: 10 }}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </Modal>
);

const styles = StyleSheet.create({
    modalHeading: {
        fontSize: 19,
        fontFamily: fonts.LatoRegular,
        textAlign: 'center',
        color: '#fff',
    },
    menuItem: {
        fontSize: 17,
        fontFamily: fonts.LatoRegular,
        textAlign: 'center',
        color: '#000',
    },
    buttonText: {
        fontSize: 17,
        fontFamily: fonts.LatoRegular,
        textAlign: 'center',
        color: '#fff',
    }
})

export default SelectListModal;