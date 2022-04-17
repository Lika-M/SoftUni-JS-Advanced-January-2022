function calc() {
    let first = document.querySelector("#num1").value;
    let second = document.querySelector("#num2").value;
    let sum = Number(first) + Number(second);
    document.querySelector("#sum").value = sum;
}
