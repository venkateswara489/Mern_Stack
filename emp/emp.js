let employees = JSON.parse(localStorage.getItem("employees")) || [];

displayEmployees();

function addEmployee() {
    let name = document.getElementById("empName").value;
    let age = document.getElementById("empAge").value;
    let department = document.getElementById("empDepartment").value;
    let salary = document.getElementById("empSalary").value;

    // validation
    if (name === "" || age === "" || department === "" || salary === "") {
        alert("Please fill all the fields");
        return;
    }

    let employee = {
        id: Date.now(),
        name: name,
        age: age,
        department: department,
        salary: salary
    };

    // push data into local storage
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));

    ClearForm();
    displayEmployees();
}

// displaying existing data
function displayEmployees() {
    let table = document.getElementById("employeeTable");
    table.innerHTML = "";

    employees.forEach(function (emp) {
        table.innerHTML += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.age}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
                <td>
                    <button class="edit-btn" onclick="editEmployee(${emp.id})">
                        Edit
                    </button>
                    <button class="delete-btn" onclick="deleteEmployee(${emp.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}