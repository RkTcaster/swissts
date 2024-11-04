import { gameUtils } from "../source/utils/utils";
import { Match } from "./Match";
import { Player } from "./Player";

export class Round {
  private unplayedMatches: Match[] = [];
  public matches: Match[] = [];
  public roundNumber: number = 0;
  private seed: number;
  private players: Player[];
  private tempUnplayedMatches: Match[] = [];

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
    this.tempUnplayedMatches = [...unplayedMatches];
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

  private getRandomMatchAfterSwiss({ ArrayLength }: { ArrayLength: any }) {
    let randomInt = gameUtils.getRandomInt(ArrayLength.length, this.seed);

    let randomMatch = this.tempUnplayedMatches[randomInt];
    ArrayLength.splice(randomInt, 1);
    this.matches.push(randomMatch);
    console.log(this.matches);
    
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


    const filteredMatches = this.tempUnplayedMatches.filter((unplayedMatch) => {
      return !this.matches.some((match) => {
        return gameUtils.arePlayersDuplicatedInMatches({
          match1: unplayedMatch,
          match2: match,
        });
      });
    });
    this.tempUnplayedMatches = filteredMatches;

    //   const filteredMatches = this.unplayedMatches.filter((unplayedMatch) => {
    //     return !this.tempWhile.some((match) => {
    //       return gameUtils.arePlayersDuplicatedInMatches({
    //         match1: unplayedMatch,
    //         match2: match,
    //       });
    //     });
    //   });
    //   this.unplayedMatches = filteredMatches;
    //   console.log(filteredMatches);
  }
  private resetmatches(): void {
    //esto esta bien de reset ?
    this.matches = [];
  }

  public getMatchesAfterSwiss() {
    console.log("entro getMatcheAferSwiss");
    
    let playersWithoutMatch = new Set(this.players);
    let ArrayLength = gameUtils.createNumberArray({
      unplayerMatchLength: this.tempUnplayedMatches.length,
    });
    
    console.log(this.matches);
    debugger
    //Start Match:

    while (playersWithoutMatch.size >= 1) {

      this.getRandomMatchAfterSwiss({ArrayLength:ArrayLength});

      this.setUnplayedMatchesByPlayedMatchesAfterSwiss();
      playersWithoutMatch = this.tempUnplayedMatches.reduce((acc, curr) => {
        acc.add(curr.player1.player);
        acc.add(curr.player2.player);
        return acc;
      }, new Set<Player>());

      // console.log(this.matches);
      // if (
      //   this.matches[this.matches.length - 1] === undefined &&
      //   this.matches.length <= 4
      // ) {
      //   // console.log("Entro if");
        
      //   this.resetmatches();
      // }
    }
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
