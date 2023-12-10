import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Intro from './app/screens/Intro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import NoteScreen from './app/screens/NoteScreen';
import { createStackNavigator } from '@react-navigation/stack';
import EditNote from './app/components/EditNote/EditNote';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

export default function App() {
  const [user, setUser] = useState({});
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');
    console.log(result);
    setUser(JSON.parse(result))
  }

  useEffect(() => {
    findUser();
    // AsyncStorage.clear();
  }, [])
  if (!user?.name) {
    return <Intro onFinish={findUser}></Intro>
  }

  const renderNoteScreen = (props) => {
    return <NoteScreen {...props} user={user}/>
  }
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={renderNoteScreen} name='NoteApp' />
          <Stack.Screen component={EditNote} name='EditNote' />
        </Stack.Navigator>
      </NavigationContainer>
    
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
