import { Tournament } from '@/classes/Tournament'
import React, { createContext, useContext } from 'react'

type TournamentContexType = {
  tournament: Tournament
  setTournament: React.Dispatch<React.SetStateAction<Tournament>>
}

export const TournamentContext = createContext<TournamentContexType | undefined>(undefined)

export const useTournament = () => {
  const context = useContext(TournamentContext)
  if (!context) {
    throw new Error('useTournament must be use inside a tournament provider')
  }
  return context
}
