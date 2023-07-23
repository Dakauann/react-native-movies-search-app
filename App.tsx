import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Text } from 'react-native'
import HomeScreen from './src/screens/home-screen'
import SearchScreen from './src/screens/search-screen'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: 'black',
					},
					headerTintColor: 'white',
				}}>
				<Stack.Screen
					name='Início'
					component={HomeScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='Search'
					component={SearchScreen}
					options={{
						headerRight: () => (
							<Text style={{ color: 'white', fontSize: 16 }}>
								You<Text style={{ color: 'red' }}>Movies</Text>
							</Text>
						),
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
