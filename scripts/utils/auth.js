const dbFile = "products.json";

function showLogin() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    if (loginForm && registerForm) {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    }
}

function showRegister() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    if (loginForm && registerForm) {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }
}

const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm?.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("registerName").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;

        const res = await fetch(dbFile);
        const data = await res.json();
        let users = data.users || [];

        let localUsers = JSON.parse(localStorage.getItem("users")) || [];

        if (users.concat(localUsers).some(u => u.email === email)) {
            alert("Bu email allaqachon mavjud!");
            return;
        }

        const newUser = { id: Date.now(), name, email, password };
        localUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(localUsers));

        alert("Ro‘yxatdan muvaffaqiyatli o‘tdingiz!");
        showLogin();
    });
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm?.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const res = await fetch(dbFile);
        const data = await res.json();
        let users = data.users || [];

        let localUsers = JSON.parse(localStorage.getItem("users")) || [];

        const allUsers = users.concat(localUsers);
        const user = allUsers.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            window.location.href = "pages/home.html";
        } else {
            alert("Email yoki parol noto‘g‘ri!");
        }
    });
}

function authCheck() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const isIndex = window.location.href.includes("index.html") || window.location.pathname === "/";

    if (isIndex) {
        if (currentUser) {
            window.location.href = "pages/home.html";
        }
    } else {
        if (!currentUser) {
            window.location.href = "../index.html";
        } else {
            const userNameEl = document.getElementById("userName");
            if (userNameEl) userNameEl.textContent = currentUser.name;
        }
    }
};

const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn?.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        window.location.href = "../index.html";
    });
}

export default {
    authCheck, loginForm, showLogin, showRegister
}