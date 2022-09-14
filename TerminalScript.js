// ABRIR CMD
function openCmd(){
    document.getElementById("cmd").style.display = "block";
    let texto = document.getElementById("text");    
    if (texto.innerText == "") {
        hackingCmdPT0();
    }
    focar();
}


// FECHAR CMD


// MAXIMIZAR CMD


// MINIMIZAR CMD



// MOVER CMD

dragCmd(document.getElementById("cmd"));
dragCmd(document.getElementById("cmd2"));

// LIMPAR CMD
function limpar(){
    let limparParagrafos = document.querySelectorAll("p");
    for (let i = 0; limparParagrafos[i]; i++) {
        limparParagrafos[i].innerText = "";
        if( i > 0){
            limparParagrafos[i].parentNode.removeChild(limparParagrafos[i])
        }
    }
    for (let i = 0; paragrafos[i]; i++){
        paragrafos.pop()
    }
    let inputs = document.querySelector("#cmdInput")
    inputs.parentNode.removeChild(inputs);
    i = 0;

}



    
// ADICIONAR INPUT
function addInput(local){
        let newInput = document.createElement("input");
        newInput.id = "cmdInput"
        newInput.type = "text"
        newInput.autocomplete = "off";
        newInput.style.height="auto";
        let parent = document.getElementById(local)
        parent.appendChild(newInput);
}

// FOCAR NO INPUT
function focar(){
    document.getElementById("cmdInput").focus();
}



//TRANSFORMAR EM TEXTO E CHAMAR O RESTO DO TEXTO COM O ENTER
let paragrafos = []
let i = 0;
document.getElementById("instructions").addEventListener("keydown", function (e){
    if(e.key == "Enter" && document.getElementById("cmdInput").value != ""){
        // PEGAR TEXTO DIGITADO
        let textinput = document.getElementById("cmdInput")
        let texto = textinput.value;
        textinput.style.display = "none";

        // CONTADOR PARA AUMENTAR AS IDS SOZINHA E CRIAR PARÁGRAFO
        i++;
        paragrafos.push(i);
        let newParagrafo = document.createElement("p");
        newParagrafo.id = `inputTexto${paragrafos.length}`
        newParagrafo.className = "texto"
        newParagrafo.innerHTML = texto;
        document.getElementById("instructions").appendChild(newParagrafo);
        let inputs = document.querySelector("#cmdInput")
        inputs.parentNode.removeChild(inputs);


        if (paragrafos.length == 1){
            hackingCmdPT1()
        } else if (paragrafos.length == 2){
            hackingCmdPT2()
        }
    }
})

