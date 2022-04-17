window.addEventListener('load', solve);

function solve() {
    let productTypeElement = document.querySelector('#type-product');
    let descriptionInputElement = document.querySelector('#description');
    let nameElement = document.querySelector('#client-name');
    let phoneElement = document.querySelector('#client-phone');

    let sectionRecieve = document.querySelector('#received-orders');
    let sectionCompletedOrders = document.querySelector('#completed-orders');

    let sendBtn = document.querySelector('#right button');
    sendBtn.addEventListener('click', add);

    function add(e) {
        e.preventDefault()

        if (descriptionInputElement.value == '' || nameElement.value == ''
            || phoneElement.value == '') {
            return;
        };
        
        let div = create('div', '', 'container');
        let h2 = create('h2', `Product type for repair: ${productTypeElement.value}`);
        let h3 = create('h3', `Client information: ${nameElement.value}, ${phoneElement.value}`);
        let h4 = create('h4', `Description of the problem: ${descriptionInputElement.value}`);
        let startBtn = create('button', 'Start repair', 'start-btn');
        let finishBtn = create('button', 'Finish repair', 'finish-btn');
        finishBtn.disabled = true;
        startBtn.addEventListener('click', repair.bind(null, startBtn, finishBtn));
        finishBtn.addEventListener('click', finish.bind(null, div));

        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startBtn);
        div.appendChild(finishBtn);
        sectionRecieve.appendChild(div);

        descriptionInputElement.value = '';
        nameElement.value = '';
        phoneElement.value = '';

    };
    function repair(stBtn, finBtn) {
        stBtn.disabled = true;
        finBtn.disabled = false;
    };
    function finish(div) {
        Array.from(div.querySelectorAll('button')).forEach(b => b.remove())
        sectionCompletedOrders.appendChild(div);
        let clearBtn = sectionCompletedOrders.querySelector('button')
        clearBtn.addEventListener('click', () => {
            div.remove()
        });
    };

    function create(type, content, className) {
        let element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.setAttribute('class', className);
        }
        return element;
    };
}

