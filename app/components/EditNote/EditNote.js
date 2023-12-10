import { View, Text, Modal, TextInput, Button } from 'react-native'
import React from 'react'

export default function EditNote() {
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