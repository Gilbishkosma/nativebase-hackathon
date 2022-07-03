import React from "react";
import { HStack, Box, Text, StatusBar } from "native-base";
import ToggleDarkMode from "../ToggleDarkMode";

function NavBar({title}) {
  return (
    <>
    <Box bg="#50BFC3" pt="5" _dark={{
      bg:"coolGray.800"
    }}/>
    <StatusBar bg="#50BFC3" barStyle="light-content" />
      
      <Box bg="#6200ee" />
      <HStack
        bg="#50BFC3"
        _dark={{
          bg: "coolGray.800",
        }}
        px="1"
        py="3"
        justifyContent="space-between"
        w="100%"
      >
        <HStack alignItems="center">
          <Text color="white" fontSize="20" fontWeight="bold" pl="1">
            {title ? title : 'Home'}
          </Text>
        </HStack>
        <HStack>
          <ToggleDarkMode />
        </HStack>
      </HStack>
    </>
  );
}

export default NavBar;
