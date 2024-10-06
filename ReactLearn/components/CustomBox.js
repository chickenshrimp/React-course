import React, { useState } from 'react';
import { View, Button, TextInput, Text, TouchableOpacity } from 'react-native';

const Box = ({ color, size, radius }) => (
  <View style={{
    width: size,
    height: size,
    backgroundColor: color,
    borderRadius: radius,
    marginBottom: 16 
  }} />
);

const App = () => {
  const [boxes, setBoxes] = useState([]);
  const [size, setSize] = useState(100);
  const [color, setColor] = useState('red');
  const [radius, setRadius] = useState(0);

  const addBox = () => {
    setBoxes([...boxes, { color, size, radius }]);
  };

  const clearBoxes = () => {
    setBoxes([]);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      {boxes.map((box, index) => (
        <React.Fragment key={index}>
          <Box color={box.color} size={box.size} radius={box.radius} />
          <View style={{ height: 1, backgroundColor: '#ccc', margin: 6 }} />
        </React.Fragment>
      ))}

      <Text>Размер:</Text>
      <TextInput
        style={{ padding: 8, borderWidth: 1, marginVertical: 8 }}
        keyboardType="numeric"
        value={String(size)}
        onChangeText={text => setSize(Number(text))}
      />

      <Text>Радиус углов:</Text>
      <TextInput
        style={{ padding: 8, borderWidth: 1, marginVertical: 8 }}
        keyboardType="numeric"
        value={String(radius)}
        onChangeText={text => setRadius(Number(text))}
      />

      <Text style={{ marginBottom: 5 }}>Цвет:</Text>
      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        <TouchableOpacity onPress={() => setColor('yellow')} style={{ backgroundColor: 'yellow', padding: 10, marginHorizontal: 4 }} />
        <TouchableOpacity onPress={() => setColor('lightblue')} style={{ backgroundColor: 'lightblue', padding: 10, marginHorizontal: 4 }} />
        <TouchableOpacity onPress={() => setColor('lightpink')} style={{ backgroundColor: 'lightpink', padding: 10, marginHorizontal: 4 }} />
      </View>

      <View style={{ marginVertical: 5 }}>
        <Button title="Добавить квадрат" onPress={addBox} />
      </View>

      <View style={{ marginVertical: 5 }}>
        <Button title="Очистить" onPress={clearBoxes} />
      </View>
    </View>
  );
};

export default App;
