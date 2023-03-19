import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import {fontStyle} from '../../style/fontStyle';
import HorizontalCard from '../../components/HorizontalCard';
import Card from '../../components/Card';

const Compoents = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <Text style={[fontStyle.h1, styles.header]}>Button</Text>
      <Button title="Filled" variant="filled" containerStyle={{margin: 8}} />
      <Button title="Outlined" containerStyle={{margin: 8}} />
      <Text style={[fontStyle.h1, styles.header]}>Card</Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          flexDirection: 'row',
        }}>
        <Card
          title="CARD"
          subTitle="Card"
          image={require('../../images/react_logo.png')}
          imageStyle={{height: 25, width: 25}}
          containerStyle={{
            width: 110,
          }}
        />
        <Card
          title="CARD"
          subTitle="Card"
          image={require('../../images/react_logo.png')}
          imageStyle={{height: 25, width: 25}}
          containerStyle={{
            width: 110,
            margin: 8,
          }}
        />
      </View>
      <Text style={[fontStyle.h1, styles.header]}>Horizontal Card</Text>
      <HorizontalCard
        leftTitle="Staff Name: Faraz Dalvi"
        leftSubTitle="Status: Not Marked!"
        rightTitle="Total"
        rightSubContainerTitle="2000"
        rightSubContainerSubTitle="Advance"
        containerStyle={{margin: 8}}
      />
      <HorizontalCard
        leftTitle="Staff Name: AXAXS SFDAS"
        leftSubTitle="Status: Present!"
        rightTitle="Total"
        rightSubContainerTitle="2000"
        rightSubContainerSubTitle="Balance"
        containerStyle={{margin: 8}}
      />
      <HorizontalCard
        leftTitle="Staff Name: ASFDA vbxvc"
        leftSubTitle="Status: Absent!"
        rightTitle="Total"
        rightSubTitle="HELLO"
        containerStyle={{margin: 8}}
      />
      <HorizontalCard
        leftTitle="Staff Name: poj vtyu"
        leftSubTitle="Status: Not Marked!"
        rightSubContainerTitle="Welcome"
        containerStyle={{margin: 8}}
      />
      <Text style={[fontStyle.h1, styles.header]}>Text</Text>
    </ScrollView>
  );
};

export default Compoents;

const styles = StyleSheet.create({
  header: {
    color: 'black',
    textAlign: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
});
