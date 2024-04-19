let colors = {
  primaryColor: "#0085FF",
  borderColor: "#CECECE",
  dangerColor: "crimson",
  textColor: "#050505",
};

let auth = {
  username: "sairajmane.pict@gmail.com",
  password: "123",
};

// Avoid click to submit
function setPrimitives() {
  document.querySelector("#log_in").addEventListener("submit", (event) => {
    event.preventDefault();
    validate();
  });
}

// Remove highlights from the input elements
function normalizeInput(elements) {
  for (i in elements) {
    i.style.borderColor = colors.borderColor;
  }
}

// hight light input fields
function highlightInput(elements) {
  for (i in elements) {
    i.style.borderColor = colors.dangerColor;
  }
}

function validate() {
  let form = document.forms["log_in"];
  console.log(form);
  let usernameInput = form.elements["username"];
  let passwordInput = form.elements["password"];
  // console.log(usernameInput.value, passwordInput.value);
  // if(usernameInput.value == auth.username && passwordInput.value == auth.password) {
  //     window.location.href('./succes.html');
  // }
  // else {
  //     let elements = [usernameInput, passwordInput];
  // }
  highlightInput([usernameInput, passwordInput]);
}

// Show errors
function showHightlight() {
  let textHightlight = document.querySelector("#hightlight-error");
  textHightlight.innerHTML = "Check Credentials";
  textHightlight.style.color = colors.dangerColor;
}

// Hide error text
function hideHiglight() {
  let textHightlight = document.querySelector("#hightlight-error");
  textHightlight.innerHTML = "Log in to explore";
  textHightlight.style.color = colors.textColor;
}

// Submit the form
function submit(form) {
  console.log(form);
  // form.submit();
}
