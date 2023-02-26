import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import {AppList, NavigationRoutes} from '../utils/constant';
import Card from '../components/Card';

const Main = ({navigation}) => {
  const handleOnPressCard = name => {
    navigation.navigate(name);
  };
  return (
    <View style={{marginHorizontal: 8}}>
      <Text style={styles.headerTitle}>Management Application</Text>
      <FlatList
        data={AppList}
        renderItem={({item}) => (
          <Card
            title={item.name}
            subTitle="Card"
            image={item.uri}
            onPressCard={() => handleOnPressCard(item.navigation)}
          />
        )}
        keyExtractor={item => item.id}
        numColumns="2"
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  headerTitle: {
    color: colors.gray50,
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 26,
  },
});
