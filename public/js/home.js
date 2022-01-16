const mymodal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

let data ={
    transactions: []
};

document.getElementById("button-logout").addEventListener("click", logout);
document.getElementById("transaction-button").addEventListener("click", function() {
    window.location.href = "transaction.html"
}

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

        getcashIn();
        getcashOut();
        getTotal();

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
}

    getcashIn();
    getcashOut();
    getTotal();


    function logout() {
        sessionStorage.removeItem("logged");
        localStorage.removeItem("session");

        window.location.href = "index.html";
    }

    function getcashIn() {
        const transaction = date.transaction;

        const cashIn = transaction.filter((item) => item.type === "1");
        console.log(cashIn);
        if(cashIn.length) {
            let cashInhtml = ``;
            let limit = 0;

            if(cashIn.length >5) {
                let limit = 5;
            } else {
                limit = (cashIn.length);
            }

            for (let index = 0; index < limit; index++) {
               cashInhtml += `
               <div class="rol mb-4">
                    <div class="col-12">
                      <h3>class "fs-2"> $(cashIn{index}.value.topfixed(2))</h3>
                      <div class="container p-0">
                        <div class="row">
                          <div class="col-12 col-md-8">
                            <p>$ {cashIn{index}.description}</p>
                          </div>
                          <div class="col-12 col-md-3 d-flex justify-content-end">
                            ${cashIn[index].date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               `
                
            }

            document.getElementById("cash-in-list").innerHTML = cashInhtml;

        }      
    }
    function getcashOut() {
        const transaction = date.transaction;

        const cashIn = transaction.filter((item) => item.type === "2");
        console.log(cashIn);
        if(cashIn.length) {
            let cashInhtml = ``;
            let limit = 0;

            if(cashIn.length >5) {
                let limit = 5;
            } else {
                limit = (cashIn.length);
            }

            for (let index = 0; index < limit; index++) {
               cashInhtml += `
               <div class="rol mb-4">
                    <div class="col-12">
                      <h3>class "fs-2"> $(cashIn{index}.value.topfixed(2))</h3>
                      <div class="container p-0">
                        <div class="row">
                          <div class="col-12 col-md-8">
                            <p>$ {cashIn{index}.description}</p>
                          </div>
                          <div class="col-12 col-md-3 d-flex justify-content-end">
                            ${cashIn[index].date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               `
                
            }

            document.getElementById("cash-out-list").innerHTML = cashInhtml;

        }      
    }
    function getTotal() {
        const transaction = data.transaction;
        let total = 0;

        transaction.forEach((item) => {
            if(item.type === "1") {
                total += item.value;
            } else {
                total -= item.value;
            }
        });

        document.getElementById("total").innerHTML = 'R$ ${total.tofixed(2)}';
    }

    function saveDate(date) {
        localStorage.setItem(data.login, JSON.stringify(data));
    }