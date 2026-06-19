let employees =
JSON.parse(localStorage.getItem("employees"))
|| [];

displayEmployees();

function addEmployee() {

    let name =
    document.getElementById("empName").value;

    let age =
    document.getElementById("empAge").value;

    let department =
    document.getElementById("empDepartment").value;

    let email =
    document.getElementById("empEmail").value;

    let salary =
    document.getElementById("empSalary").value;

    if (
        name === "" ||
        age === "" ||
        department === "" ||
        email === "" ||
        salary === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    let employee = {
        id: Date.now(),
        name: name,
        age: age,
        department: department,
        email: email,
        salary: salary
    };

    employees.push(employee);

    localStorage.setItem(
        "employees",
        JSON.stringify(employees)
    );

    clearForm();

    displayEmployees();
}

function displayEmployees() {

    let table =
    document.getElementById("employeeTable");

    table.innerHTML = "";

    employees.forEach(function(emp) {

        table.innerHTML += `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.age}</td>
            <td>${emp.department}</td>
            <td>${emp.email || ''}</td>
            <td>${emp.salary}</td>
            <td>
                <button
                    class="edit-btn"
                    onclick="editEmployee(${emp.id})">
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteEmployee(${emp.id})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });
}

function showSummary() {

    let card = document.getElementById("summaryCard");

    if (!employees || employees.length === 0) {
        card.style.display = "block";
        card.innerHTML = "<div><strong>No employees available</strong></div>";
        return;
    }

    let total = employees.length;
    let totalSalary = employees.reduce(function(sum, e) {
        return sum + (Number(e.salary) || 0);
    }, 0);

    let avg = (totalSalary / total) || 0;

    let departments = employees
        .map(function(e) { return e.department; })
        .filter(function(d) { return d && d !== ""; });

    let uniqueDepartments = Array.from(new Set(departments));

    card.style.display = "block";
    card.innerHTML = `
        <div><strong>Total Employees:</strong> ${total}</div>
        <div><strong>Average Salary:</strong> ${avg.toFixed(2)}</div>
        <div><strong>Departments:</strong> ${uniqueDepartments.join(', ') || '—'}</div>
    `;
}

function clearSummary() {
    let card = document.getElementById("summaryCard");
    card.style.display = "none";
    card.innerHTML = "";
}

function deleteEmployee(id) {

    employees =
    employees.filter(function(emp) {
        return emp.id !== id;
    });

    localStorage.setItem(
        "employees",
        JSON.stringify(employees)
    );

    displayEmployees();
}

function editEmployee(id) {

    let employee =
    employees.find(function(emp) {
        return emp.id === id;
    });

    document.getElementById("empName").value =
    employee.name;

    document.getElementById("empAge").value =
    employee.age;

    document.getElementById("empDepartment").value =
    employee.department;

    document.getElementById("empEmail").value =
    employee.email || "";

    document.getElementById("empSalary").value =
    employee.salary;

    deleteEmployee(id);
}

function searchEmployee() {

    let searchValue =
    document.getElementById("search")
    .value.toLowerCase();

    let rows =
    document.querySelectorAll("#employeeTable tr");

    rows.forEach(function(row) {

        let employeeName =
        row.children[1]
        .textContent
        .toLowerCase();

        if(employeeName.includes(searchValue)) {
            row.style.display = "";
        }
        else {
            row.style.display = "none";
        }
    });
}

function clearForm() {

    document.getElementById("empName").value = "";
    document.getElementById("empAge").value = "";
    document.getElementById("empDepartment").value = "";
    document.getElementById("empSalary").value = "";
    document.getElementById("empEmail").value = "";
}
