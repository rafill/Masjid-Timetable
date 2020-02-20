import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from "./app/routes/Routes";

export default function App() {
  return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
  );
}
