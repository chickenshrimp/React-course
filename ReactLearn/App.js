import React from 'react';
import { LinearGradient }  from 'expo-linear-gradient';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { ImageEly, SecondImageEly, StarSVG } from './ui/ElysiaImage.js';

export default function App() {
  const [fontsLoaded] = useFonts({
    'BarethellySignaturePersonal': require('./assets/fonts/BarethellySignaturePersonalU-ALewx.otf'),
    'DancingScript-VariableFont': require('./assets/fonts/DancingScript-VariableFont_wght.ttf'),
    'BrushScript': require('./assets/fonts/brushscriptmtrusbyme_italic.otf')
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagesContainer}>
        <SecondImageEly style={styles.smallImage}/>
        <Text style={styles.mainLabel}>All hope abandon ye who enter here</Text>

        <View style={styles.mainImgContainer}>
          <Text style={styles.leftLabel}>Ely left</Text>
          <ImageEly/>
          <Text style={styles.rightLabel}>Ely right</Text>
        </View>
      </View>

      <View style={{display: 'flex', flexDirection: 'row'}}>
        <StarSVG rotate={350}/>
        <StarSVG style={{ marginTop: 60 }} rotate={13}/>
        <StarSVG/>
      </View>
      
      
      <View style={styles.buttonsContainer}>
          <LinearGradient
            colors={['#FFB6C1', '#FF69B4']}
            style={styles.button1}
          >
            <Text style={styles.buttonText}>Button</Text>
          </LinearGradient>

        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>Button</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button3}>
          <Text style={styles.button3Text}>Button</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  
  },

  imagesContainer: {
    marginTop: 40
  },

  mainLabel: {
    fontFamily: 'BarethellySignaturePersonal',
    color: 'floralwhite',
    fontSize: 70,
    letterSpacing: 2,
    textAlign: 'center'
  },

  mainImgContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#b163ff63',
  },

  leftLabel: {
    marginRight: 5,
    fontSize: 30,
    color: '#ea5254',
    fontFamily: 'DancingScript-VariableFont',
    transform: [{ rotate: '90deg' }],
  },

  rightLabel: {
    marginLeft: 5,
    color: '#89fafa',
    fontSize: 30,
    fontFamily: 'BarethellySignaturePersonal',
    transform: [{ rotate: '270deg' }],
  },

  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingBottom: 50, 
  },

  button1: {
    backgroundColor: '#FF69B4',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 25,
  
    boxShadow: '#af73a4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  button2: {
    backgroundColor: '#D8BFD8',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 10,
    boxShadow: '#af73a4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  button3: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginVertical: 10,
    boxShadow: '#FFB6C1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'BrushScript', 
    textAlign: 'center',
  },

  button3Text: {
    color: '#FF69B4',
    fontSize: 18,
    fontFamily: 'BrushScript',
    textAlign: 'center',
  },
});
