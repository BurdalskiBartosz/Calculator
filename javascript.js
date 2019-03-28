let valueFirst = "";
let valueSecond = "";
let valueAfterOperation = 0;
let valueScreen = document.querySelector(".value span");
valueScreen.textContent = 0;
let operator = null;

let number = document.querySelectorAll(".numbers");
for (let i = 0; i < number.length; i++) {
    let valueNumber = number[i].textContent;
    number[i].addEventListener('click', function () {
        if (operator === null) {
            valueFirst += valueNumber;
            valueScreen.textContent = valueFirst;
        } else {
            valueSecond += valueNumber;
            valueScreen.textContent = valueSecond;
        }
    })
};

let btn_C = document.querySelector(".delete");
btn_C.addEventListener("click", function () {
    valueFirst = "";
    valueSecond = "";
    valueAfterOperation = 0;
    valueScreen.textContent = 0;
    operator = null;
})


let mathAction = document.querySelectorAll('.action');
for (let i = 0; i < mathAction.length; i++) {
    mathAction[i].addEventListener("click", function () {
        operator = mathAction[i];
    })
};
let equal = document.querySelector(".math");
equal.addEventListener("click", function () {
    switch (operator.textContent) {
        case '/':
            valueAfterOperation = parseFloat(valueFirst) / parseFloat(valueSecond);
            break;
        case "-":
            valueAfterOperation = parseFloat(valueFirst) - parseFloat(valueSecond);
            break;
        case "+":
            valueAfterOperation = parseFloat(valueFirst) + parseFloat(valueSecond);
            break;
        case "*":
            valueAfterOperation = parseFloat(valueFirst) * parseFloat(valueSecond);
            break;
    };
    valueScreen.textContent = valueAfterOperation;
    valueFirst = "" + valueAfterOperation;
    valueSecond = "";
    operator = null;

});