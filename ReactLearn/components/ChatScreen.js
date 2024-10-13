import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const avatars = {
    ilyuhina_kapitolina: 'https://static.wikia.nocookie.net/villains/images/6/60/FatuiCapitano.png/revision/latest?cb=20220711070127',
    'Матвей Маратович': 'https://preview.redd.it/do-you-guys-think-that-mavuika-is-an-archon-v0-z90atow2ppcd1.jpeg?width=1080&crop=smart&auto=webp&s=aa9daa27d168e83f49cfe6d9ec714bc7728a19b5',
    noname: 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg'
  };
  
  function ChatScreen() {
    const [messages, setMessages] = useState([
      { id: '1', user: 'oks', message: 'Привет, хау ду ю ду?', fromSelf: true },
      { id: '2', user: 'ilyuhina_kapitolina', message: 'Хорошо, ты как?', fromSelf: false },
      { id: '3', user: 'oks', message: 'я домашку делаю', fromSelf: true },
      { id: '4', user: 'Матвей Маратович', message: 'Привет всем! Как ваши выходные<3<3?', fromSelf: false },
      { id: '5', user: 'noname', message: 'как из этой группы выйти', fromSelf: false },
    ]);
  
    const MessageBubble = ({ message }) => {
      const isSelf = message.fromSelf;
  
      return (
        <View
          style={[
            styles.messageContainer,
            { flexDirection: isSelf ? 'row-reverse' : 'row' },
          ]}
        >
          {!isSelf && (
            <Image
              source={{ uri: avatars[message.user] || '' }}
              style={styles.avatar}
            />
          )}
  
          <View
            style={[
              styles.bubble,
              { backgroundColor: isSelf ? '#DCF8C6' : '#E0E0E0' },
            ]}
          >
            <Text style={styles.userName}>{message.user}</Text>
            <Text>{message.message}</Text>
          </View>
        </View>
      );
    };
  
    return (
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MessageBubble message={item} />}
      />
    );
  }

  const styles = StyleSheet.create({
    messageContainer: {
      marginVertical: 5,
      paddingHorizontal: 10,
      alignItems: 'center',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    bubble: {
      borderRadius: 20,
      padding: 10,
      maxWidth: '80%',
    },
    userName: {
      fontWeight: 'bold',
      marginBottom: 4,
    }
})

export default ChatScreen;