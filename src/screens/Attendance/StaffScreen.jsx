import {
  FlatList,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {commonStyle} from '../../style/commonStyle';
import {AttendanceScreen, StaffScreenConstant} from '../../utils/constant';
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
      console.log('HELLO1');
      return false;
    }
    console.log('HELLO2');
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
        modalTitle="Add Staff"
        buttonTitle="Continue"
        buttonDisable={handleModalButtonDisable()}
        handleButtonPress={() => handleModalButtonPress()}
        bodyContainerStyle={{marginTop: 16}}
        body={
          <>
            <View>
              <Text
                style={[
                  fontStyle.h2,
                  {color: colors.gray500, marginVertical: 4},
                ]}>
                Enter Staff Name:
              </Text>
              <TextInput
                onChangeText={setStaffName}
                value={staffName}
                placeholder="Enter Full Name"
                keyboardType="default"
                style={[
                  fontStyle.h2,
                  {
                    borderColor: colors.gray500,
                    borderWidth: 1,
                    marginVertical: 4,
                    borderRadius: 8,
                    padding: 4,
                    color: colors.gray1000,
                  },
                ]}
              />
            </View>
            <View style={{marginTop: 16}}>
              <Text
                style={[
                  fontStyle.h2,
                  {color: colors.gray500, marginVertical: 4},
                ]}>
                Enter Staff Contact Number:
              </Text>
              <TextInput
                onChangeText={setStaffPhoneNumber}
                value={staffPhoneNumber}
                placeholder="Phone Number"
                keyboardType="numeric"
                style={[
                  fontStyle.h2,
                  {
                    borderColor: colors.gray500,
                    borderWidth: 1,
                    marginVertical: 4,
                    borderRadius: 8,
                    padding: 4,
                    color: colors.gray1000,
                  },
                ]}
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

const styles = StyleSheet.create({});
