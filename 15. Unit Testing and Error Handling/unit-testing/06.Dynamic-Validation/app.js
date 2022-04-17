function validate() {
    let inputField = document.getElementById('email');
    inputField.addEventListener('change', validate);
    
    function validate() {
        let template = /^[a-z]+@[a-z]+\.[a-z]+$/;
      
        let validMail = template.exec(inputField.value);

        if (validMail) {
            inputField.classList.remove('error');
        } else {
            inputField.classList.add('error')
        }
    }
}