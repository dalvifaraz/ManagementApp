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
  return (
    <ScrollView style={commonStyle.backgroundStyle}>
      <ModalComponent
        visible={addStaffModal}
        setVisible={setAddStaffModal}
        modalTitle="Add Staff"
        buttonTitle="Continue"
        body={
          <>
            <TextInput
              onChangeText={setStaffPhoneNumber}
              value={staffPhoneNumber}
              placeholder="Enter Contact"
              keyboardType="numeric"
            />
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
