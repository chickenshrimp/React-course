import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      setError('');
      setIsLoggedIn(true);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16
    }}>
      {isLoggedIn ? (
        <Text style={{ fontSize: 24 }}>Welcome</Text>
      ) : (
        <View>
          <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5', width: '100%', marginVertical: 8 }}
            placeholder="Username"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5', width: '100%', marginVertical: 8 }}
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
          {error ? (
            <Text style={{ color: 'red', marginVertical: 8 }}>{error}</Text>
          ) : null}
          <Button title="Login" onPress={handleLogin} />
        </View>
      )}
    </View>
  );
};

export default LoginForm;
