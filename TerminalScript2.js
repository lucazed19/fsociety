// initial Instructions
async function initialize() {
    escrever("FSOCIETY", "text");
    addParagrafo("text2", "instructions")
    escreverAtrasasdo("text2", 900, "DIGITE 1 PARA COMEÇARMOS!")
    addInput("instructions");
    focar();
}
initialize()

function escrever(str, id,) {
    var char = str.split('').reverse();
    var typer = setInterval(function () {
        if (!char.length) return clearInterval(typer);
        var next = char.pop();
        document.getElementById(id).innerHTML += next;
    }, 100);
}

function addParagrafo(id, local) {
    let newParagrafo = document.createElement("p")
    newParagrafo.id = id;
    newParagrafo.className = "texto";
    let parent = document.getElementById(local)
    parent.appendChild(newParagrafo);
}

function escreverAtrasasdo(id, tempo, texto) {
    let init = setInterval(function () {
        escrever(texto, id)
        clearInterval(init)
    }, tempo)
}

function dragCmd(elmnt) {
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

function minCmd() {
    document.getElementById("cmd").style.display = "none"
    document.getElementById("cmd2").style.display = "none"
}
function minCmd2() {
    document.getElementById("cmd2").style.display = "none"
    falhou();
}

let maxiCmd = 0;
function maxCmd() {
    let cmd = document.getElementById("cmd");
    let main = document.getElementsByTagName("main")
    if (maxiCmd == 0) {
        cmd.style.height = "100%";
        cmd.style.width = "100%";
        cmd.style.borderRadius = 0;
        cmd.style.top = 0;
        cmd.style.left = 0;
        main[0].style.height = "93%"
        maxiCmd = 1;
    } else if (maxiCmd == 1) {
        cmd.style.height = "50%";
        cmd.style.width = "35%";
        cmd.style.borderRadius = "15px";
        cmd.style.top = "50px";
        cmd.style.left = "50px";
        main[0].style.height = "87%"
        maxiCmd = 0;
    }
}
let maxiCmd2 = 0;
function maxCmd2() {
    let cmd = document.getElementById("cmd2");
    if (maxiCmd2 == 0) {
        cmd.style.height = "100%";
        cmd.style.width = "100%";
        cmd.style.borderRadius = 0;
        cmd.style.top = 0;
        cmd.style.left = 0;
        maxiCmd2 = 1;
    } else if (maxiCmd2 == 1) {
        cmd.style.height = "100%";
        cmd.style.width = "50%";
        cmd.style.borderRadius = "15px";
        cmd.style.top = "20px";
        cmd.style.left = "unset";
        cmd.style.right = "50px";
        maxiCmd2 = 0;
    }
}
function closeCmd() {
    let cmd = document.getElementById("cmd");
    let cmd2 = document.getElementById("cmd2");
    cmd.style.display = "none"
    cmd2.style.display = "none"
    maxiCmd = 1;
    maxCmd();
    cmd.style.top = "50px";
    cmd.style.left = "50px";
    limpar();
    
}
function youCantCloseCmd() {
  escrever("você não pode fechar BUCETUDO")

}
function openCmd() {
    document.getElementById("cmd").style.display = "block";
    let texto = document.getElementById("text");
    if (texto.innerText == "") {
        hackingCmdPT0();
    }
    focar();
}
dragCmd(document.getElementById("cmd"));