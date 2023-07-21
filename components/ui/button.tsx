import React, { useState } from 'react';
import { ButtonProps, Pressable, StyleSheet, Text } from 'react-native';

export interface ButtonPropsWithVariant extends ButtonProps {
  variant?: 'default' | 'outline' | 'ghost';
}

export default function Button({ variant = 'default', ...props }: ButtonPropsWithVariant) {
  const { onPress, title = 'Save' } = props;
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  let buttonBackgroundColor;
  let textColor;
  let borderColor;

  switch (variant) {
    case 'ghost':
      buttonBackgroundColor = isPressed ? '#f0f0f0' : 'transparent';
      textColor = '#02d132';
      borderColor = 'transparent';
      break;
    case 'outline':
      buttonBackgroundColor = isPressed ? '#f0f0f0' : 'transparent';
      textColor = '#04bd2f';
      borderColor = '#04bd2f';
      break;
    case 'default':
    default:
      buttonBackgroundColor = isPressed ? '#02d132' : '#04bd2f';
      textColor = 'white';
      borderColor = 'transparent';
      break;
  }

  return (
    <Pressable
      style={[
        styles.button,
        { backgroundColor: buttonBackgroundColor, borderColor: borderColor },
      ]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 4,
    borderWidth: 1,
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});
