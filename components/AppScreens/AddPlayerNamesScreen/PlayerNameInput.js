import React from "react";
import { Box, Center, Text, Image, Input } from "native-base";
import { usePlayer } from "../../../contexts/PlayerContext";
import { actionCreator } from "../../../utils";

const PlayerNameInput = ({ playerKey, dispatch, name, img }) => {
  const handleChange = (value) => {
    dispatch(actionCreator("addName", { name: value, playerKey }));
  };

  return (
    <Box flex="0.4" style={{ width: "100%" }} maxWidth={"sm"} bg="white" _dark={{
      bg:'coolGray.700'
    }} mt="2" borderRadius={'md'}>
      <Center p="2" width="100%" height="100%">
        <Image
          size={"md"}
          borderRadius={100}
          source={{ uri: img }}
          alt="Profile Pic"
        />
        <Text fontWeight={500} mb="2">
          Enter the {playerKey} name
        </Text>
        <Input
          mx="3"
          placeholder="Enter name here"
          onChangeText={(text) => handleChange(text)}
          value={name}
          w="80%"
          _dark={{
            borderColor:'white',
            placeholderTextColor:'white'
          }}
        />
      </Center>
    </Box>
  );
};

export default React.memo(PlayerNameInput);
