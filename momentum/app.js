const loginForm = document.querySelector("#login-form")

const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    // console.log(loginInput.value); // loginInput's value
    // console.log("onLoginBtnClick");
    /*const username = loginInput.value;
    if (username === "") { // space username is not input
        alert("Please write your name.");
    }else if (username.length > 15){ // username length 제한
        alert("Your name is too long.")
    }*/
    event.preventDefault();
    console.log(loginInput.value); // loginInput's value'
    // console.log(username);
}

function handleLinkClick(event) {
    event.preventDefault(); // prevent
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);