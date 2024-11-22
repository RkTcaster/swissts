import { Player } from '@/src/classes/Player'

//This is not arranged => also need to add loss and draws in the scores
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
