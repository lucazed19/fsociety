// ABRIR CMD
function openCmd(){
    document.getElementById("cmd").style.display = "block";
    let texto = document.getElementById("text");    
    if (texto.innerText == "") {
        hackingCmdPT1();
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

// ESCREVER TEXTO CMD
function escrever(str, el,){
    var char = str.split('').reverse();
    var typer = setInterval(function() {
      if (!char.length) return clearInterval(typer);
      var next = char.pop();
      el.innerHTML += next;
    }, 100);
}

  // LIMPAR CMD
function limpar(){
      let paragrafos = document.querySelectorAll("p");
      for (let i = 0; paragrafos[i]; i++) {
          paragrafos[i].innerText = "";
        }
    let inputs = document.querySelector("#cmdInput")
    inputs.parentNode.removeChild(inputs);    
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

// ADICIONAR PARÀGRAFO
function addParagrafo(id){
    let newParagrafo = document.createElement("p")
    newParagrafo.id = id;
    let parent = document.getElementById("main")
    parent.appendChild(newParagrafo);
}

function focar(){
    document.getElementById("cmdInput").focus();
}

//TRANSFORMAR EM TEXTO
let paragrafos = []
let i = 0;
document.getElementById("main").addEventListener("keypress", function (e){
    if(e.key == "Enter" && document.getElementById("cmdInput").value != ""){
        let textinput = document.getElementById("cmdInput")
        let texto = textinput.value;
        textinput.style.display = "none";

        i++;
        paragrafos.push(i);
        let newParagrafo = document.createElement("p");
        newParagrafo.id = `inputTexto${paragrafos.length}`
        newParagrafo.className = "texto"
        newParagrafo.innerHTML = texto;
        document.getElementById("main").appendChild(newParagrafo);
        let inputs = document.querySelector("#cmdInput")
        inputs.parentNode.removeChild(inputs);
        
    }
})


// PARTES DO CMD
function hackingCmdPT1(){
    escrever("FSOCIETY", document.getElementById("text"));
    addParagrafo("text2");
    escrever("DIGITE 1 PARA COMEÇAR", document.getElementById("text2"));
    addInput();
    focar()
    addParagrafo("text3");
    escrever(`${paragrafos.length}`,document.getElementById("text3"))
    
}
