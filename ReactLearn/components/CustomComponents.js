import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomComponents = ({ theme }) => {
  const themeStyles = {
    light: {
      square: { backgroundColor: '#ff0000' },
      text: { color: '#000' },
    },
    dark: {
      square: { backgroundColor: '#ff0000' },
      text: { color: '#fff' },
    },
    custom: {
      square: { backgroundColor: '#000' },
      text: { color: '#000' },
    },
  };
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  text: {
    marginTop: 10,
  },
});

export default CustomComponents;