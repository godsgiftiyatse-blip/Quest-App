/* =====================================
   QUEST AUTHENTICATION SYSTEM
===================================== */

/* SHOW / HIDE PASSWORD */

function togglePassword(inputId, button){

    const input = document.getElementById(inputId);

    if(!input) return;

    if(input.type === "password"){

        input.type = "text";
        button.textContent = "Hide";

    }else{

        input.type = "password";
        button.textContent = "Show";

    }

}

/* =====================================
   SIGN UP
===================================== */

const signupForm = document.getElementById("signupForm");

if(signupForm){

    signupForm.addEventListener("submit", function(e){

        e.preventDefault();

        const fullName =
            document.getElementById("signupName").value.trim();

        const email =
            document.getElementById("signupEmail").value.trim().toLowerCase();

        const password =
            document.getElementById("signupPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if(
            !fullName ||
            !email ||
            !password ||
            !confirmPassword
        ){
            alert("Please fill in all fields.");
            return;
        }

        if(password !== confirmPassword){
            alert("Passwords do not match.");
            return;
        }

        if(password.length < 6){
            alert("Password must be at least 6 characters.");
            return;
        }

        const users =
            JSON.parse(localStorage.getItem("questUsers")) || [];

        const existingUser =
            users.find(user => user.email === email);

        if(existingUser){
            alert("An account already exists with this email.");
            return;
        }

        users.push({
            fullName,
            email,
            password
        });

        localStorage.setItem(
            "questUsers",
            JSON.stringify(users)
        );

        localStorage.setItem(
            "questCurrentUser",
            JSON.stringify({
                fullName,
                email
            })
        );

        alert("Account created successfully!");

        window.location.href = "login.html";

    });

}

/* =====================================
   LOGIN
===================================== */

const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email =
            document.getElementById("loginEmail").value.trim().toLowerCase();

        const password =
            document.getElementById("loginPassword").value;

        const users =
            JSON.parse(localStorage.getItem("questUsers")) || [];

        const user =
            users.find(
                u =>
                u.email === email &&
                u.password === password
            );

        if(!user){

            alert("Invalid email or password.");
            return;

        }

        localStorage.setItem(
            "questCurrentUser",
            JSON.stringify(user)
        );

        alert("Login successful!");

        /*
         Replace dashboard.html later
        */

        window.location.href = "index.html";

    });

}

/* =====================================
   CHECK LOGIN
===================================== */

function getCurrentUser(){

    const user =
        localStorage.getItem("questCurrentUser");

    if(!user) return null;

    return JSON.parse(user);

}

/* =====================================
   LOGOUT
===================================== */

function logout(){

    localStorage.removeItem(
        "questCurrentUser"
    );

    window.location.href =
        "login.html";

}

/* =====================================
   AUTO LOGIN CHECK
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const user = getCurrentUser();

    if(user){

        console.log(
            "Logged in as:",
            user.fullName || user.email
        );

    }

});
