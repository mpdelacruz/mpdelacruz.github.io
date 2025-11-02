// Array to store user data
let userRecords = [];

// Function to display data in table
function displayData() {
  const tableBody = document.querySelector("#dataTable tbody");
  tableBody.innerHTML = ""; // Clear existing rows

  userRecords.forEach(record => {
    const row = document.createElement("tr");
    for (let key in record) {
      const cell = document.createElement("td");
      cell.textContent = record[key];
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  });
}

// Function to handle Save button click
function saveData() {
  const idNumber = document.getElementById("idNumber").value.trim();
  const firstName = document.getElementById("firstName").value.trim();
  const middleName = document.getElementById("middleName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const gender = document.getElementById("gender").value;
  const birthday = document.getElementById("birthday").value;

  // Validation
  if (!idNumber || !firstName || !lastName || !gender || !birthday) {
    alert("Please fill out all required fields.");
    return;
  }

  // Store data in object
  const newUser = {
    idNumber,
    firstName,
    middleName,
    lastName,
    gender,
    birthday
  };

  // Add to array
  userRecords.push(newUser);

  // Update table display
  displayData();

  // Clear form
  document.getElementById("signupForm").reset();

  // Interactivity: change form background color briefly
  const form = document.getElementById("signupForm");
  form.style.backgroundColor = "#dbeafe";
  setTimeout(() => form.style.backgroundColor = "white", 800);
}

// Add event listener for button click
document.getElementById("saveBtn").addEventListener("click", saveData);
