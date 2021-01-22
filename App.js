import { StatusBar } from 'expo-status-bar';
// import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import BookProvider from './context/BookContext';
import MainStack from './navigations/MainStack';
import React, { useState } from 'react';
import ThemeProvider from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <BookProvider>
        <MainStack />
        <Text>Hello</Text>
      </BookProvider>
    </ThemeProvider>
  );
}
