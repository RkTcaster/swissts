export class PlayerDiv {
  public playerName: HTMLFormElement;
  public playerArray: string[];
  public form: HTMLFormElement
  constructor({
    playerName,
    playerArray,
    form,
  }: {
    playerName: HTMLFormElement;
    playerArray: string[];
    form: HTMLFormElement
  }) {
    this.playerName = playerName;
    this.playerArray = playerArray;
    this.form = form
  }

  private getPlayerValue() {
    const playerValue = this.playerName.value.trim();
    return (this.playerName = playerValue);
  }

  private createPlayerDiv() {
    const addPlayerDiv = document.createElement("div") as HTMLDivElement;
    addPlayerDiv.innerHTML += this.playerName;

    return addPlayerDiv;
  }

  private appendPlayer() {
    this.playerName
      ? this.playerArray.push(this.playerName) //No se como tratar este error de tipado
      : alert("No hay ningún jugador para agregar a la lista");
  }

  private resetForm() {
    return this.form.reset()
  }

  public createDiv() {
    this.getPlayerValue();
    this.appendPlayer();
    const playerDiv = this.createPlayerDiv();
    this.resetForm()
    return playerDiv;
  }
}
