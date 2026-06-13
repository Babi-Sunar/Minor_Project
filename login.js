const form = document.getElementById("loginForm");

// form submit
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let remember = document.getElementById("remember").checked;

    if (email === "admin@gmail.com" && password === "1234") {
        window.location.href = "user_dashboard.html";
    } else {
        alert("Invalid Email or Password");
    }
    if (remember) {
        localStorage.setItem("loggedIn", "true");
    } else {
        sessionStorage.setItem("loggedIn", "true");
    }

});

window.onload = function () {
    document.getElementById('email').value = "";
    document.getElementById("password").value = "";
};

if (localStorage.getItem("loggedIn") === "true" ||
    sessionStorage.getItem("loggedIn") === "true") {
    window.location.href = "user_dashboard.html";
}