function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', onChange);
  
    function onChange(e){
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if(pattern.test(e.target.value)){
            e.target.setAttribute('class', '');
        }else{
            e.target.setAttribute('class', 'error');
        } 
    }
}

