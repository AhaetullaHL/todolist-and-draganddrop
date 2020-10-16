let dragSrcEl;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    dragSrcEl = this;
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData("text", this.id);
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}