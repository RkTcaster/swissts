import { Player } from "./Player";

export class Match {
    public player1: { player: Player}
    public player2: { player: Player}
    public played: Boolean = false    
    constructor({ player1, player2 }: { player1: Player; player2: Player }) { //revisar estoy definiendo wins 2 veces, puede ser util para compara matches. 
      this.player1 = { player: player1}
      this.player2 = { player: player2}
    }
  
    // Codigo que saque creo que no se va a usar
    // public getWinner() {
    //   if (this.player1.wins > this.player2.wins) {
    //     return this.player1.player
    //   } else if (this.player1.wins < this.player2.wins) {
    //     return this.player2.player
    //   } else {
    //     return 'Tie'
    //   }
    // }
    // public setResult({player1Wins,player2Wins}:{player1Wins: number, player2Wins: number}) {
    //     this.player1.wins = player1Wins
    //     this.player2.wins = player2Wins
    // }


    public setPlayed() { //Cambiar nombre a avialable ? 
        this.played = true
    }
    

  }

// export class RoundMatch extends Match {
//   public roundVerification : Boolean = false

//   constructor(player1: Player, player2: Player, played: Boolean){
//     super({ player1, player2 })
//   }

//   public setRound() {
//     this.roundVerification = true
//   }
// }