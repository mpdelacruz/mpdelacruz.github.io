// Array to store user data
let userRecords = [];

// Function to display data in the table
function displayData() {
  const tableBody = document.querySelector("#dataTable tbody");
  tableBody.innerHTML = "";

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

  // Basic validation
  if (!idNumber || !firstName || !lastName || !gender || !birthday) {
    alert("Please fill out all required fields.");
    return;
  }

  // Create a new user object
  const newUser = {
    idNumber,
    firstName,
    middleName,
    lastName,
    gender,
    birthday
  };

  // Add to the array
  userRecords.push(newUser);

  // Display updated data in the table
  displayData();

  // Clear form fields
  document.getElementById("signupForm").reset();

  // Show success message
  const message = document.getElementById("message");
  message.style.opacity = 1;
  message.textContent = "Record saved successfully!";

  // Flash form background color (yellow for interactivity)
  const form = document.getElementById("signupForm");
  form.style.backgroundColor = "#fef9c3";
  setTimeout(() => {
    form.style.backgroundColor = "#ffffff";
    message.style.opacity = 0;
  }, 1200);
}

// Add event listener when page loads
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("saveBtn").addEventListener("click", saveData);
});
