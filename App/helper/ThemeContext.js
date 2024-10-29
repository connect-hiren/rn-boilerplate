import React, { createContext, useState, useEffect } from 'react';
import { darkColor, lightcolor } from '../helper/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    const savedTheme = await AsyncStorage.getItem('appTheme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  };

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    await AsyncStorage.setItem('appTheme', newTheme);
  };

  const themeColors = theme === 'light' ? lightcolor : darkColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};
