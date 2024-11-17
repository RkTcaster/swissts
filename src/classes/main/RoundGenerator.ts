import { Match } from "../Match";
import { Round } from "../Round";
import { Tournament } from "../Tournament";

export class RoundDiv {
  public tournament: Tournament;

  constructor({ tournament }: { tournament: Tournament }) {
    this.tournament = tournament;
  }

  public createPlayerDropbox({ player: player }: { player: string }) {
    const results = ["0", "1", "2"]; //Esto podria ser una opcion
    const matchResultDropbox = document.createElement(
      "select"
    ) as HTMLSelectElement;
    matchResultDropbox.setAttribute("class", "dropbtn");
    matchResultDropbox.setAttribute("id", "player-" + player);
    results.forEach((score) => {
      const optionElement = document.createElement("option");
      optionElement.value = score;
      optionElement.textContent = score;
      matchResultDropbox.appendChild(optionElement);
    });
    return matchResultDropbox;
  }

  public createPlayerDiv({
    tournamentMatch: tournamentMatch,
    round: round,
    match: match,
  }: {
    tournamentMatch: Match;
    round: number;
    match: number;
  }) {
    //Aca la estoy cagando muchas variables de enrtrada
    const matchContainer = document.createElement("div") as HTMLDivElement;
    const createPlayer1 = document.createElement("div") as HTMLDivElement; //Esto es raro replico lo mismo
    const createPlayer2 = document.createElement("div") as HTMLDivElement;
    const player1Name = tournamentMatch.player1.player.name;
    const player2Name = tournamentMatch.player2.player.name;

    matchContainer.setAttribute("class", "round-" + round);

    createPlayer1.setAttribute("class", "round-" + round);
    createPlayer1.setAttribute("id", "match-" + match);

    createPlayer2.setAttribute("class", "round-" + round);
    createPlayer2.setAttribute("id", "match-" + match);

    createPlayer1.innerHTML = player1Name;
    createPlayer2.innerHTML = player2Name;

    matchContainer.append(createPlayer1);
    matchContainer.append(this.createPlayerDropbox({ player: player1Name }));
    matchContainer.append(createPlayer2);
    matchContainer.append(this.createPlayerDropbox({ player: player2Name }));

    return matchContainer;
  }

  public setTournamentRound({
    tournamentRounds: tournamentRounds,
  }: {
    tournamentRounds: Round[];
  }) {
    const roundLenght = tournamentRounds.length;
    const roundContainer = document.createElement("div") as HTMLDivElement;
    const nextRoundBtn = document.createElement("button") as HTMLButtonElement;

    nextRoundBtn.setAttribute("id", "nextRoundBtn");
    nextRoundBtn.setAttribute("class", "nextRoundBtn");
    nextRoundBtn.innerHTML = "Crear siguiente ronda";

    for (
      let match = 0;
      match < tournamentRounds[roundLenght - 1].matches.length;
      match++
    ) {
      const matchContainer = this.createPlayerDiv({
        tournamentMatch: tournamentRounds[roundLenght - 1].matches[match],
        match: match,
        round: roundLenght,
      });
      roundContainer.append(matchContainer);
    }

    roundContainer.append(nextRoundBtn);

    return roundContainer;
  }
}
