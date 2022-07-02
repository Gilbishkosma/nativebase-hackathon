import React from "react";
import {
  NativeBaseProvider,
  extendTheme,
  theme as nbTheme,
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { AddPlayerNamesScreen, SelectPlayerScreen } from "./components/AppScreens";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Define the config
const config = {
  useSystemColorMode: false,
};

//extend the theme
export const theme = extendTheme({
  config,
  colors: {
    primary: nbTheme.colors.violet,
    secondary: nbTheme.colors.coolGray,
  },
});

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="select_player" component={SelectPlayerScreen} />
          <Stack.Screen name="add_name" component={AddPlayerNamesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}


