import React from 'react'
import {
	ActivityIndicator,
	FlatList,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableHighlight,
	View,
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Button from '../components/ui/button'
import Movie from '../types/movie'

const SearchScreen = ({ navigation }: { navigation: any }) => {
	const [searchQuery, setSearchQuery] = React.useState<string>('')
	const [movies, setmovies] = React.useState<Movie[]>([])
	const [isLoading, setIsLoading] = React.useState<boolean>(false)

	const fetchMovies = async (query: string) => {
		const fetchUrl = `https://api.themoviedb.org/3/search/movie?api_key=34a94642ff7ce5427205b362623cb035&query=${encodeURIComponent(
			query,
		)}&language=pt-BR&page=1&include_adult=true`

		const response = await fetch(fetchUrl)
		const data = await response.json()
		setIsLoading(false)
		setmovies(data.results)
	}

	React.useEffect(() => {
		setIsLoading(true)
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
						width: '85%',
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
					title=''
					icon={<Icon name='search1' size={15} color={'white'} />}
					style={{
						height: 50,
						borderRadius: 100,
						marginLeft: 'auto',
					}}
					onPress={() => {
						setmovies([])
						setIsLoading(true)
						fetchMovies(searchQuery)
					}}
				/>
			</View>

			{isLoading ? (
				<ActivityIndicator
					size='large'
					color='red'
					style={{ marginTop: 10 }}
				/>
			) : movies.length > 0 ? (
				<FlatList
					numColumns={3}
					contentContainerStyle={{
						gap: 2,
						marginVertical: 20,
						paddingBottom: 80,
					}}
					renderItem={({ item }) => (
						<TouchableHighlight
							onPress={() => {
								navigation.navigate('Detalhes', {
									movieId: item.id,
								})
							}}
							key={item.id}
							style={styles.container}>
							<>
								<View
									style={{
										height: '80%',
										width: '100%',
										justifyContent: 'center',
										alignItems: 'center',
									}}>
									<Image
										source={{
											uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
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
									<View
										style={{
											width: '100%',
											marginTop: 'auto',
											flexDirection: 'row',
											justifyContent: 'flex-start',
											alignItems: 'baseline',
										}}>
										<Text style={styles.movieLanguage}>
											pt-BR
										</Text>
										<Text
											style={{
												...styles.movieLanguage,
												backgroundColor: 'transparent',
												color: 'white',
											}}>
											{item.vote_average.toFixed(1)}
											<Icon
												name='star'
												color={'yellow'}
												size={10}
											/>
										</Text>
									</View>
								</View>
								<View>
									<Text
										numberOfLines={2}
										style={styles.movieTitle}>
										{item.title}
									</Text>
								</View>
							</>
						</TouchableHighlight>
					)}
					data={movies.filter((movie) => movie.poster_path != null)}
				/>
			) : (
				<Text
					style={{
						color: 'white',
						fontSize: 32,
						fontWeight: 'bold',
						textAlign: 'center',
					}}>
					Nenhum filme encontrado
				</Text>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '33%',
		height: 270,
		borderRadius: 7,
		alignItems: 'center',
		paddingHorizontal: 10,
		gap: 5,
		justifyContent: 'center',
	},
	movieTitle: {
		color: 'white',
		fontSize: 15,
		height: 50,
		fontWeight: 'bold',
		textAlign: 'center',
		justifyContent: 'center',
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
		marginTop: 'auto',
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
		margin: 3,
		backgroundColor: 'red',
		padding: 4,
		borderRadius: 5,
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
		gap: 4,
	},
})

export default SearchScreen
