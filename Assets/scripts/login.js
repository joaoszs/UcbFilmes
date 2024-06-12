var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn-entrar');

function login() 
{
    x.style.left = "27px";
    y.style.right = "-350px";
    z.style.left = "0px";
}

function register() 
{
    x.style.left = "-350px";
    y.style.right = "25px";
    z.style.left = "150px";
}

// Olhar senha
function myLogPassword() 
{
    var a = document.getElementById("logPassword");
    var b = document.getElementById("eye");
    var c = document.getElementById("eye-slash");
    if (a.type === "password") {
        a.type = "text";
        b.style.opacity = "0";
        c.style.opacity = "1";
    } else {
        a.type = "password";
        b.style.opacity = "1";
        c.style.opacity = "0";
    }
}

function myRegPassword() 
{
    var d = document.getElementById("regPassword");
    var b = document.getElementById("eye-2");
    var c = document.getElementById("eye-slash-2");
    if (d.type === "password") {
        d.type = "text";
        b.style.opacity = "0";
        c.style.opacity = "1";
    } else {
        d.type = "password";
        b.style.opacity = "1";
        c.style.opacity = "0";
    }
}

document.getElementById('registerForm').addEventListener('submit', function(event) 
{
    event.preventDefault();
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some(user => user.email === email);

    if (userExists) {
        alert('Este email já está cadastrado.');
    } else {
        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Usuário cadastrado com sucesso!');
        document.getElementById('registerForm').reset();
        login();
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) 
{
    event.preventDefault();
    const email = document.getElementById('logEmail').value;
    const password = document.getElementById('logPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login bem-sucedido!');
        window.location.href = 'Assets/home.html'; 
    } else {
        alert('Email ou senha incorretos.');
    }
});

login();