import { Dimensions, View, Text, StyleSheet, StatusBar, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import colors from '../misc/colors'
import IntroBtn from '../components/IntroBtn/IntroBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Intro = ({onFinish}) => {
	const [name, setName] = useState();
	

	const handleOnChangeText = (text) => {
		setName(text)
		
	}

	const handleSubmit = async () => {
		const user = {name: name}
		await AsyncStorage.setItem('user', JSON.stringify(user))
		if(onFinish){
			return onFinish();
		}
	}
	console.log(name);
	
  return (
	<>
	<StatusBar 
	 backgroundColor="lightgreen"
	 barStyle="dark-content"
	/>
	<View style={styles.container}>
	  <View>
	  <Text style={styles.f_text}>Enter Your Name to Continue</Text>
	  </View>
	  <TextInput value={name} onChangeText={handleOnChangeText}  placeholder='Enter Your Name' style={styles.textInput}></TextInput>
	  {name?.trim()?.length >= 3 ? <IntroBtn onPress={handleSubmit}></IntroBtn>  : null}
	</View>
	</>
	
  )
}

const width = Dimensions.get('window').width-50

const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textInput:{
		marginTop: 40,
		borderWidth: 2,
		borderColor: colors.PRIMARY,
		width,
		height: 40,
		borderRadius: 10,
		paddingLeft: 15
	},
	f_text:{
		color: 'black',
		fontSize: 15,
	   
	}
})

export default Intro;