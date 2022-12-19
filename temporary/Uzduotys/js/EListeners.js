/*Užduotis 1.*/

let button1 = document.getElementById("button1");
let textIn = document.getElementById("input1");
button1.addEventListener("click", () => {
    textIn.value = "Labas, pasauli!";
});

/*Užduotis 2.*/

function rodyti() {
    document.getElementById("forma").style.display = "block"
}

/*Užduotis 3.*/

document.getElementById('button2').onclick = function () {


    let inp1 = document.getElementById('inp1').value;
    let inp2 = document.getElementById('inp2').value;
    let inp3 = document.getElementById('inp3').value;

    let lentele = document.getElementById('lentele');
    let eilute = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    td1.innerHTML = inp1;
    td2.innerHTML = inp2;
    td3.innerHTML = inp3;

    eilute.appendChild(td1);
    eilute.appendChild(td2);
    eilute.appendChild(td3);
    lentele.appendChild(eilute);


}