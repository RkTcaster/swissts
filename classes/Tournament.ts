import { gameUtils } from "../source/utils/utils";
import { Match } from "./Match";
import { Player } from "./Player";
import { Round } from "./Round";

export class Tournament {
  public playersString: string[] = [];
  public players: Player[] = [];
  public unplayedMatches: Match[] = [];
  private returnRound: Match[] = [];
  private seed: number | undefined = undefined;
  public rounds: Round[] = [];

  constructor({ playersString }: { playersString: string[] }) {
    this.playersString = playersString;
    this.createPlayers();
    this.setAllMatchMatrix();
  }

  private createPlayers() {
    this.players = this.playersString.map(
      (name) => new Player({ name, wins: 0 })
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
    this.seed = gameUtils.get5DigitSeed({ date });
  }

  public getRandomRound() {
    if (!this.seed) throw new Error("Seed not found");
    const newRound = new Round({
      unplayedMatches: this.unplayedMatches,
      seed: this.seed,
      players: this.players,
    });
    this.rounds.push(newRound);
    this.rounds.map((round) => {
      round.getRandomMatches();
      return round.matches;
    });
  }

  public getNextRoundSameWins() {
    if (!this.seed) throw new Error("Seed not found"); //No se si vale la pena checkear el seed 2 veces
    const newRound = new Round({
      unplayedMatches: this.unplayedMatches,
      seed: this.seed,
      players: this.players,
    });
    this.rounds.push(newRound);

    this.rounds.map((round) => {
      round.getPairedMatches();
      return round.matches;
    });
  }

  public filterByPlayedMatch() {
    if (this.rounds.length !== 0) {
      this.unplayedMatches = gameUtils.filterByPlayedMatch({
        unplayedMatches: this.unplayedMatches,
      });
    }
  }

  public createRound() {
    this.filterByPlayedMatch();

    if (this.rounds.length === 0) {
      console.log("entro random");

      this.getRandomRound();
    } else if (
      gameUtils.calculateRoundsForSwiss({ players: this.players })  === -1 ||
      gameUtils.calculateRoundsForSwiss({ players: this.players }) <= this.rounds.length
    ) {
      console.log("entro else if -1");

      this.getRandomRound();
    } else if (
      gameUtils.calculateRoundsForSwiss({ players: this.players }) >
      this.rounds.length
    ) {
      console.log("entro else if getnextroundsamewins");

      this.getNextRoundSameWins();
    }
  }

  public createTestRound() {
    if (!this.seed) throw new Error("Seed not found");
    const testRound = new Round({
      unplayedMatches: this.unplayedMatches,
      seed: this.seed,
      players: this.players,
    });
    return testRound;
  }
}
