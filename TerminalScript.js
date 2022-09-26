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

//Escrever velocidade normal 
function escrever(str, id) {
    var char = str.split('').reverse();
    var typer = setInterval(function () {
        if (!char.length) return clearInterval(typer);
        var next = char.pop();
        document.getElementById(id).innerHTML += next;
    }, 100);
}
// Escrever velocidade normal e delay
function escreverAtrasasdo(id, tempo, texto) {
    let init = setInterval(function () {
        escrever(texto, id)
        clearInterval(init)
    }, tempo)
}

// Escrever velocidade rapida
function escreverRapido(str, id) {
    var char = str.split('').reverse();
    var typer = setInterval(function () {
        if (!char.length) return clearInterval(typer);
        var next = char.pop();
        document.getElementById(id).innerHTML += next;
    }, 10);
}
// Escrever velocidade rapida e delay
function escreverRapidoAtr(id, tempo, texto) {
    let init = setInterval(function () {
        escreverRapido(texto, id)
        clearInterval(init)
    }, tempo)
}

// Adiciona Parágrafos
function addParagrafo(id) {
    let newParagrafo = document.createElement("p")
    newParagrafo.id = id;
    newParagrafo.className = "texto";
    let parent = document.getElementById("main")
    parent.appendChild(newParagrafo);
}
function addParagrafoErro() {
    let newParagrafo = document.createElement("p")
    newParagrafo.className = "erro";
    let parent = document.getElementById("main")
    parent.appendChild(newParagrafo);
}

// Move as Janelas
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

// minimiza cmd
function minCmd() {
    document.getElementById("cmd").style.display = "none"
    document.getElementById("cmd2").style.display = "none"
}

// maximiza cmd
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

// Fecha cmd
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

// Limpa cmd
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
// Abre cmd
function openCmd() {
    document.getElementById("cmd").style.display = "block";
    document.getElementById("cmdInput").focus();
}

// Adiciona input
function addInput(){
    let newInput = document.createElement("input");
    newInput.id = "cmdInput"
    newInput.type = "text"
    newInput.autocomplete = "off";
    newInput.spellcheck = "false"
    newInput.style.height="auto";
    let parent = document.getElementById("main")
    parent.appendChild(newInput);
    document.getElementById("cmdInput").focus();
}
function addLabelInput(id){
    let newDiv = document.createElement("div")
    newDiv.id=id+1;
    newDiv.style.display = "flex"
    newDiv.style.alignItems = "center";
    newDiv.style.justifyContent = "start"
    let parent = document.getElementById("main")
    parent.appendChild(newDiv)
    let newLabel = document.createElement("label");
    newLabel.for = "cmdInput";
    newLabel.style.marginRight = 0
    newLabel.id = id;
    document.getElementById(id+1).appendChild(newLabel);
    let newInput = document.createElement("input");
    newInput.id="cmdInput";
    newInput.type = "text"
    newInput.style.marginLeft = 0;
    newInput.autocomplete = "off";
    newInput.style.height="auto";
    document.getElementById(id+1).appendChild(newInput);
    document.getElementById("cmdInput").focus();
}

// Enter no Cmd e Chama todo as coisas do cmd
let i = 0;
let paragrafos = [];
let continuar = 0;
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
        if (textinput.value == 'server.join("192.168.0.144")' && continuar == 0){
            addParagrafo("text3")
            escreverRapido("login needed...", "text3")
            addParagrafo("text4")
            escreverRapidoAtr("text4",150,"insert your account info")
            addParagrafo("text5")
            escreverRapidoAtr("text5",400, "user:")
            addParagrafo("text6")
            escreverRapidoAtr("text6", 450,"password:")
            continuar++;
        } else if(textinput.value == "exec('bruteforce.exe')=> /\/([a-zA-Z-0-9]+).apk" || textinput.value == "exec('bruteforce.exe')=>//([a-zA-Z-0-9]+).apk" && continuar == 1){
            addParagrafo("text7")
            escreverRapido("username found - dolorezHaze","text7")
            addParagrafo("text8")
            escreverRapidoAtr("text8",280,"searching for matching password...")
            addParagrafo("text9")
            addParagrafo("text10")
            setTimeout(()=>{
                escreverRapido("PASSWORD FOUND! - @wait4it#1734","text9")
                escreverAtrasasdo("text10",320,"welcome back, Dolorez Haze... ")
            },2500)
            continuar++;
        }else if(textinput.value == "import os" && continuar == 2){
            continuar++
        }else if(textinput.value == "folder = './user/backup'"){
            continuar++
        }
        
        else {
            addParagrafoErro()
            let erro = document.getElementsByClassName("erro")
            let tamanho = erro.length - 1;
            erro[tamanho].innerHTML = "Comando Inválido"
        }
        addInput();
    }
})

document.getElementById("main").addEventListener("click", function (){
    document.getElementById("cmdInput").focus();
})