function solve() {

   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      const inputElement = document.querySelector('#searchField');
      const text = inputElement.value;
      const rowsElements = Array.from(document.querySelectorAll('tbody tr'));

      console.log((inputElement.value));
      inputElement.value = '';
      for (const row of rowsElements) {
         row.classList.remove('select');

         if (row.textContent.includes(text)) {
            row.classList.add('select');
         }
      }
   }

   let input = document.querySelector('#searchField');
   let attributes = input.attributes;
   console.log(attributes);
}