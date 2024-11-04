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

  private getRandomMatchAfterSwiss() {
    let ArrayLength = gameUtils.createNumberArray({
      unplayerMatchLength: this.tempUnplayedMatches.length,
    });
    const randomInt = gameUtils.getRandomInt(ArrayLength.length, this.seed);
    const randomMatch = this.tempUnplayedMatches[randomInt];
    ArrayLength.splice(randomInt, 1);
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
    const filteredMatches = this.tempUnplayedMatches.filter(
      (tempUnplayedMatches) => {
        return !this.matches.some((match) => {
          return gameUtils.arePlayersDuplicatedInMatches({
            match1: tempUnplayedMatches,
            match2: match,
          });
        });
      }
    );
    this.tempUnplayedMatches = filteredMatches;
  }

  private resetMatchesAndUnplayedMatches(): void {
    //esto esta bien de reset ?
    this.matches = [];
    this.tempUnplayedMatches = [...this.unplayedMatches];
  }

  public getMatchesAfterSwiss() {
    let i = 0;
    while (i < this.unplayedMatches.length && this.matches.length < 4) {
      let playersWithoutMatch = new Set(this.players);
      this.matches.push(this.unplayedMatches[i]);

      while (playersWithoutMatch.size >= 1) {
        this.setUnplayedMatchesByPlayedMatchesAfterSwiss();
        playersWithoutMatch = this.tempUnplayedMatches.reduce((acc, curr) => {
          acc.add(curr.player1.player);
          acc.add(curr.player2.player);
          return acc;
        }, new Set<Player>());
        this.getRandomMatchAfterSwiss();
      }
      if (
        this.matches[this.matches.length - 1] === undefined &&
        this.matches.length === 5
      ) {
        this.matches.splice(4, 1);
      } else if (
        this.matches[this.matches.length - 1] === undefined &&
        this.matches.length === 4
      ) {
        this.resetMatchesAndUnplayedMatches();
        i += 1;
      }
    }
  }
}
