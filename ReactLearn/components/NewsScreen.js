import React from 'react';
import { View, Text, FlatList } from 'react-native';

const NewsCard = ({ title, description }) => (
    <View style={{
      backgroundColor: '#fff',
      padding: 16,
      marginVertical: 8,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3
    }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
  
  function NewsScreen() {
    const news = [
      { id: '1', title: 'Игровые новости', description: 'Вышло новое обновление "Baldur`s Gate 3".' },
      { id: '2', title: 'Технологии', description: 'Apple выпустила новый iPhone с улучшенными характеристиками и дизайном.' },
      { id: '3', title: 'Экономика', description: 'Рубль опять упал.' },
    ];
  
    return (
      <View style={{ flex: 1, padding: 16, backgroundColor: '#f8f8f8' }}>
        <FlatList
          data={news}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <NewsCard title={item.title} description={item.description} />}
        />
      </View>
    );
  }

  export default NewsScreen;