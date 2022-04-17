/// 100 /100

function solve() {
   let creatorEl = document.querySelector('#creator');
   let titleEl = document.querySelector('#title');
   let categoryEl = document.querySelector('#category');
   let contentEl = document.querySelector('#content');
   let btnCreateEl = document.querySelector('.create');
   let archiveSection = document.querySelector('.archive-section ol');
   let postSection = document.querySelector(".site-content>main>section");
   btnCreateEl.addEventListener('click', add);

   function add(e) {
      e.preventDefault();

      let info = {
         autor: creatorEl.value.trim(),
         title: titleEl.value.trim(),
         category: categoryEl.value.trim(),
         content: contentEl.value.trim(),
      };

      let article = document.createElement('article');

      let h1 = document.createElement('h1');
      h1.textContent = info.title;

      let pCategory = document.createElement('p')
      pCategory.innerHTML = `Category: <strong>${info.category}</strong>`;

      let pCreator = document.createElement('p');
      pCreator.innerHTML = `Creator: <strong>${info.autor}</strong>`;

      let pContent = document.createElement('p');
      pContent.innerHTML = info.content;


      let btnDelete = document.createElement('button');
      btnDelete.textContent = 'Delete';
      btnDelete.classList.add('btn');
      btnDelete.classList.add('delete');
      btnDelete.addEventListener('click', removeHistory);

      let btnArchive = document.createElement('button');
      btnArchive.textContent = 'Archive';
      btnArchive.classList.add('btn');
      btnArchive.classList.add('archive');
      btnArchive.addEventListener('click', archive.bind(null, info.title));

      let div = document.createElement('div');
      div.classList.add('buttons')
      div.appendChild(btnDelete);
      div.appendChild(btnArchive);

      article.appendChild(h1);
      article.appendChild(pCategory);
      article.appendChild(pCreator);
      article.appendChild(pContent);
      article.appendChild(div);
      postSection.appendChild(article);

      creatorEl.value = '';
      titleEl.value = '';
      categoryEl.value = '';
      contentEl.value = '';
   }
   function removeHistory(e) {
      e.target.parentElement.parentElement.remove();
   }

   let list = new Set;

   function archive(title, e) {
      list.add(title);
      
      Array.from(archiveSection.querySelectorAll('li')).forEach(x => x.remove());
      Array.from(list).sort((a, b) => a.localeCompare(b))
      .map(x => {
         let li = document.createElement('li');
         li.textContent = x;
         archiveSection.appendChild(li);
      });
      e.target.parentElement.parentElement.remove();
   }
}

