import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Button from './ui/button'

export default function Navbar() {
	return (
		<View style={styles.navbar}>
			<View style={styles.logo}>
				<Text style={{ color: 'white', fontSize: 16 }}>
					You<Text style={{ color: 'red' }}>Movies</Text>
				</Text>
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
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: StatusBar.currentHeight,
	},
})
