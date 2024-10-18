import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text as BaseText } from 'react-native';

export default function Text(props) {
  const { colors } = useTheme();

  const capitalizeFirstLetter = (text) => {
    if (text && text.length > 0 && typeof (text) === 'string') {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
    return text;
  };

  return (
    <BaseText
      ellipsizeMode={props.mode}
      onPress={props.onPress}
      numberOfLines={props.lines}
      style={[{ color: colors.secondary }, props.style]}>
      {capitalizeFirstLetter(props.children)}
    </BaseText>
  );
}
