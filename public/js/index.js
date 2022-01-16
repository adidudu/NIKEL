const mymodal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checklogged();

//LOGAR NO SISTEMA

//LOGAR NO SISTEMA
document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value; 
    const checksession = document.getElementById("session-check").checked;

    const account = getAccount(email);

    if(!account) {
        alert("Opss, Verifique o usuário ou a senha!")
        return;
    }

    if(account) {
        if( account.password !== password){
        alert("Opss, Verifique o usuário ou a senha!")
        return;
    }

        saveSession(email, checksession);

        window.location.href = "home.html";
    } 
});

//CRIAR CONTA

document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;
if(email.length < 5) {
    alert("Preencha o campo com email válido.");
    return;
}  

if(password.length < 5) {
    alert("Preencha a senha com no mínimo 4 dígitos.");
    return;
}

saveAccount({
    login: email,
    password: password,
    transaction: []
})



mymodal.hide();

alert("Conta criada com sucesso!") 
})
   

    function checklogged() {
        if(session) {
            sessionStorage.setItem("logged", session);
            logged = session;
        }

        if(logged) {
            saveSession(logged, session);

            window.location.href = "home.html";
        }
    }


function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession) {
    if(saveSession) {
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logged",data);
}
function getAccount(key) {
    const Account = localStorage.getItem(key);

    if(Account) {
        return JSON.parse(Account);
    }

        return "";
}

