import { Player } from "./Player";

export class Match {
  public player1: { player: Player };
  public player2: { player: Player };
  public played: Boolean = false;
  public unfairness: number = 0
  constructor({ player1, player2 }: { player1: Player; player2: Player }) {
    //revisar estoy definiendo wins 2 veces, puede ser util para compara matches.
    this.player1 = { player: player1 };
    this.player2 = { player: player2 };
    this.unfairness = Math.abs(player1.wins - player2.wins)
  }

  public setPlayed() {
    this.played = true;
  }

  public calculateFairness() { //Tengo que revisar esta formula, probablem, el problema es cuando genero los resultados de la ronda 
    this.unfairness = Math.abs(this.player1.player.wins*100 + this.player1.player.gameWins - this.player2.player.wins*100 -  this.player2.player.gameWins)
  }

  private updateMatchResult({player1GameWins,player2GameWins}:{player1GameWins:number,player2GameWins:number}) {
    this.player1.player.gameWins += player1GameWins
    this.player1.player.gameLoss += player2GameWins
    this.player2.player.gameWins += player2GameWins
    this.player2.player.gameLoss += player1GameWins
    this.player1.player.addRival(this.player2.player)
    this.player2.player.addRival(this.player1.player)
  }

  private evaluateMatchResult({player1GameWins,player2GameWins}:{player1GameWins:number,player2GameWins:number}) { //Raro, esto se puede hacer mejor 
    if (player1GameWins > player2GameWins) {
      this.player1.player.wins += 1
      this.player2.player.loss += 1
    } else if (player1GameWins < player2GameWins) {
      this.player2.player.wins += 1
      this.player1.player.loss += 1
    } else {
      this.player1.player.draws += 1
      this.player2.player.draws += 1
    }
  }

  private updateBuchholz() {
    this.player1.player.setBuchholz()
    this.player2.player.setBuchholz()
  }

  public setMatchResult({player1GameWins,player2GameWins}:{player1GameWins:number,player2GameWins:number}) {
    
    this.updateMatchResult({player1GameWins:player1GameWins,player2GameWins:player2GameWins})    
    this.evaluateMatchResult({player1GameWins:player1GameWins,player2GameWins:player2GameWins})
    this.updateBuchholz()
  }
}
