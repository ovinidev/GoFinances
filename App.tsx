import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { theme } from './src/global/styles/theme';

import { Dashboard } from './src/screens/Dashboard';
import { Register } from './src/screens/Register';
import { Category } from './src/screens/Category';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar translucent />
        <Register />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1; 
  
`
