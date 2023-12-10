import { View, Text, Modal, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function EditNote({visible, editDecs, editTitle, onSubmit, onClose}) {

	const [title, setTitle] = useState('');
	const [decs, setDecs] = useState('');

	

	const handleOnChangeText = (text, valueFor) => {
		if(valueFor === 'title'){
			return setTitle(text);

		}
		if(valueFor === 'desc'){
			setDecs(text);
		}
	}
	

	const handleSubmit = () => {

		if (!decs.trim() && !title.trim()) {
			onClose()
		}
		else{
			onSubmit(title, decs)
			setTitle('');
			setDecs('');
		}
	}

  return (
	<>
	 	<Modal visible={visible} animationType='fade'> 
				<View style={styles.container}>
				
					<Text style={styles.heading}>Note Screen</Text>
					<TextInput
						style={styles.title}
						placeholder="Enter your title"
						value={title} onChangeText={text => handleOnChangeText(text, 'title')}
					/>
					<TextInput
						style={styles.input}
						placeholder="Enter your note"
						value={decs} onChangeText={text => handleOnChangeText(text, 'desc')}
						multiline={true}
					/>
					
					<Button title="Save Note" onPress={handleSubmit} />
					
				</View>
			</Modal> 
	</>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	heading: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 16,
	},
	input: {
		height: 100,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 16,
		padding: 8,
		borderRadius: 5,
		fontSize: 18,
	},
	title: {
		height: 50,
		borderRadius: 5,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 16,
		padding: 8,
		fontSize: 20,
	},
});