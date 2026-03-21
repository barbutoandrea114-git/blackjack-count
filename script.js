let counter = 0;
const resetButton = document.getElementById("button-rst")
const calculateButton = document.getElementById("calculate-count")
const resultBox = document.getElementById("result-box")
const historyList = document.getElementById("history-list")

document.addEventListener('DOMContentLoaded', function () {

    const cards = document.querySelectorAll('.card');



    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            const imgSrc = card.querySelector(".my-img").src;
            const nomeCarta = imgSrc.split('/').pop().split('.')[0];
            console.log(imgSrc, nomeCarta)

            switch (nomeCarta) {
                case "asso": counter -= 1; break;
                case "king":
                case "queen":
                case "jack":
                case "dieci": counter -= 2; break;
                case "nove": counter += 0; break;
                case "otto": counter += 0; break;
                case "sette": counter += 1; break;
                case "sei": counter += 2; break;
                case "cinque": counter += 2; break;
                case "quattro": counter += 2; break;
                case "tre": counter += 1; break;
                case "due": counter += 1; break;
                default:
                    counter += parseInt(nomeCarta);
                    break;
            }
            document.querySelector(".number").textContent = counter;
        });


    });
    resetButton.addEventListener("click", () => {
        counter = 0;
        let resetTrueCount = 0;
        document.querySelector(".number").textContent = counter;
        resultBox.innerHTML = `<span class="btn btn-primary">${resetTrueCount}</span>`;

    })

    calculateButton.addEventListener("click", () => {
        let trueCount = 0;
        let decksNum = prompt("Inserisci il numero di mazzi");
        console.log(decksNum);
        trueCount = counter / decksNum;
        resultBox.innerHTML = `${trueCount.toFixed(2)}`;
        console.log(resultBox)
        historyList.innerHTML += `<li class="text-white">${trueCount.toFixed(2)} / ${counter} / ${decksNum}`


    })
});
