import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {commonStyle} from '../../style/commonStyle';
import {StaffScreenConstant} from '../../utils/constant';
import HorizontalCard from '../../components/HorizontalCard';
import Button from '../../components/Button';
import ModalComponent from '../../components/ModalComponent';
import {fontStyle} from '../../style/fontStyle';
import colors from '../../utils/colors';

const StaffScreen = () => {
  const [staffDetails, setStaffDetails] = useState([]);
  const [addStaffModal, setAddStaffModal] = useState(false);
  const [staffName, setStaffName] = React.useState('');
  const [staffPhoneNumber, setStaffPhoneNumber] = React.useState('');

  const customAmountColor = amt => {
    if (amt > 0) {
      return {
        color: 'green',
      };
    }
    return {
      color: 'red',
    };
  };
  useEffect(() => {
    setStaffDetails(StaffScreenConstant.staffDetails);
  }, []);
  const handleModalButtonDisable = () => {
    if (staffName.length && staffPhoneNumber.length) {
      return false;
    }
    return true;
  };
  const handleModalButtonPress = () => {
    setStaffName('');
    setStaffPhoneNumber('');
    setAddStaffModal(false);
  };
  return (
    <ScrollView style={commonStyle.backgroundStyle}>
      <ModalComponent
        visible={addStaffModal}
        setVisible={setAddStaffModal}
        modalTitle={StaffScreenConstant.addStaff}
        buttonTitle={StaffScreenConstant.continue}
        buttonDisable={handleModalButtonDisable()}
        handleButtonPress={() => handleModalButtonPress()}
        bodyContainerStyle={styles.modalBodyContainer}
        body={
          <>
            <View>
              <Text style={[fontStyle.h2, styles.label]}>
                {StaffScreenConstant.nameLabel}
              </Text>
              <TextInput
                onChangeText={setStaffName}
                value={staffName}
                placeholder={StaffScreenConstant.namePlaceHolder}
                keyboardType="default"
                style={[fontStyle.h2, styles.inputBox]}
              />
            </View>
            <View style={styles.contactNumberContainer}>
              <Text style={[fontStyle.h2, styles.label]}>
                {StaffScreenConstant.contactNumberLabel}
              </Text>
              <TextInput
                onChangeText={setStaffPhoneNumber}
                value={staffPhoneNumber}
                placeholder={StaffScreenConstant.contactPlaceHolder}
                keyboardType="numeric"
                style={[fontStyle.h2, styles.inputBox]}
              />
            </View>
          </>
        }
      />
      <Button
        title={StaffScreenConstant.addStaff}
        variant="filled"
        containerStyle={{marginVertical: 8}}
        buttonClick={() => setAddStaffModal(true)}
      />
      <Text style={[commonStyle.titleStyle]}>{StaffScreenConstant.title}</Text>
      <FlatList
        data={staffDetails}
        renderItem={({item}) => (
          <HorizontalCard
            leftTitle={`${StaffScreenConstant.staffName} ${item.name}`}
            leftSubTitle={StaffScreenConstant.status}
            rightTitle={StaffScreenConstant.total}
            rightSubContainerTitle={
              item.advance > 0 ? item.advance : item.balance
            }
            rightSubContainerTitleStyle={customAmountColor(item.advance)}
            rightSubContainerSubTitle={
              item.advance > 0
                ? StaffScreenConstant.advance
                : StaffScreenConstant.balance
            }
            rightSubContainerSubTitleStyle={customAmountColor(item.advance)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};

export default StaffScreen;

const styles = StyleSheet.create({
  inputBox: {
    borderColor: colors.gray500,
    borderWidth: 1,
    marginVertical: 4,
    borderRadius: 8,
    padding: 4,
    color: colors.gray1000,
  },
  label: {
    color: colors.gray500,
    marginVertical: 4,
  },
  modalBodyContainer: {
    marginTop: 16,
  },
  contactNumberContainer: {
    marginTop: 16,
  },
});
