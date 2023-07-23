import React from 'react'
import {
	ActivityIndicator,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native'
import Button from '../components/ui/button'

interface Movie {
	id: number
	original_language: string
	original_title: string
	title: string
	overview: string
	popularity: number
	poster_path: string
	backdrop_path: string
	release_date: string
	vote_average: number
	vote_count: number
}

const SearchScreen = () => {
	const [searchQuery, setSearchQuery] = React.useState<string>('')
	const [movies, setmovies] = React.useState<Movie[]>([])
	const [isLoading, setIsLoading] = React.useState<boolean>(false)

	const fetchMovies = async (query: string) => {
		const fetchUrl = `https://api.themoviedb.org/3/search/movie?api_key=34a94642ff7ce5427205b362623cb035&query=${encodeURIComponent(
			query,
		)}&language=pt-BR&page=1&include_adult=true`

		setIsLoading(true)
		const response = await fetch(fetchUrl)
		setIsLoading(false)
		const data = await response.json()

		setmovies(data.results)
	}

	React.useEffect(() => {
		fetchMovies(searchQuery != '' ? searchQuery : 'Os vingadores')
	}, [])

	return (
		<View
			style={{
				backgroundColor: 'black',
				minHeight: '100%',
				width: '100%',
			}}>
			<View
				style={{
					flexDirection: 'row',
					height: 50,
					paddingHorizontal: 15,
					alignItems: 'center',
					gap: 5,
				}}>
				<TextInput
					style={{
						width: '80%',
						height: '100%',
						padding: 10,
						borderRadius: 7,
						color: 'white',
						borderColor: 'darkred',
						borderWidth: 1,
					}}
					onChange={(e) => setSearchQuery(e.nativeEvent.text)}
					placeholderTextColor={'darkgray'}
					placeholder='Os vingadores'
				/>
				<Button
					title='Pesquisar'
					style={{
						height: 50,
						borderRadius: 100,
					}}
					onPress={() => fetchMovies(searchQuery)}
				/>
			</View>

			<ScrollView
				contentContainerStyle={{
					rowGap: 10,
					flexDirection: 'row',
					flexWrap: 'wrap',
					padding: 10,
					justifyContent: 'center',
					paddingBottom: 50,
				}}>
				{isLoading ? (
					<ActivityIndicator size='large' color='red' />
				) : movies.length > 0 ? (
					movies.map((movie) => (
						<View key={movie.id} style={styles.container}>
							<Image
								source={{
									uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
								}}
								style={{
									width: '100%',
									height: '100%',
									position: 'absolute',
									resizeMode: 'cover',
									opacity: 0.5,
									borderRadius: 7,
								}}
							/>
							<Text style={styles.movieTitle}>{movie.title}</Text>
							<Text style={styles.movieDescription}>
								{movie.overview}
							</Text>
							<Text style={styles.movieLanguage}>pt-BR</Text>
						</View>
					))
				) : (
					<Text
						style={{
							color: 'white',
							fontSize: 32,
							fontWeight: 'bold',
						}}>
						Nenhum filme encontrado
					</Text>
				)}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '50%',
		minHeight: 270,
		borderRadius: 7,
		alignItems: 'center',
		paddingHorizontal: 10,
		gap: 5,
	},
	movieTitle: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	movieDescription: {
		color: 'white',
		fontSize: 15,
		textAlign: 'center',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	movieLanguage: {
		color: 'white',
		fontSize: 10,
		alignSelf: 'baseline',
		margin: 5,
		backgroundColor: 'red',
		padding: 5,
		borderRadius: 7,
		marginTop: 'auto',
	},
})

export default SearchScreen
