
const inputBill = document.getElementById("Bill");
const inputCustom = document.getElementById("Custom");
const buttonSelecters = document.querySelectorAll(".input_Button");
const inputPeople = document.getElementById("People");
const displaysAmount = document.getElementById("displayAmount");
const displayTotal = document.getElementById("displayTotal");
const resetButton = document.getElementById("resetAll");

buttonSelecters.forEach((button) => {
    button.addEventListener("click", (e) => {
        let porcentaje = e.target.innerHTML;
        porcentaje = porcentaje.substr(0, porcentaje.length - 1);

        if (inputPeople.value === "") inputPeople.value = 1;

        tip_calculator(
            parseFloat(inputBill.value),
            parseInt(porcentaje),
            parseInt(inputPeople.value)
        )
    });

});
inputCustom.addEventListener("input", (e) => {
    if (inputBill.value === "") {
        resetAll();
        return;
    }
    
    const customValue = parseFloat(e.target.value);
    
    if (!isNaN(customValue)) {
        tip_calculator(
            parseFloat(inputBill.value),
            customValue, // Usamos el valor customValue en lugar de parseInt
            parseInt(inputPeople.value)
        );
    }
});

function tip_calculator(bill_amount, tip_percnt, num_of_people) {
    let displayAmount = (bill_amount * (tip_percnt / 100)) / num_of_people;

    displayAmount = displayAmount.toFixed(2);

    let per_person_tip = displayAmount * num_of_people + bill_amount / num_of_people;

    per_person_tip = per_person_tip.toFixed(2);

    displaysAmount.innerHTML = `$${displayAmount}`;

    displayTotal.innerHTML = `$${per_person_tip}`;
}

function resetAll() {
    inputBill.value = "";
    inputPeople.value = "";
    inputCustom.value = "";
    displayAmount.innerHTML = "$0.00";
    displayTotal.innerHTML = "$0.00";
}
resetButton.addEventListener("click", resetAll);