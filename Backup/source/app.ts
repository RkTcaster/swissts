const petContainer = document.getElementById('petContainer') as HTMLDivElement;
const addPetBtn = document.getElementById('addPetBtn') as HTMLButtonElement;
const firstRemoveBtn = document.querySelector<HTMLButtonElement>('button.removeBtn');

const createPetFormInput = (): HTMLDivElement => {
    const addPetDiv = document.createElement('div');
    addPetDiv.classList.add('mb-3');

    const addPetDivContainer = document.createElement('div');
    addPetDivContainer.classList.add('container');

    const addPetDivRow = document.createElement('row') as HTMLDivElement;
    addPetDivRow.classList.add('row');

    const addPetDivCol8 = document.createElement('div') as HTMLDivElement;
    addPetDivCol8.classList.add('col-8');

    const petNameInput = document.createElement('input') as HTMLInputElement;
    petNameInput.classList.add('form-control');
    petNameInput.setAttribute('type','text');
    petNameInput.setAttribute('name','petName');
    petNameInput.setAttribute('placeholder','Pet Name');
    petNameInput.setAttribute('aria-label', "Pet Name");

    const addPetDiv4 = document.createElement('div') as HTMLInputElement;
    addPetDiv4.classList.add('col-4');

    const removePetBtn = document.createElement('button') as HTMLInputElement;    
    removePetBtn.classList.add('btn', 'btn-danger', 'removeBtn');
    removePetBtn.classList.add('type','button');
    removePetBtn.innerHTML = 'Remove';
    
    removePetBtn.addEventListener('click', () => {
        addPetDiv.remove();
    });

    //Appending

    addPetDiv.append(addPetDivContainer);
    addPetDivContainer.append(addPetDivRow);

    addPetDivRow.append(addPetDivCol8, addPetDiv4);

    addPetDivCol8.append(petNameInput);

    addPetDiv4.append(removePetBtn);



    return addPetDiv
}

addPetBtn.addEventListener('click', () => {
    petContainer.append(createPetFormInput());
})

firstRemoveBtn!.addEventListener('click', () => {
    firstRemoveBtn?.parentElement?.parentElement?.parentElement?.remove();
})