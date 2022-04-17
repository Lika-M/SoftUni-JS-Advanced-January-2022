function solve() {
    const authorInput = document.getElementById('creator');
    const titleInput = document.getElementById('title');
    const categoryInput = document.getElementById('category');
    const contentInput = document.getElementById('content');
    const postSection = document.querySelector('.site-content > main > section');
    const archiveSection = document.querySelector('.archive-section ol');
    const createBtn = document.querySelector('.create').addEventListener('click', onCreate);
  
  
    function onCreate(event) {
       event.preventDefault();
       const article = document.createElement('article');
       const h1TitleTag = creator('h1', {}, titleInput.value);
       const pTag = creator('p', {}, 'Category: ');
       const strCategoryTag = creator('strong', {}, categoryInput.value);
       pTag.appendChild(strCategoryTag);
       const pCreatorTag = creator('p', {}, 'Creator: ');
       const strCreatorTag = creator('strong', {}, authorInput.value);
       pCreatorTag.appendChild(strCreatorTag);
       const contentTag = creator('p', {}, contentInput.value);
       const divBtns = creator('div', { classList: 'buttons' });
       const deleteBtn = creator('button', {}, 'Delete');

       deleteBtn.classList.add('btn');
       deleteBtn.classList.add('delete');
       deleteBtn.addEventListener('click', deleteArt);
       const archiveBtn = creator('button', {}, 'Archive');
       archiveBtn.classList.add('btn');
       archiveBtn.classList.add('archive');
       archiveBtn.addEventListener('click', archiveArt);
       divBtns.appendChild(deleteBtn);
       divBtns.appendChild(archiveBtn);

       article.appendChild(h1TitleTag);
       article.appendChild(pTag);
       article.appendChild(pCreatorTag);
       article.appendChild(contentTag);
       article.appendChild(divBtns);
       postSection.appendChild(article);

       authorInput.value = '';
       titleInput.value = '';
       categoryInput.value = '';
       contentInput.value = '';
    };
  
    function archiveArt(event) {
       const title = event.target.parentElement.parentElement.querySelector('h1');
       const liElement = creator('li', {}, title.textContent);
       archiveSection.appendChild(liElement);
       const olChildren = archiveSection.children;
       Array.from(olChildren).sort((a, b) => a.textContent.localeCompare(b.textContent))
          .forEach(c => archiveSection.appendChild(c));
       event.target.parentElement.parentElement.remove();
    };

    function deleteArt(event) {
      event.target.parentElement.parentElement.remove();
   };
   
  
    function creator(tag, attribute, content) {
       const element = document.createElement(tag);
       for (let prop in attribute) {
          element[prop] = attribute[prop];
       };
       if (content) {
          if (tag === 'input' || tag === 'textarea') {
             element.value = content;
          } else {
             element.textContent = content;
          };
       }
       return element;
    };
 };

