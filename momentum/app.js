const loginForm = document.querySelector("#login-form")

const loginInput = loginForm.querySelector(`input`);
const loginButton = loginForm.querySelector("button");
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("HIDDEN_CLASSNAME");
    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`; // ``symbol
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
    event.preventDefault(); // prevent
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);