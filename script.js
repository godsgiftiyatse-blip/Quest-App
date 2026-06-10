function togglePassword(id, btn) {
  const input = document.getElementById(id);

  if (input.type === "password") {
    input.type = "text";
    btn.innerText = "Hide";
  } else {
    input.type = "password";
    btn.innerText = "Show";
  }
}

/* SIGN UP */
document.getElementById("signupForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("signupUser").value;
  const email = document.getElementById("signupEmail").value;
  const pass = document.getElementById("signupPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const exists = users.find(u => u.email === email);

  if (exists) {
    document.getElementById("signupMsg").innerText = "Email already exists!";
    return;
  }

  users.push({ user, email, pass });
  localStorage.setItem("users", JSON.stringify(users));

  document.getElementById("signupMsg").innerText = "Account created!";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1000);
});

/* LOGIN */
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const found = users.find(u => u.email === email && u.pass === pass);

  if (!found) {
    document.getElementById("loginMsg").innerText = "Invalid email or password!";
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(found));

  document.getElementById("loginMsg").innerText = "Login successful!";

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1000);
});
