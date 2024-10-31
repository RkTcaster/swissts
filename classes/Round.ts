import { gameUtils } from "../source/utils/utils";
import { Match } from "./Match";
import { Player } from "./Player";

export class Round {
  private unplayedMatches: Match[] = [];
  public matches: Match[] = [];
  public roundNumber: number = 0;
  private seed: number;
  private players: Player[];
  private tempWhile: Match[] = [];

  constructor({
    unplayedMatches,
    seed,
    players,
  }: {
    unplayedMatches: Match[];
    seed: number;
    players: Player[];
  }) {
    this.unplayedMatches = unplayedMatches;
    this.roundNumber += 1;
    this.seed = seed;
    this.players = players;
  }

  private setUnplayedMatchesByPlayedMatches() {
    const filteredMatches = this.unplayedMatches.filter((unplayedMatch) => {
      return !this.matches.some((match) => {
        return gameUtils.arePlayersDuplicatedInMatches({
          match1: unplayedMatch,
          match2: match,
        });
      });
    });
    this.unplayedMatches = filteredMatches;
  }

  private getRandomMatch() {
    const roundMatchLength = this.unplayedMatches.length;
    const randomMatch =
      this.unplayedMatches[gameUtils.getRandomInt(roundMatchLength, this.seed)];
    this.matches.push(randomMatch);
  }

  public getRandomMatches() {
    let playersWithoutMatch = new Set(this.players);
    while (playersWithoutMatch.size >= 1) {
      this.getRandomMatch();
      this.setUnplayedMatchesByPlayedMatches();

      playersWithoutMatch = this.unplayedMatches.reduce((acc, curr) => {
        acc.add(curr.player1.player);
        acc.add(curr.player2.player);
        return acc;
      }, new Set<Player>());
    }
  }

  public filterMatchesByWins() {
    this.unplayedMatches = gameUtils.sameWinsMatches({
      unplayedMatches: this.unplayedMatches,
    });
  }

  public getPairedMatches() {
    let playersWithoutMatch = new Set(this.players);
    this.filterMatchesByWins();
    while (playersWithoutMatch.size >= 1) {
      this.getRandomMatch();
      this.setUnplayedMatchesByPlayedMatches();

      playersWithoutMatch = this.unplayedMatches.reduce((acc, curr) => {
        acc.add(curr.player1.player);
        acc.add(curr.player2.player);
        return acc;
      }, new Set<Player>());
    }
  }

  private setUnplayedMatchesByPlayedMatchesAfterSwiss() {
    const filteredMatches = this.unplayedMatches.filter((unplayedMatch) => {
      return !this.tempWhile.some((match) => {
        return gameUtils.arePlayersDuplicatedInMatches({
          match1: unplayedMatch,
          match2: match,
        });
      });
    });
    this.unplayedMatches = filteredMatches;
    console.log(filteredMatches);
    
  }

  public getMatchesAfterSwiss() {
    //Esto es testeo, probablemente hay que refactorizar
    let playersWithoutMatch = new Set(this.players);
    //    while (this.tempWhile.length !== 4 || arrayNumbersLenght.length !== 0 ) {

    while (playersWithoutMatch.size >= 1) {
      // let arrayNumbersLenght = gameUtils.createNumberArray({
      //   unplayerMatchLength: this.unplayedMatches.length,
      // });
      // let randomValue = gameUtils.getRandomInt(
      //   arrayNumbersLenght.length,
      //   this.seed
      // );
      // let tempMatchs = this.unplayedMatches[arrayNumbersLenght[randomValue]];
      // this.tempWhile.push(tempMatchs); //Esto es mal seguro
      // this.setUnplayedMatchesByPlayedMatchesAfterSwiss();
      this.getRandomMatch();
      this.setUnplayedMatchesByPlayedMatchesAfterSwiss();

      playersWithoutMatch = this.unplayedMatches.reduce((acc, curr) => {
        acc.add(curr.player1.player);
        acc.add(curr.player2.player);
        return acc;
      }, new Set<Player>());
    }
  }
  //console.log(arrayLength[gameUtils.getRandomInt(this.seed)]); Tengo que trabajar esto con un while y un if que condiciones la respuesta del while, lo que puede ser peligroso.

  // while (playersWithoutMatch.size >= 1) {
  //   this.getRandomMatch();
  //   this.setUnplayedMatchesByPlayedMatches();

  //   playersWithoutMatch = this.unplayedMatches.reduce((acc, curr) => {
  //     acc.add(curr.player1.player);
  //     acc.add(curr.player2.player);
  //     return acc;
  //   }, new Set<Player>());
  // }
}
