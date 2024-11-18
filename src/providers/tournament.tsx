import { Tournament } from '@/classes/Tournament'
import { TournamentContext } from '@/context/tournament'
import { ReactNode } from '@tanstack/react-router'
import { useState } from 'react'

type Props = { children: ReactNode }

export const TournamentProvider = ({ children }: Props) => {
  const [tournament, setTournament] = useState<Tournament>(new Tournament())
  return <TournamentContext.Provider value={{ tournament, setTournament }}>{children}</TournamentContext.Provider>
}
