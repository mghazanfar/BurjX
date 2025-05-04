import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';
import {theme} from '../../theme';

type FontWeight = keyof typeof theme.text;

interface TextProps extends RNTextProps {
  weight?: FontWeight;
}

export const Text: React.FC<TextProps> = ({
  weight = 'regular',
  style,
  children,
  ...props
}) => {
  return (
    <RNText style={[styles.base, theme.text[weight], style]} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  base: {
    color: '#000000',
  },
});
