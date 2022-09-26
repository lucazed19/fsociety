function dragNote(elmnt) {
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
dragNote(document.getElementById("notepad"))
dragNote(document.getElementById("notepad2"))

function openNotepad(){
    document.getElementById("notepad").style.display ="block"
}

let op = 0;
function openNotepad2(){
    if(document.getElementById("cmd2").style.display == "block" && op == 0){
        document.getElementById("notepad2").style.display ="block"
        document.getElementById("cmd2").style.display = "none";
        let main = document.getElementById("main2")
        let limparParagrafos = main.querySelectorAll("p")
        for (let i = 0; limparParagrafos[i]; i++) {
        limparParagrafos[i].innerText = "";
        limparParagrafos[i].parentNode.removeChild(limparParagrafos[i])
        }
        for (let i = 0; paragrafos[i]; i++){
            paragrafos2.pop()
        }
        op++
    }else if(op>0){
        document.getElementById("notepad2").style.display ="block"
    }
}

function minNotepad(){
    document.getElementById("notepad").style.display ="none"
}
function minNotepad2(){
    document.getElementById("notepad2").style.display ="none"
}

let maxiNotepad = 0
function maxNotepad(){
    let notepad = document.getElementById("notepad")
    if (maxiNotepad == 0){
        notepad.style.width = "100%";
        notepad.style.height = "100%";
        notepad.style.top = 0
        notepad.style.left = 0
        notepad.style.right = 0
        notepad.style.borderRadius = 0
        document.getElementById("notepadHeader").style.borderRadius = 0
        maxiNotepad = 1;
    }else if (maxiNotepad == 1){
        notepad.style.width = "40%";
        notepad.style.height = "70%";
        notepad.style.top = "8%"
        notepad.style.left = "unset";
        notepad.style.right = "20px"
        notepad.style.borderRadius = "10px";
        document.getElementById("notepadHeader").style.borderRadius = "10px 10px 0 0";
        maxiNotepad = 0;
    }
}
let maxiNotepad2 = 0
function maxNotepad2(){
    let notepad = document.getElementById("notepad2")
    if (maxiNotepad2 == 0){
        notepad.style.width = "100%";
        notepad.style.height = "100%";
        notepad.style.top = 0
        notepad.style.left = 0
        notepad.style.right = 0
        notepad.style.borderRadius = 0
        document.getElementById("notepad2Header").style.borderRadius = 0
        maxiNotepad2 = 1;
    }else if (maxiNotepad2 == 1){
        notepad.style.width = "40%";
        notepad.style.height = "70%";
        notepad.style.top = "25%"
        notepad.style.left = "unset";
        notepad.style.right = "300px"
        notepad.style.borderRadius = "10px";
        document.getElementById("notepad2Header").style.borderRadius = "10px 10px 0 0";
        maxiNotepad2 = 0;
    }
}

function closeNotepad(){
    let notepad = document.getElementById("notepad")
    notepad.style.display = "none";
    maxiNotepad = 1
    maxNotepad()
}
function closeNotepad2(){
    let notepad = document.getElementById("notepad2")
    notepad.style.display = "none";
    maxiNotepad2 = 1
    maxNotepad2()
}

function hover(){
        document.getElementsByClassName("infosNotepad")[0].style.display = "flex"
}
function hover2(){
    document.getElementsByClassName("infosNotepad2")[0].style.display = "flex"
}
    
function notHover(){
    document.getElementsByClassName("infosNotepad")[0].style.display = "none"
}
function notHover2(){
    document.getElementsByClassName("infosNotepad2")[0].style.display = "none"
}
