///    it works ->          FIRST:
// function create(words) {
//    let content = document.getElementById('content');
//    content.addEventListener('click', display) // delegation!

//    for (const word of words) {

//       let div = document.createElement('div');
//       let p = document.createElement('p');
//       div.appendChild(p);
//       p.textContent = word;
//       p.style.display = 'none'
//       content.appendChild(div);
//    }

//    function display(e) {
//       if(e.target.tagName == 'DIV' && e.target != content) //!!! ако кликнем върху друг елемент
//       e.target.firstChild.style.display = '';
//    }

// }

///        SECOND:
function create(words) {
   let content = document.getElementById('content');
   
   for (const word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none'
      div.appendChild(p);
      // div.addEventListener('click', display.bind(null, p)); 
      //OR => .bind(p) take <p> as an object
      div.addEventListener('click', display.bind(p)); 

      content.appendChild(div);
   }

   function display(p) { 
      // p.style.display = ''; 
      // OR => using this, --> object <p>
       this.style.display = '';
   }

}
