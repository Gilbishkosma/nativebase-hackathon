import React from "react";
import { Text, Box, Button, VStack, Spacer, ScrollView } from "native-base";
import { usePlayer } from "../../../contexts/PlayerContext";
import { actionCreator } from "../../../utils";
import PlayerNameInput from "./PlayerNameInput";
import NavBar from "../../NavBar";
import ScoreBoard from "../../ScoreBoard";

const AddPlayerNamesScreen = ({ navigation }) => {
  const { state, dispatch } = usePlayer();
  var isDisabled = false;
  for (var player in state?.players) {
    if (state?.players[player]?.name?.length === 0) {
      isDisabled = true;
      break;
    }
  }

  const playerInputs = React.useMemo(() => {
    return ["player1", "player2"];
  }, [state.playerCount]);

  return (
    <>
      <NavBar title="Enter Details" />
      <ScrollView
        style={{ flex: "0 0 100%" }}
        contentContainerStyle={{
          alignItems: "center",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          height: "100%",
        }}
      >
        <VStack alignItems="center" style={{ height: "100%" }}>
          {playerInputs.map((key, index) => (
            <PlayerNameInput
              playerKey={playerInputs[index]}
              dispatch={dispatch}
              name={state.players[playerInputs[index]].name}
              img={state.players[playerInputs[index]].img}
              key={key}
            />
          ))}
          <Button
            minWidth={200}
            my="5"
            disabled={isDisabled}
            bg={isDisabled ? "coolGray.300" : "primary.600"}
            onPress={() => navigation.navigate("game_screen")}
            _dark={{
              bg: isDisabled ? "coolGray.400" : "coolGray.700"
            }}
            _hover={{
              _dark:{
                bg:isDisabled ? "coolGray.400" : "coolGray.600"
              }
            }}
          >
            Start
          </Button>
        </VStack>
      </ScrollView>
    </>
  );
};

export default AddPlayerNamesScreen;
