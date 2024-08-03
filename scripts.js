
let employees = [];
let employeeId = 1;

document.getElementById('addEmployeeButton').addEventListener('click', addEmployee);

function addEmployee() {
  const name = document.getElementById('name').value;
  const profession = document.getElementById('profession').value;
  const age = document.getElementById('age').value;
  const messageElement = document.getElementById('message');

  if (name && profession && age) {
    const employee = {
      id: employeeId++,
      name,
      profession,
      age: parseInt(age)
    };
    employees.push(employee);
    displayEmployees();
    messageElement.textContent = 'Success: Employee Added!';
    messageElement.className = 'success';
    clearForm();
  } else {
    messageElement.textContent = 'Error: Please make sure all the fields are filled before adding an employee!';
    messageElement.className = 'error';
  }
}

function displayEmployees() {
  const employeeList = document.getElementById('employeeList');
  const employeeCount = document.getElementById('employeeCount');
  employeeList.innerHTML = '';

  employees.forEach((employee, index) => {
    const employeeDiv = document.createElement('div');
    employeeDiv.className = 'employee';
    employeeDiv.innerHTML = `
      <p>${index + 1}.</p>
      <p>Name: ${employee.name}</p>
      <p>Profession: ${employee.profession}</p>
      <p>Age: ${employee.age}</p>
      <button class="delete-button" onclick="deleteEmployee(${employee.id})">Delete User</button>
    `;
    employeeList.appendChild(employeeDiv);
  });

  employeeCount.textContent = ``;
}

function deleteEmployee(id) {
  employees = employees.filter(employee => employee.id !== id);
  displayEmployees();
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('profession').value = '';
  document.getElementById('age').value = '';
}

