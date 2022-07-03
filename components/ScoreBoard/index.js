import { Modal, Button, Image, Center, Text, HStack } from "native-base";
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
                Hurray ! Deepak WON 🥳
              </Text>
            </Center>
          </Modal.Header>
          <Modal.Body>
            <HStack space={3} justifyContent="center">
              <Center w="20" rounded="md" shadow={3}>
                <Button> Replay ? </Button>
              </Center>
              <Center w="20" rounded="md" shadow={3}>
                <Button> Restart !</Button>
              </Center>
              <Text> </Text>
            </HStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default ScoreBoard;
