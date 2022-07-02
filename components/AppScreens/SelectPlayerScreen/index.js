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
    dispatch(actionCreator("changePlayerCount", { playerCount: value }));
  };
  return (
    <>
      <NavBar />
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <Stack space={5} alignItems="center">
          <Heading size="lg">Welcome to Word Fight! </Heading>
          <NativeBaseIcon />

          <Text bold fontSize="md">
            Select Number of Player
          </Text>
          <Select
            shadow={2}
            accessibilityLabel="Select Number of Player?"
            placeholder="No. of Player"
            _selectedItem={{ bg: "teal.600", endIcon: <CheckIcon /> }}
            _light={{
              bg: "coolGray.100",
            }}
            _dark={{
              bg: "coolGray.800",
            }}
            defaultValue={2}
            selectedValue={state.playerCount}
            onValueChange={handleValueChange}
          >
            <Select.Item shadow={2} label="2" value={2} />
            <Select.Item shadow={2} label="3" value={3} />
          </Select>
          <LinkButton
            title="Next"
            onClick={() => navigation.navigate("add_name")}
          />
          <Spacer />
          <Box>
            <Text> Team Octo </Text>
          </Box>
        </Stack>
      </Center>
    </>
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
