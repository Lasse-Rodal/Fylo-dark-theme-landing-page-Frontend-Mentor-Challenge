function button1Click() {
    alert("You clicked the first button!");
}

function button2Click() {
    alert("You clicked the second button!");
}

document.getElementById("button1").onclick = button1Click;
document.getElementById("button2").onclick = button2Click;
