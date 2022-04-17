function calculator() {
    let num1 ='';
    let num2 = '';
    let outputField = '';

    return {
        init(s1, s2, s3) {
            num1 = document.querySelector(s1);
            num2 = document.querySelector(s2);
            outputField = document.querySelector(s3);
        },
        add() {
            outputField.value = Number(num1.value) + Number(num2.value);
        },
        subtract() {
            outputField.value = Number(num1.value) - Number(num2.value)
        }
    };
}