function toggle() {
    
    let button = document.querySelector('.button');
    if (button.textContent === 'More') {
        button.textContent = 'Less';
    } else {
        button.textContent = 'More';
    }

    let text = document.querySelector('#extra');
    if (text.style.display == 'none') {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }

}