function changeText() {
    document.getElementById("title").innerHTML = "DOM Changing";
}

function showName() {
    let name = document.getElementById("name").value;
    document.getElementById("output").innerHTML = "Hello " + name;
}
function increment() {
    let output = document.getElementById("name").value;
    let currentValue = parseInt(output) || 0;
    document.getElementById("name").value = currentValue + 1;
}
function decrement() {
    let output = document.getElementById("name").value;
    let currentValue = parseInt(output) || 0;
    document.getElementById("name").value = currentValue - 1;
}