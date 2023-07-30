import React from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import MovieData from '../types/movie-details'

interface IRouteParams {
	movieId: number
}

const wait = (timeout: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, timeout)
	})
}

const MovieDetails = ({ route }: { route: any }) => {
	const [isLoading, setIsLoading] = React.useState<boolean>(false)
	const [movieDetails, setMovieDetails] = React.useState<MovieData>(null)
	const { movieId } = route.params as IRouteParams

	const fetchMovie = async () => {
		// simulating false loading
		await wait(1000)
		const fetchUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=34a94642ff7ce5427205b362623cb035&language=pt-BR`

		const response = await fetch(fetchUrl)
		const data: MovieData = await response.json()
		setIsLoading(false)

		setMovieDetails(data)
	}

	React.useEffect(() => {
		setIsLoading(true)
		fetchMovie()

		return () => {
			setMovieDetails(null)
		}
	}, [])

	return (
		<View
			style={{
				backgroundColor: 'black',
				minHeight: '100%',
				width: '100%',
			}}>
			<View style={styles.head}>
				<View
					style={{
						width: 200,
						height: 400,
						marginVertical: 20,
						alignSelf: 'baseline',
					}}>
					<Image
						source={{
							uri: isLoading
								? 'https://picsum.photos/200/300'
								: `https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`,
						}}
						style={{
							width: '100%',
							height: 350,
							borderRadius: 10,
							position: 'absolute',
							opacity: isLoading ? 0.5 : 1,
						}}
						blurRadius={isLoading ? 5 : 0}
					/>
					{isLoading && (
						<ActivityIndicator
							size={100}
							color='white'
							style={{
								width: '100%',
								height: '100%',
							}}
						/>
					)}
				</View>
				<View style={styles.movieInfosContainer}>
					{isLoading ? (
						<ActivityIndicator
							size={50}
							color='white'
							style={{
								height: 400,
								marginBottom: 'auto',
							}}
						/>
					) : (
						<>
							<Text style={styles.movieTitle}>
								{movieDetails?.title}
							</Text>

							<Text
								style={{
									color: 'white',
									fontSize: 16,
									marginBottom: 10,
								}}>
								{movieDetails?.genres
									.map((genre) => genre.name)
									.join(', ')}
							</Text>
							<Text style={styles.movieSinopse}>
								{movieDetails?.overview}
							</Text>
							<Text
								style={{
									color: 'white',
									backgroundColor: 'red',
									width: 50,
									height: 30,
									borderRadius: 10,
									textAlign: 'center',
									textAlignVertical: 'center',
									marginTop: 10,
								}}>
								{movieDetails?.vote_average.toFixed(1)}
							</Text>
						</>
					)}
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	head: {
		width: '100%',
		minHeight: 400,
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	movieInfosContainer: {
		width: '60%',
		marginLeft: 20,
		height: '100%',
	},
	movieTitle: {
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	movieSinopse: {
		fontSize: 16,
		color: 'white',
	},
})

export default MovieDetails
