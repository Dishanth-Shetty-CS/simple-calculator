//When page loads set the initial display value to "0"
document.getElementById("display").value = "0";

//Initially resultDisplayed = false, because result is not displayed yet
let IsResultDisplayed = false;

//Function for displaying values in the calculator display
function Show(val) {
    let display = document.getElementById("display");
    if (IsResultDisplayed || display.value === "0" || display.value === "Error" || display.value === "Infinity") {
        display.value = val;
        IsResultDisplayed = false;
    } else {
        display.value = display.value + val;
    }
}

//Function for evaluation, it calls when user clicks "="
function Solve() {
    try {
        let x = document.getElementById("display").value;
        let y = eval(x);
        document.getElementById("display").value = y;
        IsResultDisplayed = true;
    } catch {
        document.getElementById("display").value = "Error";
        IsResultDisplayed = true;
    }
}

// This function is clears current input and set display value to "0"
function Clear() {
    document.getElementById("display").value = "0";
}

// Initialize memory with 0, avoiding the garbase value storage
let memory = 0;

//This function is used to store the value to the memory (M+)
function MemoryAdd() {
    let cvalue = parseFloat(document.getElementById("display").value);
    if (!isNaN(cvalue)) {
        memory = memory + cvalue;
    } else {
        document.getElementById("display").value = "Error";
    }
}

//This function is used to subtract the value from the memory (M-)
function MemorySub() {
    let cvalue = parseFloat(document.getElementById("display").value);
    if (!isNaN(cvalue)) {
        memory = memory - cvalue;
    } else {
        document.getElementById("display").value = "Error";
    }
}

//This function is used to recall the current memory value (MR)
function MemoryRecall() {
    document.getElementById("display").value = memory;
}

// This function will clears the memory value and set to "0" (MC)
function MemoryClear() {
    memory = 0;
}

// This function will clears the memory as well as display and sets both to "0"
function AllClear() {
    memory = 0; //sets memory to 0
    document.getElementById("display").value = "0";
}

// This function is used to add the (.) decimal value at the end if it is not present
function Decimalpoint() {
    let calc_display = document.getElementById("display"); //HTML element for display

    //Splitting the current value according to the operations +,-,* and /
    let current_value = calc_display.value.split(/[\+\-\*\/]/);

    //It will extract the last number the user currently enters
    let last_number = current_value[current_value.length - 1];

    //If the last number does not contains any (.) decimal value then add it.
    if (!last_number.includes(".")) {
        calc_display.value = calc_display.value + ".";
    }
}
