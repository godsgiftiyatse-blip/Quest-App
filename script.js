document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // TOGGLE PASSWORD VISIBILITY
    // =========================
    window.togglePassword = function (inputId, btn) {
        const input = document.getElementById(inputId);

        if (input.type === "password") {
            input.type = "text";
            btn.textContent = "Hide";
        } else {
            input.type = "password";
            btn.textContent = "Show";
        }
    };

    // =========================
    // SIGN UP SYSTEM
    // =========================
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("signupName").value.trim();
            const email = document.getElementById("signupEmail").value.trim();
            const password = document.getElementById("signupPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            // Validation
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters");
                return;
            }

            // Check if user already exists
            const existingUser = JSON.parse(localStorage.getItem("questUser"));

            if (existingUser && existingUser.email === email) {
                alert("Account already exists with this email");
                return;
            }

            const user = {
                name,
                email,
                password
            };

            localStorage.setItem("questUser", JSON.stringify(user));

            alert("Account created successfully!");

            window.location.href = "login.html";
        });
    }

    // =========================
    // LOGIN SYSTEM
    // =========================
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("loginEmail").value.trim();
            const password = document.getElementById("loginPassword").value;

            const storedUser = JSON.parse(localStorage.getItem("questUser"));

            if (!storedUser) {
                alert("No account found. Please sign up first.");
                return;
            }

            if (email === storedUser.email && password === storedUser.password) {
                alert("Login successful!");

                localStorage.setItem("questLoggedIn", "true");

                // store active user session
                localStorage.setItem("questActiveUser", JSON.stringify(storedUser));

                window.location.href = "dashboard.html";
            } else {
                alert("Incorrect email or password");
            }
        });
    }

});
