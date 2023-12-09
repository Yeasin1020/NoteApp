import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const IntroBtn = ({onPress}) => {
  return (
	<Pressable onPress={onPress} style={styles.button}>
		<Text style={styles.text}>Enter</Text>
	</Pressable>
  )
}

export default IntroBtn

const styles = StyleSheet.create({
	button: {
		marginTop: 10,
	  alignItems: 'center',
	  justifyContent: 'center',
	  paddingVertical: 12,
	  paddingHorizontal: 32,
	  borderRadius: 4,
	  elevation: 3,
	  backgroundColor: 'black',
	},
	text: {
	  fontSize: 16,
	  lineHeight: 21,
	  fontWeight: 'bold',
	  letterSpacing: 0.25,
	  color: 'white',
	},
  });