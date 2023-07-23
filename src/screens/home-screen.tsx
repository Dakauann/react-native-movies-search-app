import React from 'react'
import { Text, View } from 'react-native'
import About from '../components/About'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const HomeScreen = ({ navigation }: { navigation: any }) => {
	return (
		<View
			style={{
				backgroundColor: 'black',
				minHeight: '100%',
				width: '100%',
			}}>
			<Navbar />
			<Hero navigation={navigation} />
			<About />
		</View>
	)
}

export default HomeScreen
