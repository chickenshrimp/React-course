import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';


function SettingsScreen() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
  
    return (
      <View style={{ flex: 1, padding: 16 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 16 }}>
          <Text style={{ fontSize: 16 }}>Уведомления</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
        </View>
  
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 16 }}>
          <Text style={{ fontSize: 16 }}>Темная тема</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
          />
        </View>
  
        <TouchableOpacity style={{
          backgroundColor: '#fff',
          padding: 16,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 5,
          shadowOffset: { width: 0, height: 2 },
          elevation: 3,
          marginVertical: 8
        }}>
          <Text style={{ fontSize: 16 }}>Управление аккаунтом</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={{
          backgroundColor: '#fff',
          padding: 16,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 5,
          shadowOffset: { width: 0, height: 2 },
          elevation: 3,
          marginVertical: 8
        }}>
          <Text style={{ fontSize: 16 }}>Безопасность</Text>
        </TouchableOpacity>
      </View>
    );
  }

  export default SettingsScreen;