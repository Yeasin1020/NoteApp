import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class EditNote extends Component {
  render() {
	return (
		<>
		<Modal visible={visible} animationType='fade'>
			<View style={styles.container}>
			
				<Text style={styles.heading}>Edit Note Screen</Text>
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
	},
	title: {
		height: 50,
		borderRadius: 5,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 16,
		padding: 8,
	},
})



// rncs