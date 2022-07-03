import React, { useEffect,useState } from 'react'
import { Button,VStack, ScrollView, Text } from "native-base";
import { usePlayer } from "../../../contexts/PlayerContext";
import PlayerCard from "./PlayerCard";
import NavBar from '../../NavBar';
import {actionCreator} from '../../../utils'

const GameScreen = () => {
    const {state,dispatch} = usePlayer();
    const [resetTimer,setResetTimer] = useState(false);

    const defaultValues = {
        word:"",
        life:3,
        isSubmitted:false,
        isCurrent:false,
        next:'player2',
        score:0
    }

    const twoPlayers = {
        player1 : {...defaultValues,isCurrent:true,next:'player2'},
        player2 : {...defaultValues,next: state.playerCount == 2 ? 'player1' : 'player3'}
    }
    const threePlayers = {
        ...twoPlayers,
        player3: {...defaultValues,next:'player1'}
    }
    const [playerData,setPlayerData] = useState(() => state.playerCount == 2 ? twoPlayers : threePlayers)

    const playerInputs = React.useMemo(() => {
        const players = state.playerCount == 2 ? ['player1','player2'] : ['player1','player2','player3']
        return players
    },[state.playerCount])


    useEffect(() => {
        let player1Life = playerData.player1.life 
        let player2Life = playerData.player2.life 
        let player3Life = playerData?.player3?.life ? playerData.player3.life : 0
        if(state.playerCount == 2 && player2Life == 0){
            alert('Player 1 Win')
        }else if(state.playerCount == 2 && player1Life == 0){
            alert('Player 2 Win')
        }else if(player1Life == 0 && player2Life == 0){
            alert('Player 3 Win')
        }else if(player1Life == 0 && player3Life == 0){
            alert('Player 2 Win')
        }else if(player2Life == 0 && player3Life == 0){
            alert('Player 1 Win')
        }
    },[playerData.player1.life,playerData.player2.life,playerData?.player3?.life])

    return <><NavBar />
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
            {
            playerInputs.map((key,index) => (
                <PlayerCard key={key} playerKey={key} setPlayerData={setPlayerData} playerData={playerData} setResetTimer={setResetTimer} />
            ))
            }
            </VStack>
        </ScrollView>
        </>
}

export default GameScreen;