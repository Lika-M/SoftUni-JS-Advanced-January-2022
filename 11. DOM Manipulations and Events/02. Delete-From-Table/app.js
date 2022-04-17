function deleteByEmail() {
    
    let inputText = document.getElementsByName('email')[0];
    let email = inputText.value
    let rows = Array.from(document.querySelectorAll('#customers tbody tr'));
    let deleted = document.getElementById('result');

    for (let row of rows) {
        let currentEmail = row.children[1]
    
        if (currentEmail.textContent === email) {
            row.remove();
            deleted.textContent = 'Deleted.'
        } else {
            deleted.textContent = 'Not found.'
        }
    }

}