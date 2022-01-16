const mymodal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

let data ={
    transactions: []
};

document.getElementById("button-logout").addEventListener("click", logout);

//ADICIONAR LANÇAMENTOS
document.getElementById("transaction-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const value = parseFloat(document.getElementById("value-input").value);
    const description = document.getElementById("descrition-input").value;
    const date = document.getElementById("date-input").value;
    const type = document.querySelector('input[name"type-input"]:checked').value;

    data.transactions.unshift({
        value: value, type: type, description: description, date: date
    })

    saveDate(date);
    e.target.reset();
    mymodal.hide();

    gettransaction();

    alert("Lançamento adicionado com sucesso.");
})

checklogged();

function checklogged() {
    if(session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(!logged) {
        window.location.href = "index.html";
        return;
    }
}
const dataUser = localStorage.getItem(logged);
    if(dataUser) {
        data = JSON.parse(dataUser);

gettransaction();

}

function logout() {
        sessionStorage.removeItem("logged");
        localStorage.removeItem("session");
    
        window.location.href = "index.html";

        if(transaction.length) {
            transactio.forEach((item) => {
                let type = "Entrada";

                    if(item.type === "2") {
                        type = "Saída";
                    }

 function gettransaction() {
         const transaction = date.transaction;
        let transactionHtml = '';
     }  

                    transactionHtml += `
                <tr>
                    <th scope="row">${item.date}</th>
                    <td>${item.value.tofixed(2)}</td>
                    <td>${type}</td>
                    <td>${item.description}</td>
                </tr> 
                    `
            });

        }

        document.getElementById("transaction-list").innerHTML = transactionHtml;

    }

    function saveDate(date) {
        localStorage.setItem(data.login, JSON.stringify(data));
    }