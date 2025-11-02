// Save form data
document.getElementById("saveBtn").addEventListener("click", function () {
  const idNumber = document.getElementById("idNumber").value;
  const firstName = document.getElementById("firstName").value;
  const middleName = document.getElementById("middleName").value;
  const lastName = document.getElementById("lastName").value;
  const gender = document.getElementById("gender").value;
  const birthday = document.getElementById("birthday").value;

  if (!idNumber || !firstName || !lastName || !gender || !birthday) {
    alert("Please fill out all required fields!");
    return;
  }

  const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();
  const data = [idNumber, firstName, middleName, lastName, gender, birthday];

  data.forEach(value => {
    const cell = newRow.insertCell();
    cell.textContent = value;
  });

  document.getElementById("signupForm").reset();
});

// Toggle Dark/Light mode
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
