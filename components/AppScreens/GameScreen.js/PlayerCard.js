import {Box,Flex,HStack,Text,Image, Center, Input, Button} from 'native-base'
import { useEffect, useState } from 'react';
import { usePlayer } from '../../../contexts/PlayerContext'
import wordExist from 'word-exists';



// const wordCheck = checkIfWord('en')
const PlayerCard = ({playerKey,playerData,setPlayerData,setResetTimer,interval}) => {
    const {state,dispatch} = usePlayer();
    const displayTimer = playerData[playerKey].isCurrent;
    const isSubmitted = playerData[playerKey].isSubmitted;
    const [timer,setTimer] = useState(20);
    console.log({displayTimer,isSubmitted,timer})
    const handleChangeText = (value) => {
        if(value.length > 0){
            setPlayerData(data => ({...data,[playerKey]:({...data[playerKey],word:value})}))
        }
    }

    useEffect(() => {
        let localTimer = 20
        let interval = undefined;
        if(playerData[playerKey].isCurrent){
            interval = setInterval(() => { 
                if(playerData[playerData[playerKey].next].life == 0){
                    clearInterval(interval)
                }else{
                    if(localTimer === 0){
                        clearInterval(interval)
                        setTimer(20)
                        setPlayerData(data => ({...data,[data[playerKey].next]:({...(data[data[playerKey].next]),isSubmitted:false,isCurrent:true,word:data[playerKey].word.charAt(data[playerKey].word.length-1)}),[playerKey]:({...data[playerKey],isCurrent:false,life:data[playerKey].life - 1})}))
                    }else{
                        setTimer(localTimer-1)
                        localTimer -= 1
                    }
                }
                
        },1000)
        }
        return () => {if(interval) clearInterval(interval)}
    },[playerData[playerKey].isCurrent])


    const handleSubmit = () => {
        if(playerData[playerKey].word.length <= 3){
            return;
        }
        let score = playerData[playerKey].score;
        let life = playerData[playerKey].life;
        if(wordExist(playerData[playerKey].word)){
            score = score + 1
        }else{
            life = life - 1
        }
        setPlayerData(data => ({...data,[data[playerKey].next]:({...(data[data[playerKey].next]),isSubmitted:false,isCurrent:true,word:data[playerKey].word.charAt(data[playerKey].word.length -1)}),[playerKey]:({...data[playerKey],isSubmitted:true,isCurrent:false,score:score,life:life})}))
    }

    return <Box flex="0.4" style={{width:'100%'}} maxWidth={"sm"} bg={displayTimer ? "pink.50" : 'white'} _dark={{bg:displayTimer ? "coolGray.500" : "coolGray.400"}} mt="2" borderRadius={"md"} borderColor="black" borderWidth={displayTimer ? '0.5' : '0'}>
            <Flex flex="1">
                <HStack alignItems={"center"} justifyContent={"space-between"} px="2" pt="5">
                    <Flex space="5" flex={0.3} bg={'coolGray.300'} _dark={{bg:'coolGray.700'}} borderRadius={'20px'} pr="10" justifyContent={"space-between"} direction='row' alignItems={"center"}> 
                    <Image size={'xs'} borderRadius="full" bg="primary.200" source={{ uri: state.players[playerKey].img }} alt="Profile Pic" />
                    <Text>{state.players[playerKey].name}</Text> 
                    </Flex>
                    <Text bg="coolGray.300" _dark={{bg:'coolGray.700'}} borderRadius="2xl" px="5" py="2">{playerData[playerKey].score}</Text>
                </HStack>
                <Center height={"70%"}>
                    {displayTimer && <Text padding={"3"} borderWidth={"1"} borderRadius="full" fontWeight={600} my="5">{timer}</Text>}
                    <HStack space="2">
                       <Input id={playerKey} autoFocus={true} onSubmitEditing={handleSubmit} minWidth={200} _dark={{borderColor:'white',placeholderTextColor:'white'}} isDisabled={!displayTimer || isSubmitted} placeholder='Enter your Word' focusable={true} onChangeText={handleChangeText} value={playerData[playerKey].word} /> 
                        <Button onPress={handleSubmit} isDisabled={!displayTimer || isSubmitted || playerData[playerKey]?.word?.length <= 3}>Submit</Button>
                    </HStack>
                    
                    <Text mt="5" fontWeight={"light"}>Enter any word(more than 3letters) before time gets out</Text>
                    <Text fontWeight={'bold'} mt="2">Remaining Chance: {playerData[playerKey].life}</Text>
                </Center>
                
            </Flex>
        </Box>
}

export default PlayerCard;