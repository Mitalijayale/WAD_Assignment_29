function validateForm() {
  var errorMessage = "";

  // Validation logic goes here
  // You can add more validation rules as needed

  // Example: Name should not be empty
  var name = document.getElementById('name').value;
  if (name.trim() === "") {
      errorMessage += "Name is required.\n";
  }

  // Example: Password should be at least 8 characters long
  var password = document.getElementById('password').value;
  if (password.length < 8) {
      errorMessage += "Password should be at least 8 characters long.\n";
  }

  // Display error message if there are validation errors
  var errorMessageDiv = document.getElementById('error-message');
  errorMessageDiv.innerHTML = errorMessage;

  // Return false to prevent form submission if there are errors
  return errorMessage === "";
}

function cancelForm() {
  document.getElementById('registrationForm').reset();
  document.getElementById('error-message').innerHTML = "";
}

// Calculate age based on date of birth
document.getElementById('dob').addEventListener('change', function() {
  var dob = new Date(this.value);
  var today = new Date();
  var age = today.getFullYear() - dob.getFullYear();

  // If birthday hasn't occurred yet this year, subtract one year
  if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
      age--;
  }

  document.getElementById('age').value = age;
});

function calculateAge() {
  var dob = document.getElementById("dob").value;
  var today = new Date();
  var birthDate = new Date(dob);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  document.getElementById("age").value = age;
}
