import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Note = () => {
	const [notes, setNotes] = useState([]);
	console.log(notes);

	const findNotes = async () => {
		const result = await AsyncStorage.getItem('notes')
		console.log(result);
		if (result !== null) {
			return setNotes(JSON.parse(result));
		}
	}

	useEffect(() => {
		
		findNotes();
	}, []);
  return (
	<View style={styles.container}>
	  <FlatList
	  data={notes}
	  renderItem={({item, index}) => {
		return(
			<View style={ { width: '50%', height: 50, borderWidth: 1}}>
				<Text>{item.title}</Text>
				<Text>{item.decs}</Text>
			</View>
		);
	  }}
	  />
	</View>
  )
}

const styles = StyleSheet.create({
	container: {
		height: 'auto',
		width: 'auto',
		borderWidth: 5,
		borderColor: 'red'
		
	}
})

export default Note;