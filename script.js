/***********************
 * QUEST APP - SCRIPT.JS
 * Full System: Auth + Dashboard + XP + Quests
 ***********************/

/* -----------------------
   LOCAL STORAGE KEYS
------------------------*/
const USERS_KEY = "quest_users";
const CURRENT_USER_KEY = "quest_current_user";

/* -----------------------
   AUTH SYSTEM
------------------------*/

// Signup
function signup(username, password) {
    let users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

    const exists = users.find(u => u.username === username);
    if (exists) {
        alert("User already exists!");
        return false;
    }

    const newUser = {
        username,
        password,
        level: 1,
        xp: 0,
        quests: []
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    alert("Signup successful! You can now log in.");
    return true;
}

// Login
function login(username, password) {
    let users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        alert("Invalid username or password");
        return false;
    }

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    window.location.href = "dashboard.html";
    return true;
}

/* -----------------------
   DASHBOARD LOADING
------------------------*/

function loadDashboard() {
    let user = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));

    if (!user) {
        window.location.href = "index.html";
        return;
    }

    document.getElementById("userName").innerText = user.username;
    document.getElementById("userLevel").innerText = user.level;

    updateXPUI(user);
    renderQuests(user);
}

/* -----------------------
   XP SYSTEM
------------------------*/

function addXP(user, xpGain) {
    user.xp += xpGain;

    let xpNeeded = user.level * 100;

    while (user.xp >= xpNeeded) {
        user.xp -= xpNeeded;
        user.level += 1;
        xpNeeded = user.level * 100;

        alert("Level Up! You are now level " + user.level);
    }

    saveCurrentUser(user);
    updateXPUI(user);
}

/* -----------------------
   UI UPDATES
------------------------*/

function updateXPUI(user) {
    let xpNeeded = user.level * 100;

    document.getElementById("xpText").innerText =
        `${user.xp} / ${xpNeeded} XP`;

    let percent = (user.xp / xpNeeded) * 100;
    document.getElementById("xpFill").style.width = percent + "%";

    document.getElementById("userLevel").innerText = user.level;
}

/* -----------------------
   QUEST SYSTEM
------------------------*/

function createQuest() {
    let title = document.getElementById("questTitle").value;
    let difficulty = parseInt(document.getElementById("questDifficulty").value);

    if (!title) {
        alert("Please enter a quest title");
        return;
    }

    let user = getCurrentUser();

    const quest = {
        id: Date.now(),
        title,
        xp: difficulty,
        completed: false
    };

    user.quests.push(quest);

    saveCurrentUser(user);
    renderQuests(user);

    document.getElementById("questTitle").value = "";
}

/* -----------------------
   COMPLETE QUEST
------------------------*/

function completeQuest(id) {
    let user = getCurrentUser();

    let quest = user.quests.find(q => q.id === id);

    if (!quest || quest.completed) return;

    quest.completed = true;

    addXP(user, quest.xp);

    saveCurrentUser(user);
    renderQuests(user);
}

/* -----------------------
   RENDER QUESTS
------------------------*/

function renderQuests(user) {
    let list = document.getElementById("questList");
    list.innerHTML = "";

    user.quests.forEach(q => {
        let div = document.createElement("div");
        div.className = "quest-item";

        div.innerHTML = `
            <div>
                <strong>${q.title}</strong>
                <p>+${q.xp} XP</p>
            </div>

            <button onclick="completeQuest(${q.id})"
                ${q.completed ? "disabled" : ""}>
                ${q.completed ? "Done" : "Complete"}
            </button>
        `;

        if (q.completed) {
            div.style.opacity = "0.6";
        }

        list.appendChild(div);
    });
}

/* -----------------------
   STORAGE HELPERS
------------------------*/

function getCurrentUser() {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
}

function saveCurrentUser(updatedUser) {
    let users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

    let index = users.findIndex(u => u.username === updatedUser.username);

    if (index !== -1) {
        users[index] = updatedUser;
    }

    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updatedUser));
}

/* -----------------------
   LOGOUT
------------------------*/

function logout() {
    localStorage.removeItem(CURRENT_USER_KEY);
    window.location.href = "index.html";
        }
