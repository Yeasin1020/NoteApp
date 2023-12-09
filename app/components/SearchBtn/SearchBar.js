import { Dimensions, StyleSheet, TextInput, View } from "react-native"
import colors from "../../misc/colors"

export default function SearchBar({user}) {
 
  
	return (
	<>
	<View>
	  <TextInput placeholder="Search here" style={styles.searchBar}></TextInput>
	</View>
	</>
  )
}
const width = Dimensions.get('window').width-100;
const styles = StyleSheet.create({
	searchBar:{
		width,
		position: 'relative',
		marginLeft: 40,
		borderWidth: 0.5,
		borderColor: 'black',
		padding: 1,
		borderRadius: 50,
		paddingLeft: 15,
		marginTop: 20,
		backgroundColor: '#E7E7E9'
		
	}
})