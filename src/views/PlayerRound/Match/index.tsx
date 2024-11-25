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
      <div style={{ display: 'flex', gap: '12px' }}>
        {matches.map((match, matchIndex) => {
          const playersArray = [match.player1.player.name, match.player2.player.name]
 
          return playersArray.map((player) => {
            console.log(player)
            return (
              <div className={css.title} key={matchIndex}>
                <div>
                  <p className={css.selectLabel}>{player}</p>
                </div>
                <Select index={matchIndex} key={player} onChange={(value) => onSelectChange(`${player}`, value)} />
              </div>
            )
          })
        })}

        {/* {matches.map((match) => {
          const playersArray = [match.player1.player.name, match.player2.player.name] //Esto seguro se puede hacer de otra manera
          return (playersArray.map((player) => {
            <div style={{ display: 'grid', gap: '12px' }} className='flex' key={matchIndex}>
              <div>
                <p className={css.selectLabel}>{player}</p>
                <Select
                  index={matchIndex}
                  key={player}
                  onChange={(value) => onSelectChange(`${player}`, value)}
                />
              </div>
            </div>
          })
        })
      } */}
      </div>
    </>
  )
}

{
  /* <div style={{ display: 'grid', gap: '12px' }} className='flex' key={matchIndex}>
  <div>
    <p className={css.selectLabel}>{playersArray[0]}</p>
    <Select
      index={matchIndex}
      key={playersArray[0]}
      onChange={(value) => onSelectChange(`${playersArray[0]}`, value)}
    />
  </div>
</div> */
}
{
  /* <div>
<p className={css.selectLabel}>{playersArray[1]}</p>
<Select
  index={matchIndex}
  key={playersArray[1]}
  onChange={(value) => onSelectChange(`${playersArray[1]}`, value)}
/>
</div> */
}
export default MatchInput
