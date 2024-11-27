import { Player } from './Player'

export class Match {
  public player1: { player: Player }
  public player2: { player: Player }
  public played: Boolean = false
  public unfairness: number = 0
  constructor({ player1, player2 }: { player1: Player; player2: Player }) {
    //revisar estoy definiendo wins 2 veces, puede ser util para compara matches.
    this.player1 = { player: player1 }
    this.player2 = { player: player2 }
    this.unfairness = Math.abs(player1.wins - player2.wins)
  }

  public setPlayed() {
    this.played = true
  }

  public calculateFairness() {
    //Tengo que revisar esta formula, probablem, el problema es cuando genero los resultados de la ronda
    this.unfairness = Math.abs(
      this.player1.player.wins * 100 +
        this.player1.player.gameWins -
        this.player2.player.wins * 100 -
        this.player2.player.gameWins
    )
  }

  private updateMatchResult({
    player1GameWins,
    player2GameWins,
  }: {
    player1GameWins: number
    player2GameWins: number
  }) {
    //Esto seguro se puede hacer mejor

    const player1 = this.player1.player
    const player2 = this.player2.player

    player1.gameWins += player1GameWins
    player1.gameLoss += player2GameWins
    player2.gameWins += player2GameWins
    player2.gameLoss += player1GameWins
    player1.addRival(player2)
    player2.addRival(player1)
  }

  private evaluateMatchResult({
    player1GameWins,
    player2GameWins,
  }: {
    player1GameWins: number
    player2GameWins: number
  }) {
    //Raro, esto se puede hacer mejor
    const player1 = this.player1.player
    const player2 = this.player2.player

    if (player1GameWins > player2GameWins) {
      player1.wins += 1
      player2.loss += 1
    } else if (player1GameWins < player2GameWins) {
      player2.wins += 1
      player1.loss += 1
    } else {
      player1.draws += 1
      player2.draws += 1
    }
  }

  private updateBuchholz() {
    this.player1.player.setBuchholz()
    this.player2.player.setBuchholz()
  }

  public setMatchResult({ player1GameWins, player2GameWins }: { player1GameWins: number; player2GameWins: number }) {
    this.updateMatchResult({ player1GameWins: player1GameWins, player2GameWins: player2GameWins })
    this.evaluateMatchResult({ player1GameWins: player1GameWins, player2GameWins: player2GameWins })
    this.updateBuchholz()
  }
}
