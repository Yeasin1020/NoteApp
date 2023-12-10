import { Animated, Dimensions, Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View } from "react-native"
import colors from "../../misc/colors"
import { useState } from "react";

export default function SearchBar({ user }) {
	const [searchText, setSearchText] = useState('');
	const animatedWidth = new Animated.Value(200);


	const handleFocus = () => {
		// Animate the width when the search bar is focused
		Animated.timing(animatedWidth, {
			toValue: 300,
			duration: 300,
			useNativeDriver: false,
		}).start();
	};

	const handleBlur = () => {
		// Animate the width when the search bar is blurred
		Animated.timing(animatedWidth, {
			toValue: 200,
			duration: 300,
			useNativeDriver: false,
		}).start();
	};

	return (
		<>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<Animated.View style={{ width: animatedWidth }}>
						<TextInput
							style={styles.input}
							placeholder="Search..."
							value={searchText}
							onChangeText={(text) => setSearchText(text)}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</Animated.View>
				</View>
			</TouchableWithoutFeedback>
		</>
	)
}
const width = Dimensions.get('window').width - 100;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
	},
	input: {
		height: 40,
		borderWidth: 1,
		paddingLeft: 10,
		borderRadius: 5,
	},
});