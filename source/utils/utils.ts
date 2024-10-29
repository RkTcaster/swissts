import { Match } from "../../classes/Match";
import { Player } from "../../classes/Player";

const getRandomInt = (max: number, seed: number) => {
  //Posibles seeds: fecha transformada en numero .getTime seguro hay bardos de formato
  //esto creo que esta mal definido por alguna razon {max,seed}:{max: number, seed: number} Esto es solo para objetos ?
  var seedCalculation = (seed * 9301 + 49297) % 233280;
  var randomNumber = Math.floor(0 + (seedCalculation / 233280) * max);

  return randomNumber;
};

const get5DigitSeed = ({ date }: { date: string }): number => {
  return Number(new Date(date).getTime().toString().slice(-5));
};

const arePlayersDuplicatedInMatches = ({
  match1,
  match2,
}: {
  match1: Match;
  match2: Match;
}): boolean => {
  return (
    match1.player1.player.name === match2.player1.player.name ||
    match1.player1.player.name === match2.player2.player.name ||
    match1.player2.player.name === match2.player1.player.name ||
    match1.player2.player.name === match2.player2.player.name
  );
};

const filterByPlayedMatch = ({
  unplayedMatches,
}: {
  unplayedMatches: Match[];
}): Match[] => {
  return unplayedMatches.filter((match) => {
    return match.played !== true;
  });
};

const sameWinsMatches = ({
  unplayedMatches,
}: {
  unplayedMatches: Match[];
}): Match[] => {
  //tipado porque se puede devovler algo vacio

  return unplayedMatches.filter((unplayedMatch) => {
    return (
      unplayedMatch.player1.player.wins === unplayedMatch.player2.player.wins
    );
  });
};

const calculateRoundsForSwiss = ({
  players,
}: {
  players: Player[];
}): number => {
  if (Number.isInteger(Math.log2(players.length))) {
    return Math.log2(players.length);
  }
  return -1;
};

const createNumberArray = ({
  unplayerMatchLength
}: {
  unplayerMatchLength: number 
}) : number[] => {
  return Array.from(Array(unplayerMatchLength).keys())
}

export const gameUtils = {
  getRandomInt,
  get5DigitSeed,
  arePlayersDuplicatedInMatches,
  filterByPlayedMatch,
  sameWinsMatches,
  calculateRoundsForSwiss,
  createNumberArray,
  
};
