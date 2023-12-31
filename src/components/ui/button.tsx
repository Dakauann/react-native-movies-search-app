import React, { useState } from 'react'
import { ButtonProps, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'

export interface ButtonPropsWithVariant extends ButtonProps {
	variant?: 'default' | 'outline' | 'ghost'
	style?: StyleProp<ViewStyle>
	icon?: React.ReactNode
}

export default function Button({
	variant = 'default',
	style,
	...props
}: ButtonPropsWithVariant) {
	const { onPress, title = 'Save' } = props
	const [isPressed, setIsPressed] = useState(false)

	const handlePressIn = () => {
		setIsPressed(true)
	}

	const handlePressOut = () => {
		setIsPressed(false)
	}

	let buttonBackgroundColor
	let textColor
	let borderColor

	switch (variant) {
		case 'ghost':
			buttonBackgroundColor = isPressed ? '#f0f0f0' : 'transparent'
			textColor = 'red' // Change to red color
			borderColor = 'transparent'
			break
		case 'outline':
			buttonBackgroundColor = isPressed ? '#f0f0f0' : 'transparent'
			textColor = 'darkred' // Change to a shade of red
			borderColor = 'darkred' // Change to a shade of red for the border
			break
		case 'default':
		default:
			buttonBackgroundColor = isPressed ? 'red' : 'darkred' // Change to red and darkred shades
			textColor = 'white'
			borderColor = 'transparent'
			break
	}

	return (
		<Pressable
			style={[
				styles.button,
				style,
				{
					backgroundColor: buttonBackgroundColor,
					borderColor: borderColor,
				},
			]}
			onPress={onPress}
			onPressIn={handlePressIn}
			onPressOut={handlePressOut}>
			<View>
				{props.icon && <View style={{ marginHorizontal: 8 }}>{props.icon}</View>}
			</View>
			<Text style={[styles.text, { color: textColor }]}>{title}</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 8,
		paddingHorizontal: 20,
		borderRadius: 4,
		borderWidth: 1,
		flexDirection: 'row',
	},
	text: {
		fontSize: 14,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
	},
})
