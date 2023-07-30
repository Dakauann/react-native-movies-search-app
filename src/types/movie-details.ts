type ProductionCompany = {
	id: number
	logo_path: string | null
	name: string
	origin_country: string
}

type ProductionCountry = {
	iso_3166_1: string
	name: string
}

type SpokenLanguage = {
	english_name: string
	iso_639_1: string
	name: string
}

type MovieData = {
	id: number
	imdb_id: string
	title: string
	original_title: string
	original_language: string
	overview: string
	tagline: string
	homepage: string
	popularity: number
	vote_average: number
	vote_count: number
	video: boolean
	poster_path: string
	release_date: string
	revenue: number
	runtime: number
	status: string
	production_companies: ProductionCompany[]
	production_countries: ProductionCountry[]
	spoken_languages: SpokenLanguage[]
    genres: { id: number, name: string }[]
} | null

export default MovieData