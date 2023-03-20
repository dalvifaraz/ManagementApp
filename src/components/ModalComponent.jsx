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
}) => {
  return (
    <Modal
      visible={visible}
      animationType={animation || 'slide'}
      onRequestClose={() => setVisible(false)}>
      <SafeAreaView
        style={{
          flex: 1,
          marginHorizontal: 16,
        }}>
        <View style={styles.header}>
          <Text style={[fontStyle.h3, styles.title]}>{modalTitle}</Text>
        </View>
        <View style={{borderColor: 'red', borderWidth: 1}}>{body}</View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <Button
            title={buttonTitle}
            containerStyle={{marginBottom: 0}}
            buttonClick={() => setVisible(false)}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    borderColor: 'red',
    borderWidth: 1,
  },
  title: {
    color: colors.gray1000,
    textAlign: 'center',
  },
});
