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
    let cmd2 = document.getElementById("cmd2");
    cmd.style.display = "none"
    cmd2.style.display = "none"
    maxiCmd=1;
    maxCmd();
    cmd.style.top="50px";
    cmd.style.left="50px";
    limpar();
}

function closeCmd2(){
    let cmd = document.getElementById("cmd2");
    cmd.style.display = "none"
    maxiCmd=1;
    maxCmd();
    cmd.style.top="20px";
    cmd.style.left="unset";
    cmd.style.right="50px"
    falhou();
}

// MAXIMIZAR CMD
let maxiCmd = 0;
function maxCmd(){
    let cmd = document.getElementById("cmd");
    let main = document.getElementsByTagName("main")
    if (maxiCmd == 0){
        cmd.style.height = "100%";
        cmd.style.width = "100%";
        cmd.style.borderRadius = 0;
        cmd.style.top=0;
        cmd.style.left=0;
        main[0].style.height="93%"
        maxiCmd = 1;
    }else if(maxiCmd == 1){
        cmd.style.height = "50%";
        cmd.style.width = "35%";
        cmd.style.borderRadius = "15px";
        cmd.style.top="50px";
        cmd.style.left="50px";
        main[0].style.height="87%"
        maxiCmd = 0;
    }
}
let maxiCmd2 = 0;
function maxCmd2(){
    let cmd = document.getElementById("cmd2");
    if (maxiCmd2 == 0){
        cmd.style.height = "100%";
        cmd.style.width = "100%";
        cmd.style.borderRadius = 0;
        cmd.style.top=0;
        cmd.style.left=0;
        maxiCmd2 = 1;
    }else if(maxiCmd2 == 1){
        cmd.style.height = "100%";
        cmd.style.width = "50%";
        cmd.style.borderRadius = "15px";
        cmd.style.top="20px";
        cmd.style.left= "unset";
        cmd.style.right="50px";
        maxiCmd2 = 0;
    }
}


// MINIMIZAR CMD
function minCmd(){
    document.getElementById("cmd").style.display = "none"
    document.getElementById("cmd2").style.display = "none"
}
function minCmd2(){
    document.getElementById("cmd2").style.display = "none"
    falhou();
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

// ADICIONAR PARÀGRAFO
function addParagrafo(id,local){
    let newParagrafo = document.createElement("p")
    newParagrafo.id = id;
    newParagrafo.className = "texto";
    let parent = document.getElementById(local)
    parent.appendChild(newParagrafo);
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


// PARTES DO CMD
function hackingCmdPT0(){
    escrever("FSOCIETY", "text");
    addParagrafo("text2","instructions")
    escreverAtrasasdo("text2", 900, "DIGITE 1 PARA COMEÇARMOS!")
    addInput("instructions");
    focar()
}

function hackingCmdPT1(){
    addParagrafo("text3","instructions");
    addParagrafo("text4","instructions")
    addParagrafo("text5","instructions")
    addParagrafo("text6","instructions")
    addParagrafo("text7","instructions")
    addParagrafo("text8","instructions")
    addParagrafo("text9","instructions")
    addParagrafo("text10","instructions")
    addParagrafo("text11","instructions")

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
                    document.getElementById("cmd2").style.display = "block"
                    escrever("TERMINAL INICIADO","text10")
                    escrever("SE FECHAR OU MINIMIZAR O TERMINAL VOCÊ FALHARÁ","text11")
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
                    document.getElementById("cmd2").style.display = "block"
                    escrever("TERMINAL INICIADO","text10")
                    escrever("SE FECHAR OU MINIMIZAR O TERMINAL VOCÊ FALHARÁ","text11")
                }            
            },1000)
        }, 15100)
    }
    
}

function hackingCmdPT2(){
    
}

function falhou(){
    addParagrafo("text1000","instructions")
    addParagrafo("text1001","instructions")
    addParagrafo("text1002","instructions")
    addParagrafo("text1003","instructions")
    escrever("--------------------------------------------","text1000")
    escrever("VOCÊ FECHOU O TERMINAL E PERDEU O PROGRESSO","text1001")
    escreverAtrasasdo("text1002",4500,"     INICIE O PROCESSO NOVAMENTE")
    escrever("--------------------------------------------","text1003")
}

