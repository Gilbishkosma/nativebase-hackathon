import React from 'react';
import {
  Text,
  Center,
  Heading,
  VStack,
  Button,
} from 'native-base';
import NativeBaseIcon from '../../NativeBaseIcon';
import ToggleDarkMode from '../../ToggleDarkMode';

function SelectPlayerScreen({ navigation }) {
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={4}
      flex={1}
    >
      <ToggleDarkMode />
      <VStack space={5} alignItems="center">
        <NativeBaseIcon />
        <Heading size="lg">Welcome to our App</Heading>

        <LinkButton title="Add player" onClick={() => navigation.navigate('add_name')} />
      </VStack>
    </Center>
  );
}

function LinkButton({ title, onClick }) {
  return (
    <Button variant="outline" colorScheme="secondary" onPress={onClick}>
      {title}
    </Button>
  );
}

export default SelectPlayerScreen;
