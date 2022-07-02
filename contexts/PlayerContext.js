import * as React from 'react'

const PlayerContext = React.createContext()


const defaultPlayerState = {
    name:'',
    score:'',
    hasLost:false,
    lifeCount:3
}

// if playerCount is 2
const twoPlayers = {
    player1:defaultPlayerState,
    player2:defaultPlayerState
}

// if playerCount is 3
const threePlayers = {...twoPlayers,player3:defaultPlayerState}

function PlayerReducer(state, action) {
  const {type,payload} = action;
  switch (type) {
    case 'changePlayerCount': {
      let {playerCount} = payload;
      return {...state,playerCount,players: playerCount === 2 ? twoPlayers : threePlayers }
    }
    case 'addName': {
      const {player,name} = payload 
      const updatedPlayer = {...state.players,[player]:{...state.players[player],name}} 
      return {...state,players:updatedPlayer}
    }
    case 'updateScore':{
      const {player,score} = payload 
      const updatedPlayer = {...state.players,[player]:{...state.players[player],score}} 
      return {...state,players:updatedPlayer}
    }
    case 'updatePlayingStatus':{
        const {player} = payload 
        const updatedPlayer = {...state.players,[player]:{...state.players[player],hasLost:true}} 
        return {...state,players:updatedPlayer}
    }
    case 'updateLifeCount':{
        const {player,lifeCount} = payload 
        const updatedPlayer = {...state.players,[player]:{...state.players[player],lifeCount}} 
        return {...state,players:updatedPlayer}
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

const initialState = {
    playerCount:2,
    players:twoPlayers
}

function PlayerProvider({children}) {
  const [state, dispatch] = React.useReducer(PlayerReducer, initialState)
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = {state, dispatch}
  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}

function usePlayer() {
  const context = React.useContext(PlayerContext)
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider')
  }
  return context
}

export {PlayerProvider, usePlayer}