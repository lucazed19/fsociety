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
function closeCmd(){
    let cmd = document.getElementById("cmd");
    cmd.style.display = "none"
    maxiCmd=1;
    maxCmd();
    cmd.style.top="50px";
    cmd.style.left="50px";
    limpar();
}

// MAXIMIZAR CMD
let maxiCmd = 0;
function maxCmd(){
    let cmd = document.getElementById("cmd");
    if (maxiCmd == 0){
        cmd.style.height = "100%";
        cmd.style.width = "100%";
        cmd.style.borderRadius = 0;
        cmd.style.top=0;
        cmd.style.left=0;
        maxiCmd = 1;
    }else if(maxiCmd == 1){
        cmd.style.height = "50%";
        cmd.style.width = "35%";
        cmd.style.borderRadius = "15px";
        cmd.style.top="50px";
        cmd.style.left="50px";
        maxiCmd = 0;
    }
}

// MINIMIZAR CMD
function minCmd(){
    document.getElementById("cmd").style.display = "none"
}


// MOVER CMD
function dragCmd(elmnt){
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "Header")) {
        document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
dragCmd(document.getElementById("cmd"));

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

// ESCREVER AUTOMÁTICO NO TEXTO CMD
function escrever(str, id,){
    var char = str.split('').reverse();
    var typer = setInterval(function() {
      if (!char.length) return clearInterval(typer);
      var next = char.pop();
      document.getElementById(id).innerHTML += next;
    }, 100);
}

function escreverAtrasasdo(id, tempo, texto){
    let init = setInterval(function(){
        escrever(texto,id)
        clearInterval(init)
    }, tempo)
}
    
// ADICIONAR INPUT
function addInput(){
        let newInput = document.createElement("input");
        newInput.id = "cmdInput"
        newInput.type = "text"
        newInput.autocomplete = "off";
        newInput.style.height="auto";
        let parent = document.getElementById("main")
        parent.appendChild(newInput);
}

// FOCAR NO INPUT
function focar(){
    document.getElementById("cmdInput").focus();
}

// ADICIONAR PARÀGRAFO
function addParagrafo(id){
    let newParagrafo = document.createElement("p")
    newParagrafo.id = id;
    newParagrafo.className = "texto";
    let parent = document.getElementById("main")
    parent.appendChild(newParagrafo);
}


//TRANSFORMAR EM TEXTO E CHAMAR O RESTO DO TEXTO COM O ENTER
let paragrafos = []
let i = 0;
document.getElementById("main").addEventListener("keydown", function (e){
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
        document.getElementById("main").appendChild(newParagrafo);
        let inputs = document.querySelector("#cmdInput")
        inputs.parentNode.removeChild(inputs);


        if (paragrafos.length == 1){
            hackingCmdPT1()
        } else if (paragrafos.length == 2){
            hackingCmdPT2()
        }
    }
})


// PARTES DO CMD
function hackingCmdPT0(){
    escrever("FSOCIETY", "text");
    addParagrafo("text2")
    escreverAtrasasdo("text2", 900, "DIGITE 1 PARA COMEÇARMOS!")
    addInput();
    focar()
}

function hackingCmdPT1(){
    addParagrafo("text3");
    addParagrafo("text4")
    addParagrafo("text5")
    addParagrafo("text6")
    addParagrafo("text7")
    addParagrafo("text8")
    addParagrafo("text9")

    if ( document.getElementById("inputTexto1").innerHTML == 1){
        escrever("SEJA BEM-VINDO!!", "text3")
        escreverAtrasasdo("text4", 1700,"SUA MISSÃO SERÁ INVADIR O FBI E COPIAR ALGUNS ARQUIVOS")
        escreverAtrasasdo("text5", 7100,"COMEÇAREMOS EM")
        escreverAtrasasdo("text6", 8600,"3")
        escreverAtrasasdo("text7", 9600,"2")
        escreverAtrasasdo("text8", 10600,"1")
        escreverAtrasasdo("text9", 11600,"ABRINDO TERMINAL")
        setTimeout(function(){
            let i = 0
            let init = setInterval(function(){
                if( i <= 3 ){
                    let el = document.getElementById("text9")
                    el.innerHTML += "."
                    i++
                }else{
                    clearInterval(init)
                }            
            },1000)
        }, 13200)
        
    }else{
        escrever("COMEÇAREMOS MESMO ASSIM, BOA SORTE!!", "text3")
        escreverAtrasasdo("text4", 3700,"SUA MISSÃO SERÁ INVADIR O FBI E COPIAR ALGUNS ARQUIVOS")
        escreverAtrasasdo("text5", 9100,"COMEÇAREMOS EM")
        escreverAtrasasdo("text6", 10500,"3")
        escreverAtrasasdo("text7", 11500,"2")
        escreverAtrasasdo("text8", 12500,"1")
        escreverAtrasasdo("text9", 13500,"ABRINDO TERMINAL")
        setTimeout(function(){
            let i = 0
            let init = setInterval(function(){
                if( i <= 3 ){
                    let el = document.getElementById("text9")
                    el.innerHTML += "."
                    i++
                }else{
                    clearInterval(init)
                }            
            },1000)
        }, 15100)
    }
    
}

function hackingCmdPT2(){
    
}

