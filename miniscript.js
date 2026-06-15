function addStudent(){
    // get values
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    if (name==="" || age==="" || course==="") {
        alert("Please fill all the fields");
        return;
    }

    let card = document.createElement("div");
    card.classList.add("student-card");
    card.innerHTML = `
        <h2>${name}</h2>
        <p>Age: ${age}</p>
        <p>Course: ${course}</p>
    `;

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
        card.remove();
    };

    card.appendChild(deleteBtn);
    document.getElementById("studentList").appendChild(card);
    
    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}