import React from "react";
import {
  Text,
  Center,
  Heading,
  Stack,
  Button,
  Select,
  CheckIcon,
  Spacer,
  Box,
} from "native-base";
import NativeBaseIcon from "../../NativeBaseIcon";
import NavBar from "../../NavBar";
import { usePlayer } from "../../../contexts/PlayerContext";
import { actionCreator } from "../../../utils";

function SelectPlayerScreen({ navigation }) {
  const { state, dispatch } = usePlayer();
  console.log(state);
  const handleValueChange = (value) => {
    dispatch(
      actionCreator("changePlayerCount", { playerCount: parseInt(value) })
    );
  };
  return (
    <>
      <NavBar/>
      <Center
        safeAreaBottom
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <Stack space={5} alignItems="center" justifyContent="center">
          <Heading size="lg">Welcome to Word Fight! </Heading>
          <NativeBaseIcon />

          <LinkButton
            title="Start"
            onClick={() => navigation.navigate("add_name")}
          />
          <Box mt="auto">
            <Text fontWeight="800" color="#737373">
              Team Octo
            </Text>
          </Box>
        </Stack>
      </Center>
    </>
  );
}

function LinkButton({ title, onClick }) {
  return (
    <Button variant="outline" colorScheme="secondary" onPress={onClick} _dark={{
      _text:{
        color:'white'
      }
    }}>
      {title}
    </Button>
  );
}

export default SelectPlayerScreen;
