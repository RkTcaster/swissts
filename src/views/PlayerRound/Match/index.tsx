import Select from '@/src/components/Select'
import css from './style.module.css'
import { Match } from '@/src/classes/Match'

type Props = {
  matches: Match[]
  onSelectChange: (key: string, value: string) => void
}



const MatchInput = ({ matches, onSelectChange }: Props) => {
  return (
    <>
      {matches.map((match, matchIndex) => {
        return (
          <div className={css.matchRoundContainer} key={matchIndex}>
            <div className={css.playerGroup}>
              <p className={css.selectLabel}>{match.player1.player.name}</p>
              <Select
                index={matchIndex}
                key={`${matchIndex}-player1`}
                onChange={(value) => onSelectChange(`${match.player1.player.name}`, value)}
              />
            </div>
            <div className={css.playerGroup}>
              <p className={css.selectLabel}>{match.player2.player.name}</p>
              <Select
                index={matchIndex}
                key={`${matchIndex}-player2`}
                onChange={(value) => onSelectChange(`${match.player2.player.name}`, value)}
              />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default MatchInput
