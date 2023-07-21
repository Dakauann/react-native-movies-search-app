import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Hero() {
	return (
		<View style={styles.hero}>
			<Image
				style={styles.heroImage}
				source={require('../assets/puppy.png')}
			/>
			<Text style={styles.heroText}>Petshop</Text>
			<Text style={styles.heroDescription}>A wonderfull shop where you can trust your pets</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	hero: {
		height: 300,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	heroImage: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		zIndex: -1,
	},
	heroText: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold',
	},
    heroDescription: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 20,
    }
})
