import { ReactNode, useState } from 'react'
import { Tournament } from '../classes/Tournament'
import { TournamentContext } from '../context/tournament'

type Props = { children: ReactNode }

export const TournamentProvider = ({ children }: Props) => {
  const [tournament, setTournament] = useState<Tournament>(new Tournament())
  return <TournamentContext.Provider value={{ tournament, setTournament }}>{children}</TournamentContext.Provider>
}
