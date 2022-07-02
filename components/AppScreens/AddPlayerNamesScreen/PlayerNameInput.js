import React from 'react'
import {Box,Center,Text,Image,Input} from 'native-base'
import {usePlayer} from '../../../contexts/PlayerContext'
import { actionCreator } from '../../../utils'

const PlayerNameInput = ({playerKey}) => {
    const {state,dispatch} = usePlayer()
    const {name,img} = state.players[playerKey]

    const handleChange = (value) => {
        dispatch(actionCreator('addName',{name:value,playerKey}))
    }

    return <Center p="2" width="100%" height="100%">
        <Image size={'md'} borderRadius={100} source={{ uri: img }} alt="Profile Pic" />
        <Text fontWeight={500} mb="2">Enter the {playerKey} name</Text> 
        <Input mx="3" placeholder="Enter name here" onChange={(event) =>  handleChange(event.target.value)} value={name} w="80%" />
    </Center>
}

export default React.memo(PlayerNameInput)