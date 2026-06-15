function changeText() {
    document.getElementById("title").innerHTML = "DOM Changing";
}

function showName() {
    let name = document.getElementById("name").value;
    document.getElementById("output").innerHTML = "Hello " + name;
}
function addTask() {
    let num = document.getElementById("name").value;
    let  output= document.createElement("p");
    output.classList.add("output");
    output.innerHTML = num;
    document.getElementById("output").appendChild(output);
}
function removetask() {
    let num = document.getElementById("output");
    document.getElementById("output").removeChild(num.lastChild);
    
}