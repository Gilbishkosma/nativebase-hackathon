import { Text, Box, Button } from "native-base"
import { usePlayer } from "../../../contexts/PlayerContext"
import { actionCreator } from "../../../utils";

const AddPlayerNamesScreen = () => {
    const {state,dispatch} = usePlayer();
    const handleClick= () => {
        dispatch(actionCreator('addName',{player:'player2',name:'bunty'}))
    }
    return <Box>
            <Text>Select Player</Text>
            <Button onPress={handleClick}>Update</Button>
        </Box>
}

export default AddPlayerNamesScreen