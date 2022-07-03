import { Modal, Button, Image, Center, Text, HStack } from "native-base";
import React from "react";

const ScoreBoard = ({showModel,setShowModel,winner,onReplay}) => {
  console.log(winner)
  return (
    <>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>
            <Center>
              <Image
                size={60}
                borderRadius={100}
                source={{
                  uri: winner?.img ? winner?.img : "https://wallpaperaccess.com/full/317501.jpg",
                }}
                alt="Alternate Text"
              />
              <Text pt="4" bold>
                Hurray ! {winner?.name ? winner?.name : 'You'} WON 🥳
              </Text>
            </Center>
          </Modal.Header>
          <Modal.Body>
            <HStack space={3} justifyContent="center">
              <Center w="20" rounded="md" shadow={3}>
                <Button onPress={onReplay}> Restart ? </Button>
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
