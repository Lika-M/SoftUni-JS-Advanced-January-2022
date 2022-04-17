function addItem() {
    let inputElement = document.querySelector('#newItemText');
    let text = inputElement.value;
    let li = document.createElement('li');
    li.textContent = text;

    let ul = document.querySelector('#items');
    let deleteButton = document.createElement('a');

    deleteButton.setAttribute('href', '#');
    deleteButton.textContent = '[Delete]';

    deleteButton.addEventListener('click', removeElement);

    function removeElement(ev){
        let parent = ev.target.parentElement;
        parent.remove()
    }

    li.appendChild(deleteButton);
    ul.appendChild(li);
    inputElement.value = '';
}