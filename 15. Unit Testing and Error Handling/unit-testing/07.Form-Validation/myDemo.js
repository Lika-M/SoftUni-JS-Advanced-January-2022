function validate() {
    let userFieldElement = document.getElementById('username');
    // let emailFieldElement = document.getElementById('email');
    // let passwordFieldElement = document.getElementById('password');
    // let confirmPassFieldElement = document.getElementById('confirm-password');
    // let checkBoxElement = document.getElementById('company');
    // let companyInfoElement = document.getElementById('companyInfo');
    let btnSubmit = document.getElementById('submit');
    btnSubmit.addEventListener('change', submit);
  

    // let userPattern = /^[a-zA-Z0-9]{3,20}$/;
    // let passPatternAndConfirmPattern = /^\w{5,15}$/; /// match with pass
    // let emailPattern = /^.+@.+\..+$/;
    // let companyNumberPattern = /^\d{1,4}$/;


    // checkBoxElement.addEventListener('click', () => {
    //     if (checkBoxElement.checked) {
    //         companyInfoElement.style.display = 'inline';
    //     } else {
    //         companyInfoElement.style.display = 'none';
    //     }
    // });

    function submit(e) {
        // e.preventDefault()
        // let validUsername = userPattern.exec(userFieldElement.value);
        console.log(userFieldElement.value);
        // let validPass = passPatternAndConfirmPattern.exec(passwordFieldElement.value);
        // let validConfirmPass = passPatternAndConfirmPattern.exec(confirmPassFieldElement.value);
        // let validEmail = emailPattern.exec(emailFieldElement.value);
        // let validCompanyNumber = companyNumberPattern.exec(companyInfoElement.value);
        // if (!validUsername) {
        //     userFieldElement.style.borderColor = 'red';
        // } else {
        //     userFieldElement.style.borderColor = 'none';
        // }

        // if (!validPass) {
        //     passwordFieldElement.style.borderColor = 'red';
        // } else {
        //     passwordFieldElement.style.borderColor = 'none';
        // }
        // if (!validConfirmPass) {
        //     confirmPassFieldElement.style.borderColor = 'red';
        // } else {
        //     confirmPassFieldElement.style.borderColor = 'none';
        // }
        // if (!validEmail) {
        //     emailFieldElement.style.borderColor = 'red';
        // } else {
        //     emailFieldElement.style.borderColor = 'none';
        // }
        // if (!validCompanyNumber) {
        //     companyInfoElement.style.borderColor = 'red';
        // } else {
        //     companyInfoElement.style.borderColor = 'none';
        // }



    }
}
