window.addEventListener('load', solve);

function solve() {
    let inputGenreElement = document.querySelector('#genre');
    let inputNameElement = document.querySelector('#name');
    let inputAutorElement = document.querySelector('#author');
    let inputDateElement = document.querySelector('#date');
    let divCollection = document.querySelector('.all-hits-container');

    let addBtn = document.querySelector('#add-btn');
    addBtn.addEventListener('click', addItem);

    let divWrapper = document.querySelector('#wrapper')
    divWrapper.addEventListener('click', onLoad);


    function addItem(e) {
        e.preventDefault();

        if (!(inputGenreElement.value && inputNameElement.value &&
            inputAutorElement.value && inputDateElement.value)) {
            return;
        }

        let divHitsInfo = document.createElement('div');
        divHitsInfo.classList.add('hits-info');

        let img = document.createElement('img');
        img.src = './static/img/img.png';
        divHitsInfo.appendChild(img)

        let h2Genre = document.createElement('h2');
        h2Genre.textContent =`Genre: ${inputGenreElement.value}`;
        divHitsInfo.appendChild(h2Genre)

        let h2Name = document.createElement('h2');
        h2Name.textContent =`Name: ${inputNameElement.value}`;
        divHitsInfo.appendChild(h2Name)

        let h2Author = document.createElement('h2');
        h2Author.textContent = `Author: ${inputAutorElement.value}`;
        divHitsInfo.appendChild(h2Author)

        let h3Date = document.createElement('h3');
        h3Date.textContent = `Date: ${inputDateElement.value}`;
        divHitsInfo.appendChild(h3Date)

        let saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save song';
        saveBtn.classList.add('save-btn')
        divHitsInfo.appendChild(saveBtn);

        let likeBtn = document.createElement('button');
        likeBtn.textContent = 'Like song';
        likeBtn.classList.add('like-btn')
        divHitsInfo.appendChild(likeBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn')
        divHitsInfo.appendChild(deleteBtn);

        divCollection.appendChild(divHitsInfo);

        inputGenreElement.value = '';
        inputNameElement.value = '';
        inputAutorElement.value = '';
        inputDateElement.value = '';
    }
    function onLoad(e) {
        if (e.target.tagName != 'BUTTON') {
            return;
        };
        if (e.target.textContent == 'Save song') {

            let divSaveContainerElement = document.querySelector('#saved-hits .saved-container');
            let divHitsIfo = document.querySelector('div.hits-info');
            divCollection.removeChild(divHitsIfo);
            divSaveContainerElement.appendChild(divHitsIfo);

            divHitsIfo.removeChild(document.querySelector('.saved-container .save-btn'));
            divHitsIfo.removeChild(document.querySelector('.saved-container .like-btn'));

            document.querySelector('.saved-container .delete-btn')
                .addEventListener('click', (e) => { e.target.parentNode.remove() })
        }
    
        if (e.target.textContent == 'Like song') {
            let likePelement = document.querySelector('#total-likes p');
            let totalLikes =  +likePelement.textContent[likePelement.textContent.length - 1];
            likePelement.textContent = `Total Likes: ${totalLikes + 1}`;
            e.target.disabled = true;
        };

        if (e.target.textContent == 'Delete') {
            e.target.parentNode.remove();
        }
    }
}


'<p>Totallikes:1</p><imgsrc="./static/img/like-btn.jpg"alt="image-like">'
'<p>TotalLikes:1</p><imgsrc="./static/img/like-btn.jpg"alt="image-like">'