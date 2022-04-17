function lockedProfile() {

    const buttons = Array.from(document.querySelectorAll('.profile button'));
    for (const button of buttons) {
        button.addEventListener('click', reveal)
    }
    function reveal(e) {
        let buttonElement = e.target;
        let checkUnlock = buttonElement.parentElement
        .querySelector('input[type="radio"][value="unlock"]').checked;
        
        if(checkUnlock){

            let div = buttonElement.parentElement.querySelector('div')
    
            if (buttonElement.textContent == 'Show more') {
                buttonElement.textContent = 'Hide it';
                div.style.display = 'block';
            } else {
                buttonElement.textContent = 'Show more';
                div.style.display = '';
            }
        }
    }
}