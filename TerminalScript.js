// initial Instructions
setTimeout(()=>{
    document.getElementById("cmd").style.display="block"
    initialize()
},1000)

function initialize() {
    escrever("FSOCIETY", "text");
    addParagrafo("text2");
    escreverAtrasasdo("text2", 900, "ABRA O NOTEPAD PARA RECEBER SUAS INSTRUÇÕES SOBRE A MISSÃO");
    addInput();
    focar();
}

function escrever(str, id) {
    var char = str.split('').reverse();
    var typer = setInterval(function () {
        if (!char.length) return clearInterval(typer);
        var next = char.pop();
        document.getElementById(id).innerHTML += next;
    }, 100);
}

function addParagrafo(id) {
    let newParagrafo = document.createElement("p")
    newParagrafo.id = id;
    newParagrafo.className = "texto";
    let parent = document.getElementById("main")
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
dragCmd(document.getElementById("cmd"));

function minCmd() {
    document.getElementById("cmd").style.display = "none"
    document.getElementById("cmd2").style.display = "none"
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
        cmd.style.top = "15%";
        cmd.style.left = "10%";
        main[0].style.height = "87%"
        maxiCmd = 0;
    }
}

let cl= 0;
function closeCmd() {
    if (cl > 0){
        let cmd = document.getElementById("cmd");
        cmd.style.display = "none"
        maxiCmd = 1;
        maxCmd();
        cmd.style.top = "15%";
        cmd.style.left = "10%";
        limpar();
    } else if (document.getElementById("notepad").style.display == "none" && cl == 0){}
}

function autoClose(){
    if(cl == 0){
        cl++
        closeCmd();
    }
}

function openCmd() {
    document.getElementById("cmd").style.display = "block";
    document.getElementById("cmdInput").focus();
}


function addInput(){
    let newInput = document.createElement("input");
    newInput.id = "cmdInput"
    newInput.type = "text"
    newInput.autocomplete = "off";
    newInput.style.height="auto";
    let parent = document.getElementById("main")
    parent.appendChild(newInput);
    document.getElementById("cmdInput").focus();
}

function limpar(){
    let limparParagrafos = document.querySelectorAll("p");
    for (let i = 0; limparParagrafos[i]; i++) {
        limparParagrafos[i].innerText = "";
        limparParagrafos[i].parentNode.removeChild(limparParagrafos[i])
    }
    for (let i = 0; paragrafos[i]; i++){
        paragrafos.pop()
    }
}

let i = 0;
let paragrafos = [];
document.getElementById("main").addEventListener("keydown", function (e){
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
        if (textinput.value == "clear"){
            if (cl > 0){
                limpar();
            }
        }
        addInput();
    }
})

document.getElementById("main").addEventListener("click", function (){
    document.getElementById("cmdInput").focus();
})