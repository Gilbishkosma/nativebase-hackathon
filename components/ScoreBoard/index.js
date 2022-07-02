import { Modal, Button, Image, Center, Text, VStack } from "native-base";
import React, { useState } from "react";

const ScoreBoard = () => {
  const [showModel, setShowModel] = useState(false);
  return (
    <>
      <Button onPress={() => setShowModel(true)}>Button</Button>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>
            <Center>
              <Image
                size={60}
                borderRadius={100}
                source={{
                  uri: "https://wallpaperaccess.com/full/317501.jpg",
                }}
                alt="Alternate Text"
              />
              <Text pt="4" bold>
                1. Deepak Won
              </Text>
            </Center>
          </Modal.Header>
          <Modal.Body>
            <VStack alignItems="center" space={4}>
              <Center w="64" h="10" bg="#D9D9D9" rounded="md" shadow={3}>
                <Text bold>2. Gylbys</Text>
              </Center>
              <Center w="64" h="10" bg="#D9D9D9" rounded="md" shadow={3}>
                <Text bold>3. Mang</Text>
              </Center>
              <Text> </Text>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default ScoreBoard;
