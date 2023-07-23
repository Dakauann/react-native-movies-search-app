import React from 'react'
import { Text, TextInput, View } from 'react-native'
import Button from '../components/ui/button'

const SearchScreen = () => {
	return (
		<View
			style={{
				backgroundColor: 'black',
				minHeight: '100%',
				width: '100%',
			}}>
			<View style={{ flexDirection: 'row' }}>
				<TextInput
					style={{
						width: '80%',
						height: 35,
						padding: 10,
						marginTop: 20,
						borderRadius: 7,
						color: 'white',
						borderBottomColor: 'red',
						borderBottomWidth: 1,
					}}
					placeholderTextColor={'darkgray'}
					placeholder='Pesquisar'
				/>
				<Button title='Pesquisar' onPress={() => {}} />
			</View>
		</View>
	)
}

export default SearchScreen
