import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MainScreen} from '../utils/constant';
import Card from '../components/Card';
import {commonStyle} from '../style/commonStyle';

const Main = ({navigation}) => {
  const handleOnPressCard = name => {
    navigation.navigate(name);
  };
  return (
    <SafeAreaView style={commonStyle.backgroundStyle}>
      <Text style={[commonStyle.titleStyle]}>{MainScreen.mainScreenTitle}</Text>
      <FlatList
        data={MainScreen.AppList}
        renderItem={({item, index}) => (
          <Card
            title={item.name}
            subTitle="Card"
            image={item.uri}
            onPressCard={() => handleOnPressCard(item.navigation)}
            index={index}
          />
        )}
        keyExtractor={item => item.id}
        numColumns="2"
      />
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({});
