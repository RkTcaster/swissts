import { PlayerDiv } from "../classes/main/PlayerDiv";
import { ResultCapture } from "../classes/main/ResultCapture";
import { RoundDiv } from "../classes/main/RoundGenerator";
import { Tournament } from "../classes/Tournament";
import { frontUtils } from "./frontUtils/frontUtils";

export {}; //Lo agregue por el firstRemoveBtn me tiraba error de Typescript

const playerOutput = frontUtils.getPlayerOutput();

const createTournamentBtn = document.getElementById(
  "createTournamentBtn"
) as HTMLButtonElement;

const tournamentRound = document.getElementById(
  "tournamentRound"
) as HTMLDListElement;

let playerArray = [] as string[];

document.addEventListener("DOMContentLoaded", () => {
  const captureBtn = frontUtils.getCaptureBtn();

  captureBtn.addEventListener("click", () => {
    const playerDiv = new PlayerDiv({
      playerName: frontUtils.getPlayerName(),
      playerArray: playerArray,
      form: frontUtils.getFormInfo(),
    });

    playerOutput.append(playerDiv.createDiv());
    console.log(playerArray);
    return playerArray;
  });
});

createTournamentBtn.addEventListener("click", () => {
  const date = "2016-07-19T20:23:01.804Z"; //Esto tiene que entrar por otro lado
  const tournament = frontUtils.createTournament({
    playerStringArray: playerArray,
    date: date,
  });
  const createDivTournament = new RoundDiv({ tournament: tournament });
  const tournamentRounds = createDivTournament.tournament.rounds;

  const round = createDivTournament.setTournamentRound({
    tournamentRounds: tournamentRounds,
  });

  tournamentRound.append(round);

  const nextRoundBtn = document.getElementById(
    "nextRoundBtn"
  ) as HTMLButtonElement;

  nextRoundBtn?.addEventListener("click", () => {
    //Tengo un problema acá no se si no me conviene hacer una funcion para devolver dos variables y no se si necesito als dos variables
    const tournamentRound = document.getElementById("tournamentRound") as HTMLDivElement
    const resultCapture = new ResultCapture({round: tournamentRound,tournament:tournament })  
    resultCapture.getDivElements()

    const createDivTournament = new RoundDiv({ tournament: tournament });
    const tournamentRounds = createDivTournament.tournament.rounds;
   
    
    const round = createDivTournament.setTournamentRound({
      tournamentRounds: tournamentRounds,
    });
    tournamentRound.append(round);

  });
  console.log(tournament)
  return nextRoundBtn;
});

//Supongo que estoy casteando mucho

// const tournamentTest = document.getElementById(
//   "tournamentCreation"
// ) as HTMLDivElement;

// const playerContainer = document.getElementById(
//   "playerContainer"
// ) as HTMLDivElement;

// const addPlayerBtn = document.getElementById(
//   "addPlayerBtn"
// ) as HTMLButtonElement;
// const firstRemoveBtn =
//   document.querySelector<HTMLButtonElement>("button.removeBtn");

// const createPlayerFormInput = (): HTMLDivElement => {
//   const addPlayerDiv = document.createElement("div") as HTMLDivElement;

//   const addPlayerDivContainer = document.createElement("div") as HTMLDivElement;
//   addPlayerDivContainer.classList.add("container");

//   const addPlayerDivRow = document.createElement("row") as HTMLDivElement;
//   addPlayerDivRow.classList.add("row");

//   const addPlayerDivCol8 = document.createElement("div") as HTMLDivElement;
//   addPlayerDivCol8.classList.add("col-8");

//   const playerNameInput = document.createElement("input") as HTMLInputElement;
//   playerNameInput.classList.add("form-control");
//   playerNameInput.setAttribute("type", "text");
//   playerNameInput.setAttribute("name", "playerName");
//   playerNameInput.setAttribute("placeholder", "Player Name");
//   playerNameInput.setAttribute("aria-label", "Player Name");

//   const addPlayerDiv4 = document.createElement("div") as HTMLDivElement;
//   addPlayerDiv4.classList.add("col-4");

//   const removePlayerBtn = document.createElement("button") as HTMLButtonElement;
//   removePlayerBtn.classList.add("btn", "btn-danger", "removeBtn");
//   removePlayerBtn.setAttribute("type", "button");
//   removePlayerBtn.innerHTML = "Remove";

//   removePlayerBtn.addEventListener("click", () => {
//     addPlayerDiv.remove();
//   });

//   addPlayerDiv.append(addPlayerDivContainer);
//   addPlayerDivContainer.append(addPlayerDivRow);

//   addPlayerDivRow.append(addPlayerDivCol8, addPlayerDiv4);

//   addPlayerDivCol8.append(playerNameInput);

//   addPlayerDiv4.append(removePlayerBtn);

//   return addPlayerDiv;
// };

// addPlayerBtn.addEventListener("click", () => {
//   playerContainer.append(createPlayerFormInput());
// });

// firstRemoveBtn!.addEventListener("click", () => {
//   firstRemoveBtn?.parentElement?.parentElement?.parentElement?.remove();
// });
