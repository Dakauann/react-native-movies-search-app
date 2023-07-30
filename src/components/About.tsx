import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const About = () => {
	return (
		<View style={styles.aboutContainer}>
			<View style={styles.aboutItem}>
				<Text style={styles.aboutItemTitle}>
					Como funciona o YouMovies?
				</Text>
				<Text style={styles.aboutItemText}>
					O YouMoyvies é um site que disponibiliza filmes e séries de
					forma gratuita.
				</Text>
			</View>
			<View style={styles.aboutItem}>
				<Text style={styles.aboutItemTitle}>
					Como funciona a pesquisa de filmes?
				</Text>
				<Text style={styles.aboutItemText}>
					Você pode pesquisar por filmes e séries usando a barra de
					pesquisa.
				</Text>
			</View>
			<View style={styles.aboutItem}>
				<Text style={styles.aboutItemTitle}>
					Posso pesquisar por filmes e séries?
				</Text>
				<Text style={styles.aboutItemText}>
					Sim, você pode pesquisar por filmes e séries, pois
					utilizamos uma api externa chamada the moviesDb.
				</Text>
			</View>
			<View style={styles.aboutItem}>
				<Text style={styles.aboutItemTitle}>
					Qual o intuitio do YouMovies?
				</Text>
				<Text style={styles.aboutItemText}>
					O YouMovies foi criado para fins de demonstração de
					conhecimento em React Native / Desenvolvimento de modo
					geral.
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	aboutContainer: {
		width: '100%',
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 5,
	},
	aboutItem: {
		width: '45%',
		borderRadius: 7,
		backgroundColor: 'black',
		borderBottomColor: 'red',
		borderBottomWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
		padding: 8,
	},
	aboutItemTitle: {
		fontSize: 17,
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	aboutItemText: {
		fontSize: 14,
		color: 'white',
		marginTop: 10,
	},
})

export default About
