const users = JSON.parse(localStorage.getItem("users") || "[]");
const modalContainer = document.getElementById('modalContainer');
const modalOverlay = document.getElementById('modalOverlay');
const formContainer = document.getElementById('formContainer');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

function showModal() {
    modalContainer.style.display = 'block';
    modalOverlay.style.display = 'block';
    setTimeout(() => {
        formContainer.classList.add('show-login'); 
    }, 100);
}

function closeModal() {
    modalContainer.style.display = 'none';
    modalOverlay.style.display = 'none';
}

function toggleForms() {
    if (formContainer.classList.contains('show-login')) {
        formContainer.classList.remove('show-login');
        formContainer.classList.add('show-register');
    } else {
        formContainer.classList.remove('show-register');
        formContainer.classList.add('show-login');
    }
}


document.getElementById('registerButton').addEventListener('click', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Cadastro realizado com sucesso!");
    closeModal();
    window.location.href = "index.html";
});


document.getElementById('loginButton').addEventListener('click', function(e) {
    e.preventDefault();
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const userExists = users.find(user => user.email === loginEmail && user.password === loginPassword);

    if (userExists) {
        alert("Login bem-sucedido!");
        closeModal();
        window.location.href = "index.html";
    } else {
        alert("E-mail ou senha incorretos.");
    }
});

