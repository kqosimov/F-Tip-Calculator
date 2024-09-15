const calculateButton = document.getElementById("calculateButton");
const totalTipELement = document.getElementById("totalTip");
const tipPerPersonElement = document.getElementById("tipPerPerson");

calculateButton.addEventListener("click", function() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    const numPeople = parseInt(document.getElementById("numPeople").value);

    if (isNaN(billAmount) || billAmount <= 0) {
        alert("PLease enter a valid bill amount");
        return;
    }
    if (isNaN(tipPercentage) || tipPercentage <= 0) {
        alert("PLease enter a valid tip percentage");
        return;
    }
    if (isNaN(numPeople) || numPeople < 1) {
        alert("PLease enter a valid number of people");
        return;
    }

    const totalTip = (billAmount * tipPercentage) / 100;

    const tipPerPerson = totalTip / numPeople;

    totalTipELement.textContent = totalTip.toFixed(2);
    tipPerPersonElement.textContent = tipPerPerson.toFixed(2);
})
