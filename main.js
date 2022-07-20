let currentText = document.querySelector(".screen");
let currentOp = "";
let previousOp = "";
let operation = null;


function display() {
    currentText.textContent = currentOp;
}

const clear = document.querySelector(".clear");
clear.addEventListener("click", e => {
    currentOp = "";
    operation = null;
    display();
})

const deleteNum = document.querySelector(".delete");
deleteNum.addEventListener("click", e => {
    currentOp = currentOp.slice(0, -1);
    display();
})

const equals = document.querySelector(".equals");
equals.addEventListener("click", e => {
    if(operation === "+") { 
        previousOp = previousOp.slice(0, -1);
        previousOp = parseFloat(previousOp);
        currentOp = parseFloat(currentOp);
        add(previousOp, currentOp);
    } 
    if(operation === "-") {
        previousOp = previousOp.slice(0, -1);
        previousOp = parseFloat(previousOp);
        currentOp = parseFloat(currentOp);
        subtract(previousOp, currentOp);
    }
    if(operation === "X") {
        previousOp = previousOp.slice(0, -1);
        previousOp = parseFloat(previousOp);
        currentOp = parseFloat(currentOp);
        times(previousOp, currentOp);
    }
    if(operation === "/") {
        previousOp = previousOp.slice(0, -1);
        previousOp = parseFloat(previousOp);
        currentOp = parseFloat(currentOp);
        divide(previousOp, currentOp);
    }

});

const operator = document.querySelectorAll(".operation")
operator.forEach(item => {
    item.addEventListener("click", e => {
        if (currentOp === "") return
        if (operation !== null) {
            if(operation === "+") { 
                previousOp = previousOp.slice(0, -1);
                previousOp = parseFloat(previousOp);
                currentOp = parseFloat(currentOp);
                currentOp = add(previousOp, currentOp);
            } 
            if(operation === "-") {
                previousOp = previousOp.slice(0, -1);
                previousOp = parseInt(previousOp);
                currentOp = parseInt(currentOp);
                currentOp = subtract(previousOp, currentOp);
            }
            if(operation === "X") {
                previousOp = previousOp.slice(0, -1);
                previousOp = parseInt(previousOp);
                currentOp = parseInt(currentOp);
                currentOp = times(previousOp, currentOp);
            }
            if(operation === "/") {
                previousOp = previousOp.slice(0, -1);
                previousOp = parseInt(previousOp);
                currentOp = parseInt(currentOp);
                currentOp = divide(previousOp, currentOp);
            }
        }
        // return equals;
        operation = item.textContent
        console.log(item.innerText)
        currentOp = currentOp + operation;
        display();
    })
})

//current op with last element sliced off plus prev op



const numBtn = document.querySelectorAll(".num");
numBtn.forEach(item => {
    item.addEventListener("click", e => {
        if (item.textContent==="." && currentOp.includes(".")) return
        if (currentOp.includes("+")) {
            previousOp = currentOp;
            currentOp = "";
            // currentOp += item.textContent
        }
        if (currentOp.includes("-")) {
            previousOp = currentOp;
            currentOp = "";
            // currentOp += item.textContent
        }
        if (currentOp.includes("X")) {
            previousOp = currentOp;
            currentOp = "";
            // currentOp += item.textContent
        }
        if (currentOp.includes("/")) {
            previousOp = currentOp;
            currentOp = "";
            currentOp += item.textContent
        }
        else {
            console.log(item.innerText);
            currentOp += item.textContent
        }
        display();
    })
})


const add = function(num1, num2) {
    currentText.textContent = num1 + num2;
    return num1 + num2;
}

const subtract = function(num1, num2) {
    currentText.textContent = num1 - num2;
	return num1-num2;
};

const times = function(num1, num2) {
    currentText.textContent = num1 * num2;
	return num1*num2;
};

const divide = function(num1, num2) {
    currentText.textContent = num1/num2;
	return num1/num2;
};

const sum = function(array) {

	return array.reduce((a, b)=> a + b, 0);

};

const multiply = function(array) {
  return array.length ? array.reduce((a, b) => a*b) : 0;

};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	if (num === 0) return 1;
  prod = 1;
  for (let i = num; i >=1; i--) {
    prod *= i;
  }
  return prod; 
  }