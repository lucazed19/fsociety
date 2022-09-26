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

function openNotepad(){
    document.getElementById("notepad").style.display ="block"
}

function minNotepad(){
    document.getElementById("notepad").style.display ="none"
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

function closeNotepad(){
    let notepad = document.getElementById("notepad")
    notepad.style.display = "none";
    maxiNotepad = 1
    maxNotepad()
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
