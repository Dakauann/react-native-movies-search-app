import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Button from './ui/button'

export default function Navbar() {
	return (
		<View style={styles.navbar}>
			<View style={styles.logo}>
				<Text>PetShop</Text>
			</View>

			<View>
				<Button title='Login' />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	logo: {
		width: 100,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 20,
		marginRight: 'auto',
	},
	navbar: {
		padding: 5,
		width: '100%',
		height: 50,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
})
