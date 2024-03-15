/*
************** Definir os principais objetos **************
*/
const addnote = document.querySelector("#add-note");//Botão de para adicionar nota
let closeModal =  document.querySelector('#close-modal'); //fechar janela modal com os detalhes da nota.
let modal = document.querySelector('#modal'); //Modal para edição das notas
let modalView = document.querySelector('#modal-view'); //Modal para exibição dos detalhes da nota
let notes = document.querySelector('#notes');//Lista divs com dados das notas
let btnSaveNote = document.querySelector("#btn-save-note"); //icone para salvar nota
let btnCloseNote = document.querySelector("#btn-close-note");//icone para fechar modal de edição de nota.
/*
*********************** Eventos ***************************
*/
addnote.addEventListener('click', (evt)=>{
    evt.preventDefault();
    modal.style.display = 'block';
    notes.style.display = 'none';
    addnote.style.display = 'none';
});

btnCloseNote.addEventListener('click', (evt)=>{
    evt.preventDefault();
    modal.style.display = 'none';
    notes.style.display = 'flex';
    addnote.style.display = 'block';
});

btnSaveNote.addEventListener('click', (evt)=>{
    evt.preventDefault();

    let data = {
        id: document.querySelector("#input-id").value,
        title: document.querySelector("#input-title").value,
        content: document.querySelector("#input-content").value,
        lastTime: new Date() .getTime(),
    }
    saveNote(data);
});

/*
*********************** Funções ***************************
*/

const saveNote = (data) =>{

    let notes = loadNotes();
    if(data.id.length < 1){
        data.id = new Date().getTime();
        notes.push(data);
    }else{

    }
    console.log(data);  

    notes = JSON.stringify(notes);
    localStorage.setItem('notes', notes);
};

const listNotes = () => {

    let listNotes = loadNotes();
    console.log(notes);
    listNotes.forEach((item) => {
  
      let divCard = document.createElement('div');
      divCard.className = 'card';
      divCard.style.width = '25rem';
      let divCardBody = document.createElement('div');
      divCardBody.className = 'card-body';
      let h1 = document.createElement('h1');
      h1.innerText = item.title;
      divCardBody.appendChild(h1);
      divCard.appendChild(divCardBody);
  

      notes.appendChild(divCard);

    });
}
const loadNotes = () =>{
    let notes = localStorage.getItem("notes");
    if(!notes){
        notes = [];
    }else{
        notes =JSON.parse(notes);
    }
    return notes;
};

listNotes();