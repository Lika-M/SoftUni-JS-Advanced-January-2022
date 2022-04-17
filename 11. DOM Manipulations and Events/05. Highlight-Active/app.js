function focused() {
    let fields = Array.from(document.getElementsByTagName('input'));
    
    for (const field of fields) {
        field.addEventListener('focus', onChange);
        field.addEventListener('blur', onBlur)
    }

    function onChange(e){
        e.target.parentNode.className = 'focused';
    }
    function onBlur(e){
        e.target.parentNode.classList.remove ('focused');
    }

}