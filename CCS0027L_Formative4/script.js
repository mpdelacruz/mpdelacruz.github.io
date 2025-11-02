document.getElementById("saveBtn").addEventListener("click", function () {
  const idNumber = document.getElementById("idNumber").value;
  const firstName = document.getElementById("firstName").value;
  const middleName = document.getElementById("middleName").value;
  const lastName = document.getElementById("lastName").value;
  const gender = document.getElementById("gender").value;
  const birthday = document.getElementById("birthday").value;

  // Validate required fields
  if (!idNumber || !firstName || !lastName || !gender || !birthday) {
    alert("Please fill out all required fields!");
    return;
  }

  // Reference the table body
  const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
  
  // Create a new row
  const newRow = table.insertRow();

  // Create an array of values
  const data = [idNumber, firstName, middleName, lastName, gender, birthday];
  
  // Insert each value into a new cell
  data.forEach(value => {
    const cell = newRow.insertCell();
    cell.textContent = value;
  });

  // Reset the form after saving
  document.getElementById("signupForm").reset();
});

