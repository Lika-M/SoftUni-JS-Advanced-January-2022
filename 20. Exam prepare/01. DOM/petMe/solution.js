function solve() {

    let inputFields = document.querySelectorAll('#container input');
    let addButton = document.querySelector('#container button');
    let adoptionUl = document.querySelector('#adoption ul');
    let adoptedList = document.querySelector('#adopted ul');
    addButton.addEventListener('click', addPet);

    function addPet(e) {
        e.preventDefault();

        const input = {
            name: inputFields[0].value.trim(),
            age: inputFields[1].value.trim(),
            kind: inputFields[2].value.trim(),
            owner: inputFields[3].value.trim()
        };

        let { name, age, kind, owner } = input;

        if (!name || !age || !kind || !owner || Number.isNaN(Number(age))) {
            return;
        };

        let p = document.createElement('p');
        p.innerHTML = `<strong>${input.name}</strong> is a <strong>${input.age}</strong> year old <strong>${input.kind}</strong>`;

        let span = el('span', {}, `Owner: ${input.owner}`);
        let contactBtn = el('button', {}, "Contact with owner");

        let li = el('li', {}, p, span, contactBtn);
        adoptionUl.appendChild(li);
        contactBtn.addEventListener('click', () => contact());

        Array.from(inputFields).forEach(f => f.value = '');

        function contact() {
            let input = el('input', { 'placeholder': "Enter your names" });
            let adoptBtn = el('button', {}, 'Yes! I take it!');
            let div = el('div', {}, input, adoptBtn);
            li.appendChild(div);

            contactBtn.remove();
            adoptBtn.addEventListener('click', () => adopt(input, li, span, div))
        };
    };

    function adopt(input, li, span, div) {
        let newOwner = input.value.trim();

        if (newOwner == '') {
            return;
        };
        let checkBtn = el('button', {}, 'Checked');
        li.appendChild(checkBtn);
        div.remove();
        span.textContent = `New Owner: ${newOwner}`
        adoptedList.appendChild(li);
        checkBtn.addEventListener('click', () => {li.remove()});
    };

    function el(type, attributes, ...content) {
        const element = document.createElement(type);

        for (let property in attributes) {
            element[property] = attributes[property];
        };
        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        };
        return element;
    };
};



