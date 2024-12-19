import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const ThemeSwitcher = ({ toggleTheme, theme }) => {
  const themeStyles = {
    light: {
      container: {
        backgroundColor: '#f5f5f5',
      },
      button: {
        backgroundColor: '#6300ee63',
        color: '#fff',
      },
    },
    dark: {
      container: {
        backgroundColor: '#121212',
      },
      button: {
        backgroundColor: '#bb86fc78',
        color: '#000',
      },
    },
    custom: {
      container: {
        backgroundColor: '#ffcccc',
      },
      button: {
        backgroundColor: '#ff00006a',
        color: '#fff',
      },
    },
  };

  return (
    <View style={[styles.container, themeStyles[theme].container]}>
      <Button 
        style={{backgroundColor: themeStyles[theme].button.backgroundColor }}
        textColor={themeStyles[theme].button.color}
        mode="outlined" 
        onPress={() => toggleTheme('light')}
      >
        Светлая тема
      </Button>
      <Button 
        style={{backgroundColor: themeStyles[theme].button.backgroundColor }}
        textColor={themeStyles[theme].button.color}
        mode="outlined" 
        onPress={() => toggleTheme('dark')}
      >
        Темная тема
      </Button>
      <Button 
        style={{backgroundColor: themeStyles[theme].button.backgroundColor }}
        textColor={themeStyles[theme].button.color}
        mode="outlined" 
        onPress={() => toggleTheme('custom')}
      >
        Кастомная тема
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
});

export default ThemeSwitcher;