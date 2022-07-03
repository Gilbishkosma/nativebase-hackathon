import React, { useEffect,useState } from 'react'
import { Button,VStack, ScrollView, Text } from "native-base";
import { usePlayer } from "../../../contexts/PlayerContext";
import PlayerCard from "./PlayerCard";
import NavBar from '../../NavBar';
import ScoreBoard from '../../ScoreBoard';

const GameScreen = ({navigation}) => {
    const {state,dispatch} = usePlayer();
    const [resetTimer,setResetTimer] = useState(false);
    const [showModel, setShowModel] = useState(false);
    const [winner,setWinner] = useState('');

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
        player2 : {...defaultValues,next:'player1'}
    }
    const [playerData,setPlayerData] = useState(twoPlayers)

    const playerInputs = React.useMemo(() => {
        return ['player1','player2']
    },[state.playerCount])


    useEffect(() => {
        let player1Life = playerData.player1.life 
        let player2Life = playerData.player2.life 
        if(state.playerCount == 2 && player2Life == 0){
            setWinner({name:state.players.player1.name,img:state.players.player1.img})
            setShowModel(true)
        }else if(state.playerCount == 2 && player1Life == 0){
            setWinner({name:state.players.player2.name,img:state.players.player2.img})
            setShowModel(true)
        }
    },[playerData.player1.life,playerData.player2.life])

    const onReplay = () => {
        navigation.navigate('add_name')
    }

    return <><NavBar title="Game Screen" />
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
            <ScoreBoard showModel={showModel} setShowModel={setShowModel} winner={winner} onReplay={onReplay} />
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