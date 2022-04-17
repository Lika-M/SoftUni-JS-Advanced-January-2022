// Judge gives me only 44/100

function validate() {
    let btnSubmit = document.getElementById('submit'); //
    btnSubmit.addEventListener('click', submit); //

    let checkBoxElement = document.getElementById('company'); //
    checkBoxElement.addEventListener('change', isCheck);//

    function isCheck(e) {
        let companyInfoElement = document.getElementById('companyInfo');
        companyInfoElement.style.display = e.target.checked ? 'block' : 'none';
    }
    
    function submit(e) {
        e.preventDefault();
        
        let userFieldElement = document.getElementById('username'); // 
        let emailFieldElement = document.getElementById('email'); // 
        let passwordFieldElement = document.getElementById('password'); //
        let confirmPassFieldElement = document.getElementById('confirm-password'); //
        
        let userPattern = /^[a-zA-Z0-9]{3,20}$/; //
        let passPatternAndConfirmPattern = /^\w{5,15}$/; /// match with pass
        let emailPattern = /^.+@.*\..*$/; //
        let companyNumberPattern = /^\d{1,4}$/;
        let isChecked = false;

        let validUsername = userPattern.test(userFieldElement.value); //
        let validPass = passPatternAndConfirmPattern.test(passwordFieldElement.value); //
        let validConfirmPass = passPatternAndConfirmPattern.test(confirmPassFieldElement.value);//
        let validEmail = emailPattern.test(emailFieldElement.value); //
        let validCompanyNumber = companyNumberPattern.test(companyNumberElement.value);

        let companyNumberElement = document.getElementById('companyNumber');

        if (!validUsername) {
            userFieldElement.style.borderColor = 'red'; //
        } else {
            userFieldElement.style.borderColor = 'none';
        }
        if (!validPass) {
            passwordFieldElement.style.borderColor = 'red';
        } else {
            passwordFieldElement.style.borderColor = 'none';
        }
        if (!validConfirmPass) {
            confirmPassFieldElement.style.borderColor = 'red';
        } else {
            confirmPassFieldElement.style.borderColor = 'none';
        }

        if (validPass && validConfirmPass &&
            passwordFieldElement.value !== confirmPassFieldElement.value) { //
            passwordFieldElement.style.borderColor = 'red';
            confirmPassFieldElement.style.borderColor = 'red';
        } else {
            emailFieldElement.style.borderColor = 'none';
        }
        if (!validEmail) {
            emailFieldElement.style.borderColor = 'red'; //
        } else {
            emailFieldElement.style.borderColor = 'none';
        }
        if (isChecked && !validCompanyNumber) {
            companyInfoElement.style.borderColor = 'red';
        } else {
            companyInfoElement.style.borderColor = 'none';
        }
        if (validUsername && validPass && validConfirmPass && validEmail &&
            passwordFieldElement.value == confirmPassFieldElement.value &&
            ((isChecked && validCompanyNumber) || !isChecked)) {
            document.getElementById('valid').style.display = 'inline-block'
        }

    }
}