import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Intro from './app/screens/Intro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import NoteScreen from './app/screens/NoteScreen';


export default function App() {
  const [user, setUser] = useState({});
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');
    console.log(result);
    setUser(JSON.parse(result))
  }

  useEffect(()=> {
     findUser();
     // AsyncStorage.clear();
  }, [])
  if(!user?.name){
    return  <Intro onFinish={findUser}></Intro>
  }
  return (
   <>
    
      <View>
   
     <NoteScreen user={user}></NoteScreen>  
  
     
      
      
    </View>
    
    </>
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
