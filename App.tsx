import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

export default function App() {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Navbar />
				<Hero />
			</View>
		</SafeAreaView>
	)
}

// get the height of the status bar on the device

const styles = StyleSheet.create({
	container: {
		// really weak green, almost white
		backgroundColor: '#f0f0f0',
		minHeight: '100%',
	},
})
