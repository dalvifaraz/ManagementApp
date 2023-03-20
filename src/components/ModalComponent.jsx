import {
  // Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {fontStyle} from '../style/fontStyle';
import Button from './Button';
import colors from '../utils/colors';

export default ModalComponent = ({
  visible,
  setVisible,
  body,
  animation,
  modalTitle,
  buttonTitle,
  bodyContainerStyle,
  buttonContainerStyle,
  modalContainerStyle,
  headerContainerStyle,
  headerStyle,
}) => {
  return (
    <Modal
      visible={visible}
      animationType={animation || 'slide'}
      onRequestClose={() => setVisible(false)}>
      <SafeAreaView style={[styles.modalContainer, modalContainerStyle]}>
        <View style={[styles.header, headerContainerStyle]}>
          <Text style={[fontStyle.h3, styles.title, headerStyle]}>
            {modalTitle}
          </Text>
        </View>
        <View style={bodyContainerStyle}>{body}</View>
        <View style={[styles.buttonContainer, buttonContainerStyle]}>
          <Button title={buttonTitle} buttonClick={() => setVisible(false)} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {},
  title: {
    color: colors.gray1000,
    textAlign: 'center',
  },
  buttonContainer: {flex: 1, justifyContent: 'flex-end'},
  modalContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
});
