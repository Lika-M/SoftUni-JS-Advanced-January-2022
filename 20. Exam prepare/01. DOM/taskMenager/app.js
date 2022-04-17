function solve() {
    const taskElement = document.querySelector('#task');
    const descriptionElement = document.querySelector('#description');
    const dateElement = document.querySelector('#date');
    let inputFields = [taskElement, descriptionElement, dateElement];

    const sections = document.querySelectorAll('main>div.wrapper>section');
    let [, orangeSection, yellowSection, greenSection] = sections;

    const addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', add)

    function add(e) {
        e.preventDefault();
        if (!taskElement.value || !descriptionElement || !dateElement) {
            return;
        };
        let article = create('article');
        let h3 = create('h3', taskElement.value)
        let pDescript = create('p', `Description: ${descriptionElement.value}`);
        let pDate = create('p', `Due Date: ${dateElement.value}`);
        let divBtns = create('div', '', 'flex');

        let startBtn = create('button', 'Start', 'green');
        let deleteBtn = create('button', 'Delete', 'red');

        article.appendChild(h3);
        article.appendChild(pDescript);
        article.appendChild(pDate);
        article.appendChild(divBtns);
        divBtns.appendChild(startBtn);
        divBtns.appendChild(deleteBtn);

        let div = orangeSection.querySelectorAll('div')[1];
        div.appendChild(article);
        inputFields.forEach(f => f.value = '');

        startBtn.addEventListener('click', start.bind(null, article, startBtn, deleteBtn));
        deleteBtn.addEventListener('click', del.bind(null, article));
    };
    function start(article, startButton, deleteBtn) {
        let div = yellowSection.querySelectorAll('div')[1];
        startButton.textContent = 'Delete';
        startButton.setAttribute('class', 'red');
        deleteBtn.textContent = 'Finish';
        deleteBtn.setAttribute('class', 'orange');
        div.appendChild(article);
        startButton.addEventListener('click', del.bind(null, article));
        deleteBtn.addEventListener('click', finish.bind(null, article))
    };
    function del(article) {
        article.remove();
    };
    function finish(article) {
        let div = greenSection.querySelectorAll('div')[1];
        article.querySelector('div.flex').remove();

        div.appendChild(article);
    }
    function create(type, content, className) {
        let element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.setAttribute('class', className);
        }
        return element;
    };
}

