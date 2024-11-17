import { Tournament } from "../Tournament";

export class ResultCapture {
  public round: HTMLDivElement;
  public tournament: Tournament;
  constructor({
    round,
    tournament,
  }: {
    round: HTMLDivElement;
    tournament: Tournament;
  }) {
    this.round = round;
    this.tournament = tournament;
  }

  public getDivElements() {
    const tournamentRound = this.round.querySelectorAll("select");
    const roundNumber = this.tournament.rounds.length -1
    const matchArray = this.tournament.rounds[roundNumber].matches
    let resultArray = [] as number[] //Casteo por acá 

    tournamentRound.forEach((result) => {
      resultArray.push(Number(result.value))      
    });    
    
    for (let match = 0; match < resultArray.length; match++) {
        let matchNumber = Math.floor(match/2)
        if (match%2 === 0) {
            matchArray[matchNumber].player1.player.setWins = resultArray[match]            
        } else if (match%2 === 1 ) {
            matchArray[matchNumber].player2.player.setWins = resultArray[match]    
        }

  }
    for (let match = 0; match < matchArray.length; match++) {
        if (matchArray[match].player1.player.setWins > matchArray[match].player2.player.setWins) {
            matchArray[match].player1.player.addWin()
        } else if (matchArray[match].player2.player.setWins > matchArray[match].player1.player.setWins) {
            matchArray[match].player2.player.addWin()
        }
    }

  this.tournament.createRound()  
  
}
}
