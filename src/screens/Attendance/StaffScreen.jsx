import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {commonStyle} from '../../style/commonStyle';
import {StaffScreenConstant} from '../../utils/constant';
import HorizontalCard from '../../components/HorizontalCard';
import Button from '../../components/Button';
import ModalComponent from '../../components/ModalComponent';
import {fontStyle} from '../../style/fontStyle';
import colors from '../../utils/colors';

const StaffScreen = () => {
  const [staffDetails, setStaffDetails] = useState(
    StaffScreenConstant.staffDetails,
  );
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
    <SafeAreaView style={commonStyle.backgroundStyle}>
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
      <View style={styles.totalBalanceContainer}>
        <View style={styles.balanceAmountContainer}>
          <Text style={[fontStyle.h10, styles.totalBalanceTitle]}>
            {StaffScreenConstant.totalBalance}
          </Text>
          <Text style={[fontStyle.h10, styles.balanceAmountStyle]}>
            (-) ₹ 1500
          </Text>
        </View>
        <View style={styles.balanceButtonContainer}>
          <Button
            title={StaffScreenConstant.paymentLog}
            variant="filled"
            containerStyle={styles.balanceButtonStyle}
            // buttonClick={() => setAddStaffModal(true)}
          />
          <Button
            title={StaffScreenConstant.makePayment}
            variant="filled"
            containerStyle={styles.balanceButtonStyle}
            // buttonClick={() => setAddStaffModal(true)}
          />
        </View>
      </View>

      <View style={styles.staffDetailsHeader}>
        <Text style={[commonStyle.titleStyle]}>
          {StaffScreenConstant.title}
        </Text>
        <Button
          title={StaffScreenConstant.addStaff}
          variant="filled"
          containerStyle={styles.addStaffButton}
          buttonClick={() => setAddStaffModal(true)}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
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
    </SafeAreaView>
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
  totalBalanceContainer: {
    borderColor: colors.gray500,
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginTop: 8,
  },
  balanceAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    alignItems: 'center',
  },
  totalBalanceTitle: {color: colors.gray1000},
  balanceAmountStyle: {color: 'red'},
  balanceButtonContainer: {flexDirection: 'row'},
  balanceButtonStyle: {marginVertical: 8, flex: 1},
  staffDetailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addStaffButton: {marginVertical: 8, flex: 0.5},
});
