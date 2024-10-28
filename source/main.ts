import { Match } from "../classes/Match";
import { Player } from "../classes/Player";
import { Round } from "../classes/Round";
import { Tournament } from "../classes/Tournament";
import { gameUtils } from "./utils/utils";

const playersString = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"];

const tournamentDate = "2016-07-19T20:23:01.804Z";

const tournament = new Tournament({ playersString: playersString }); //cambie la entrada aplayerStrings y creo que es peor. Hay que checkearlo.

tournament.setSeed({ date: tournamentDate }); //Meter date en tournament? Esto permite hacer privado al metodo getSeed pero aumenta en 1 la cantidad de variables a meter en Tournament

tournament.createRound()

let ronda1 = tournament.rounds[0].matches

//Segunda ronda fijo wins para algunos equipos y realimentar players con eso para una segunda ronda:

// console.log(tournament.unplayedMatches)
// console.log(tournament.rounds);

// tournament.filterByPlayedMatch()
// console.log(tournament.unplayedMatches);

console.log(ronda1)
console.log(tournament.rounds)

debugger
ronda1.map((setplayerwins) => {
  setplayerwins.player1.player.addWin();
  setplayerwins.setPlayed();
});


//console.log(tournament.rounds.forEach((round) => console.log(round.matches)))

tournament.createRound()

console.log(tournament.rounds)
debugger
let ronda2 = tournament.rounds[1].matches
console.log(ronda2)

ronda2.map((setplayerwins) => {
  setplayerwins.player1.player.addWin();
  setplayerwins.setPlayed();
});

console.log(tournament.unplayedMatches)

tournament.createRound()


console.log(tournament.rounds);






//console.log(tournament.rounds.forEach((round) =>console.log(round)))


//Esto no creo que funcione si alimento de afuera los wins. supongo que tengo que hacer la actualizacion con algo para que entre todo el update. 
//Me quedo duplicado el wins primero en matches y despues en player, creo que players es mejor para tener un solo control. 

