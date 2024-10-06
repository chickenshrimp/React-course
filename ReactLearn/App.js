import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonApp from './components/Button.js';
import LoginForm from './components/LoginForm.js';
import CustomBox from './components/CustomBox.js';

export default function App() {
  return (
    <View style={styles.container}>
      <ButtonApp/>
      <LoginForm/>
      {/* <CustomBox/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
