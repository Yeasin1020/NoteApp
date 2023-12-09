import { Dimensions, FlatList, Keyboard, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import SearchBar from '../components/SearchBtn/SearchBar'
import colors from '../misc/colors'
import NoteInputModal from '../components/NoteInputModal/NoteInputModal'
import AsyncStorage from '@react-native-async-storage/async-storage'



export default function NoteScreen({ user }) {
	const [greet, setGreet] = useState('')
	const [modalVisible, setModalVisible] = useState(false);
	const [notes, setNotes] = useState([]);
	const [forEdit, setForEdit] = useState();

	const editTitle = forEdit?.title;
	const editDecs = forEdit?.decs;





	const findGreet = () => {
		const hrs = new Date().getHours();
		if (hrs === 0 || hrs < 12) {
			return setGreet('Morning');
		}
		else if (hrs === 1 || hrs < 17) {
			return setGreet('Afternoon');
		}
		else {
			return setGreet('Evening');
		}
	}

	const findNotes = async () => {
		const result = await AsyncStorage.getItem('notes')
		console.log(result);
		if (result !== null) {
			return setNotes(JSON.parse(result));
		}
	}

	useEffect(() => {
		findGreet();
		findNotes();
	}, []);



	const handleOnSubmit = async (title, decs) => {

		const note = { id: Date.now(), title, decs, time: Date.now() };
		const updatedNotes = [...notes, note];
		setNotes(updatedNotes);
		await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes))
		console.log(note);
	}

	const handleEditData = async (item) => {
		setModalVisible(true)
		setForEdit(item);
	}

	return (
		<>

			<StatusBar backgroundColor='lightgreen'></StatusBar>


			<ScrollView>
				<View>
					<View >
						<View>
							<Text style={styles.text}>{`Good ${greet} ${user.name}`}</Text>
						</View>
						{
							notes.length ? <SearchBar></SearchBar> : null
						}
						
						<FlatList
							data={notes}
							renderItem={({ item, index }) => {
								return (
									<View style={styles.card}>
										<Pressable onPress={() => handleEditData(item)}>
											<Text style={styles.title}>{index + 1}.{item.title} {item.id}</Text>
											<Text style={styles.content}>{item.decs}</Text>
										</Pressable>
									</View>
								);
							}}
						/>
						<View>
						</View>
					</View>
				</View>
			</ScrollView>

			<NoteInputModal
				visible={modalVisible}
				onClose={() => setModalVisible(false)}
				onSubmit={handleOnSubmit}
				editTitle={editTitle}
				editDecs={editDecs}
			>

			</NoteInputModal>
			<View style={styles.buttonField}>
				<TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button} >
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>


		</>
	)
}

const width = Dimensions.get('window').width - 10
const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		marginTop: 60,
		fontSize: 15,
		fontWeight: 'bold'
	},
	searchBar: {
		marginTop: 100
	},
	button: {
		backgroundColor: 'lightgreen', // Change the color as needed
		borderRadius: 50,
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',



	},
	container: {
		width: width / 2
	},
	buttonText: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
	},
	buttonField: {
		position: 'absolute',
		marginLeft: 300,
		marginTop: 700,

	},
	card: {
		backgroundColor: 'white',
		borderRadius: 10,
		marginLeft: 10,
		marginRight: 10,
		padding: 16,
		marginVertical: 8,
		elevation: 2, // for Android shadow
		shadowColor: '#000', // for iOS shadow
		shadowOffset: { width: 0, height: 2 }, // for iOS shadow
		shadowOpacity: 0.2, // for iOS shadow
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 8,
	},
	content: {
		fontSize: 16,
	},
})