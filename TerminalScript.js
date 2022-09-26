// initial Instructions
setTimeout(()=>{
    document.getElementById("cmd").style.display="block"
    initialize()
},1000)

function initialize() {
    escrever("FSOCIETY", "text");
    addParagrafo("text2");
    escreverAtrasasdo("text2", 900, "ABRA O NOTEPAD EVERYREV0LUTION PARA RECEBER SUAS INSTRUÇÕES");
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
function escrever2(str, id) {
    var char = str.split('').reverse();
    var typer = setInterval(function () {
        if (!char.length) return clearInterval(typer);
        var next = char.pop();
        document.getElementById(id).innerHTML += next;
    }, 300);
}
// Escrever velocidade normal e delay
function escreverAtrasasdo(id, tempo, texto) {
    let init = setInterval(function () {
        escrever(texto, id)
        clearInterval(init)
    }, tempo)
}
function escreverAtrasasdo2(id, tempo, texto) {
    let init = setInterval(function () {
        escrever2(texto, id)
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
function addParagrafoCmd2(id) {
    let newParagrafo = document.createElement("p")
    newParagrafo.id = id;
    newParagrafo.className = "texto";
    let parent = document.getElementById("main2")
    parent.appendChild(newParagrafo);
}
function addParagrafoErroCmd2() {
    let newParagrafo = document.createElement("p")
    newParagrafo.className = "erro2";
    let parent = document.getElementById("main2")
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
dragCmd(document.getElementById("cmd2"));


// minimiza cmd
function minCmd() {
    document.getElementById("cmd").style.display = "none"
}
function minCmd2(){
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
        cmd.style.top = "6%";
        cmd.style.left = "10%";
        main[0].style.height = "87%"
        maxiCmd = 0;
    }
}
let maxiCmd2 = 0;
function maxCmd2(){
    let cmd = document.getElementById("cmd2");
    let main = document.getElementsByTagName("main")
    if (maxiCmd2 == 0) {
        cmd.style.height = "100%";
        cmd.style.width = "100%";
        cmd.style.borderRadius = 0;
        cmd.style.top = 0;
        cmd.style.left = 0;
        main[1].style.height = "93%"
        maxiCmd2 = 1;
    } else if (maxiCmd2 == 1) {
        cmd.style.height = "40%";
        cmd.style.width = "35%";
        cmd.style.borderRadius = "15px";
        cmd.style.top = "58%";
        cmd.style.left = "20%";
        main[1].style.height = "87%"
        maxiCmd2 = 0;
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
        cmd.style.top = "6%";
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
function closeCmd2(){
    let cmd = document.getElementById("cmd2");
        cmd.style.display = "none"
        maxiCmd2 = 1;
        maxCmd2();
        cmd.style.top = "58%";
        cmd.style.left = "20%";
        limpar2();
}



// Limpa cmd
function limpar(){
    let main = document.getElementById("main")
    let limparParagrafos = main.querySelectorAll("p")
    for (let i = 0; limparParagrafos[i]; i++) {
        limparParagrafos[i].innerText = "";
        limparParagrafos[i].parentNode.removeChild(limparParagrafos[i])
    }
    for (let i = 0; paragrafos[i]; i++){
        paragrafos.pop()
    }
}
function limpar2(){
    let main = document.getElementById("main2")
    let limparParagrafos = main.querySelectorAll("p")
    for (let i = 0; limparParagrafos[i]; i++) {
        limparParagrafos[i].innerText = "";
        limparParagrafos[i].parentNode.removeChild(limparParagrafos[i])
    }
    for (let i = 0; paragrafos[i]; i++){
        paragrafos2.pop()
    }
}

// Abre cmd
function openCmd() {
    document.getElementById("cmd").style.display = "block";
    document.getElementById("cmdInput").focus();
}
function openCmd2() {
    document.getElementById("cmd2").style.display = "block";
    addInputCmd2()
    document.getElementById("cmdInput2").focus();
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
function addInputCmd2(){
    let newInput = document.createElement("input");
    newInput.id = "cmdInput2"
    newInput.type = "text"
    newInput.autocomplete = "off";
    newInput.spellcheck = "false"
    newInput.style.height="auto";
    let parent = document.getElementById("main2")
    parent.appendChild(newInput);
    document.getElementById("cmdInput2").focus();
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

let k = 0;
function escolherCmds(){
    if (k==0){
        document.getElementById("cmds").style.display = "block"
        k=1
    }else{
        document.getElementById("cmds").style.display = "none"
        k=0
    }
}
function closeEscolher(){
    document.getElementById("cmds").style.display = "none"
    k=0
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
        }else if (textinput.value == 'server.join("192.168.0.144")' || textinput.value == "server.join('192.168.0.144')" && continuar == 0){
            addParagrafo("text3")
            escreverRapido("login needed...", "text3")
            addParagrafo("text4")
            escreverRapidoAtr("text4",150,"insert your account info")
            addParagrafo("text5")
            escreverRapidoAtr("text5",400, "user:")
            addParagrafo("text6")
            escreverRapidoAtr("text6", 450,"password:")
            continuar++;
        } else if(textinput.value == String.raw`exec('bruteforce.exe')=> /\/([a-zA-Z-0-9]+).apk` || textinput.value == String.raw`exec('bruteforce.exe')=>/\/([a-zA-Z-0-9]+).apk` || textinput.value == String.raw`exec("bruteforce.exe")=>/\/([a-zA-Z-0-9]+).apk` || textinput.value == String.raw`exec("bruteforce.exe")=> /\/([a-zA-Z-0-9]+).apk` && continuar == 1){
            addParagrafo("text7")
            escreverRapido("username found - dolorezHaze","text7")
            addParagrafo("text8")
            escreverRapidoAtr("text8",280,"searching for matching password...")
            addParagrafo("text9")
            addParagrafo("text10")
            setTimeout(()=>{
                escreverRapido("PASSWORD FOUND! - @wait4it#1734","text9")
                escreverAtrasasdo("text10",320,"welcome back, Dolorez Haze... ")
                setTimeout(()=>{
                    document.getElementById("cmd2").style.display = "block"
                    document.getElementsByClassName("cmds")[1].style.display = "flex"
                    document.getElementById("wallpaper").style.backgroundImage = "url(/images/bgd-kali-2.jpg)"
                    addParagrafoCmd2("text2001")
                    escrever("VOCÊ ESTÁ DENTRO DO SERVIDOR!","text2001")
                    addParagrafoCmd2("text2002")
                    escreverRapidoAtr("text2002",2900, "ESCREVA O SCRIPT QUE ENCONTRARÁ OS ARQUIVOS NECESSÁRIOS E OS LEVARÁ ATÉ UM SERVIDOR SEGURO!")
                    addParagrafoCmd2("text2003")
                    escreverRapidoAtr("text2003", 3810,"ABRA O ARQUIVO STARTSW1THSOME0NE PARA MAIS INSTRUÇÕES")
                },3120)
            },2500)
            continuar++;
        }else if(textinput.value == "getRightFile(erased_chemical_leak)" && continuar2 == 9){
            addParagrafo("text100001")
            addParagrafo("text100002")
            addParagrafo("text100003")
            escrever("exporting payload...","text100001")
            escreverAtrasasdo2("text100002", 2000 ,"....")
            escreverAtrasasdo("text100003",3200,"payload exported.")
            continuar2++
        }else if(textinput.value == "server.quit" && continuar2 == 10){
            closeNotepad();
            closeNotepad2();
            closeCmd2();
            closeCmd()
            document.getElementById("wallpaper").style.backgroundImage = "url()"
            document.getElementById("final").style.display = "block"
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
let continuar2 = 0
let scriptName;
let i2 = 0;
let paragrafos2 = [];
document.getElementById("main2").addEventListener("keydown", (e)=>{
    if(e.key == "Enter" && document.getElementById("cmdInput2").value != ""){
        let textinput = document.getElementById("cmdInput2")
        let texto = textinput.value;
        textinput.style.display = "none";
        i2++;
        paragrafos2.push(i);
        let newParagrafo = document.createElement("p");
        newParagrafo.id = `inputTexto${paragrafos.length}`
        newParagrafo.className = "texto"
        newParagrafo.innerHTML = texto;
        document.getElementById("main2").appendChild(newParagrafo);
        let inputs = document.querySelector("#cmdInput2")
        inputs.parentNode.removeChild(inputs);
        if (textinput.value == "clear"){
            if (cl > 0){
                limpar2();
            }
        }else if(textinput.value.includes("vim") && textinput.value.includes(".py") && continuar2 == 0){
            let scriptName2 = textinput.value.split(" ")
            scriptName = scriptName2[1]
            limpar2()
            continuar2++
        }else if(textinput.value.includes("import") && textinput.value.includes("os") && continuar2 == 1){
            continuar2++
        }else if(textinput.value == "folder = './user/backup'" && continuar2 == 2){
            continuar2++
        }else if(textinput.value == "def GetRightFile(fileName):" && continuar2 == 3){
            continuar2++
        }else if(textinput.value =="for fileName in os.walk(folder)" && continuar2 ==4){
            continuar2++
        }else if(textinput.value == "if fileName === file.name" && continuar2 ==5){
            continuar2++
        }else if(textinput.value == "file_data = file.content" && continuar2==6){
            continuar2++
        }else if(textinput.value == "file_data to encrypt.payload" && continuar2 ==7){
            continuar2++
        }else if(textinput.value == "=>export payload to url = 192.168.6.66" && continuar2 == 8){
            continuar2++
        }
        else {
            addParagrafoErroCmd2()
            let erro = document.getElementsByClassName("erro2")
            let tamanho = erro.length - 1;
            erro[tamanho].innerHTML = "Comando Inválido"
        }
        addInputCmd2();
}
})


document.getElementById("main").addEventListener("click", function (){
    document.getElementById("cmdInput").focus();
})
document.getElementById("main2").addEventListener("click", function (){
    document.getElementById("cmdInput2").focus();
})