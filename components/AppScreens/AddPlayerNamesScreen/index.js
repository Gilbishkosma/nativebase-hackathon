import { Text, Box, Button,VStack, Spacer,ScrollView } from "native-base"
import { usePlayer } from "../../../contexts/PlayerContext"
import { actionCreator } from "../../../utils";
import PlayerNameInput from "./PlayerNameInput";
import NavBar from '../../NavBar'

const AddPlayerNamesScreen = ({navigation}) => {
    const {state} = usePlayer();
    console.log(state)
    var isDisabled = false;
    for (var player in state?.players) {
        if (state?.players[player]?.name?.length === 0) {
            isDisabled = true;
            break;
        }
    }

    return <>
        <NavBar />
        <ScrollView
            style={{ flex: '0 0 100%' }}
            contentContainerStyle={{
                alignItems: 'center',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%',
                height: '100%',
              }}
        >
            <VStack alignItems="center" style={{height: '100%'}}>
            {Object.keys(state.players).map(key => (
            <Box key={key} flex="0.5" style={{width:'100%'}} maxWidth={"sm"} bg="white" mt="2">
                <PlayerNameInput playerKey={key}  />
            </Box>)
            )}
            <Button mt="2" mb="5" disabled={isDisabled} bg={isDisabled ? 'coolGray.300' : 'primary.600'} onPress={() => navigation.navigate('game_screen')}>Start</Button>
            </VStack>
            
        </ScrollView>
        </>
}

export default AddPlayerNamesScreen