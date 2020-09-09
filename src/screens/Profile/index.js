import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import TextStyle from '../../styles/TextStyle';
import COLOR from '../../constants/color';
import Avatar from './components/Avatar';
import FormInfo from './components/FormInfo';
import UserSettings from './components/UserSettings';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Avatar />

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
        <MaterialIcons
          style={{ marginRight: 8 }}
          name='account-circle'
          size={16}
          color={COLOR.neutral1}
        />
        <Text style={TextStyle.title2}>
          Thông tin cá nhân
        </Text>
      </View>

      <FormInfo />

      <UserSettings />
    </ScrollView>
  )
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16
  }
});