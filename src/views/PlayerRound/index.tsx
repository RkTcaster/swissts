import { Player } from '@/src/classes/Player'

//If this wokrs, we can delete PlayerInputField
type Props = {
  players: Player[] 
}

const PlayerScoreDiv = ({ players }: Props) => {
  return (
    <div>
      {players.map((player, playerIndex) => (
        <div key={playerIndex} style={{ display: 'flex', gap: '12px' }}>
          <div>{player.name}</div>
          <div>
            {player.wins}-{player.setWins}-{player.setLoss}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayerScoreDiv
