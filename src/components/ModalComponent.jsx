import {
  Image,
  // Button,
  Modal,
  Pressable,
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
  buttonDisable,
  handleButtonPress,
}) => {
  return (
    <Modal
      visible={visible}
      animationType={animation || 'slide'}
      onRequestClose={() => setVisible(false)}>
      <SafeAreaView style={[styles.modalContainer, modalContainerStyle]}>
        <View style={[styles.header, headerContainerStyle]}>
          <Pressable onPress={() => setVisible(false)}>
            <Image
              source={require('../images/backicon.png')}
              alt="backicon"
              style={{height: 24, width: 24}}
            />
          </Pressable>
          <Text style={[fontStyle.h1, styles.title, headerStyle]}>
            {modalTitle}
          </Text>
        </View>
        <View style={bodyContainerStyle}>{body}</View>
        <View style={[styles.buttonContainer, buttonContainerStyle]}>
          <Button
            title={buttonTitle}
            disable={buttonDisable}
            buttonClick={handleButtonPress}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.gray1000,
    marginLeft: 115,
  },
  buttonContainer: {flex: 1, justifyContent: 'flex-end'},
  modalContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
});
