const form = document.getElementById("signupForm");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let conformPassword = document.getElementById("conformPassword").value;

    if (password !== conformPassword) {
        alert("The conform password must match the password above.");
        document.getElementById("password").value = '';
        document.getElementById("conformPassword").value = '';
        return;
    }
    // store user info in local storage
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([]));
    }

    // user exists ?
    let users = JSON.parse(localStorage.getItem("users"));
    const existingUser = users.find(
        u => u.email === email
    );

    if (existingUser) {
        alert("Email already registered");
        return;
    }

    //store information
    const new_user = {
        name: username,
        email: email,
        password: password
    }
    // push new users
    users.push(new_user);

    // store again 
    localStorage.setItem("users", JSON.stringify(users));

    // direct to login page
    window.location.href = "login.html";

    //clear all input field
    document.getElementById("username").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
    document.getElementById("conformPassword").value = '';

    // signup success alert
    alert("Sign up successful \nLogin to join fun!");
});

