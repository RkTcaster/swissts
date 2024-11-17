import { gameUtils } from "@/utils/utils";
import { Match } from "./Match";
import { Player } from "./Player";
import { Round } from "./Round";

export class Tournament {
  public playersString: string[] = [];
  public players: Player[] = [];
  public unplayedMatches: Match[] = [];
  private returnRound: Match[] = [];
  private seed: number;
  public rounds: Round[] = [];

  constructor({
    playersString,
    date,
  }: {
    playersString: string[];
    date: string;
  }) {
    this.playersString = playersString;
    this.createPlayers();
    this.setAllMatchMatrix();
    this.seed = this.setSeed({ date });
  }

  private createPlayers() {
    this.players = this.playersString.map(
      (name) => new Player({ name, wins: 0, setWins: 0, setLoss:0 })
    );
  }

  private setAllMatchMatrix() {
    const games = [] as Match[];
    this.players.forEach((currPlayer) => {
      this.players.forEach((oponentPlayer) => {
        if (
          currPlayer !== oponentPlayer &&
          !games.some(
            (game) =>
              (game.player1.player === currPlayer &&
                game.player2.player === oponentPlayer) ||
              (game.player1.player === oponentPlayer &&
                game.player2.player === currPlayer)
          )
        ) {
          games.push(
            new Match({ player1: currPlayer, player2: oponentPlayer })
          );
        }
      });
    });
    this.unplayedMatches = games;
  }

  public getUnplayedMatches() {
    return this.unplayedMatches;
  }

  public showRound() {
    return this.returnRound;
  }

  public setSeed({ date }: { date: string }) {
    return gameUtils.get5DigitSeed({ date });
  }

  private getNewRound() {
    return new Round({
      unplayedMatches: this.unplayedMatches,
      seed: this.seed,
      players: this.players,
      roundUnfairness: 0,
    });
  }

  private roundNumber(){
    const roundLenght = this.rounds.length
    this.rounds[roundLenght-1].roundNumber = roundLenght
  }

  private getFirstRound() {
    const newRound = this.getNewRound();
    newRound.getRandomMatches();
    this.rounds.push(newRound);
    this.roundNumber()
  }

  private getNextRoundSameWins() {
    const newRound = this.getNewRound();
    newRound.getPairedMatches();
    this.rounds.push(newRound);
    this.roundNumber()
  }

  private getRoundAfterSwiss() {
    const newRound = this.getNewRound();
    newRound.getRound();
    this.rounds.push(newRound);
    this.roundNumber()
  }

  private filterByPlayedMatch() {
    if (this.rounds.length !== 0) {
      this.unplayedMatches = gameUtils.filterByPlayedMatch({
        unplayedMatches: this.unplayedMatches,
      });
    }
  }

  public createRound() {
    this.filterByPlayedMatch();
    const roundsForSwiss = gameUtils.calculateRoundsForSwiss({
      players: this.players,
    });
    if (this.rounds.length === 0) {
      this.getFirstRound();
    } else if (roundsForSwiss === undefined || roundsForSwiss <= this.rounds.length) {
      this.getRoundAfterSwiss();
    } else if (roundsForSwiss > this.rounds.length) {
      this.getNextRoundSameWins();
    }
  }
}
