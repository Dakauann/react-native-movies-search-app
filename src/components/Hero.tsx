import * as React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from './ui/button'
const Hero = ({ navigation }: { navigation: any }) => {
	return (
		<View style={styles.heroContainer}>
			<Image
				source={require('../../assets/impact.png')}
				style={{ width: '100%', height: '100%', position: 'absolute' }}
			/>
			<Text style={styles.heroTitle}>Bem vindo ao YouMovies</Text>
			<Text style={styles.heroSubtitle}>
				O melhor site de filmes do Brasil
			</Text>
			<View
				style={{
					width: '100%',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: 20,
				}}>
				<Button
					title='Começar a explorar'
					onPress={() => navigation.push('Search')}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	heroContainer: {
		width: '100%',
		height: 300,
		backgroundColor: 'darkred',
		justifyContent: 'center',
	},
	heroTitle: {
		textAlign: 'center',
		fontSize: 30,
		color: 'white',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
		fontWeight: 'bold',
	},
	heroSubtitle: {
		textAlign: 'center',
		fontSize: 20,
		color: 'white',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
		fontWeight: 'bold',
	},
})

export default Hero
