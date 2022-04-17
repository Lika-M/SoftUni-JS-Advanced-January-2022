window.addEventListener('load', solution);
function solution() {
  let submitBtn = document.getElementById('submitBTN');
  let editBtn = document.getElementById('editBTN');
  let continueBtn = document.getElementById('continueBTN');
  let infoPreviewElement = document.getElementById('infoPreview');
  let divBlock = document.getElementById('block');

  let inputFields = Array.from(document.querySelectorAll('#form input'));
  let lableElement = Array.from(document.querySelectorAll('#form label'));
  inputFields.pop();

  submitBtn.addEventListener('click', load);
  editBtn.addEventListener('click', edit);
  continueBtn.addEventListener('click', finish);

  function load() {
    if (!inputFields[0].value || !inputFields[1].value) {
      return;
    }
    console.log(inputFields);
    for (let i = 0; i < inputFields.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${lableElement[i].textContent} ${inputFields[i].value}`;
      infoPreviewElement.appendChild(li);
      inputFields[i].value = '';
    }
    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;
  };
  function edit(e) {
    let previewElements = e.target.parentElement.parentElement.querySelectorAll('li');
    
    for (let i = 0; i < inputFields.length; i++) {
      let text = previewElements[i].textContent.split(': ')[1]
      inputFields[i].value = text;
      previewElements[i].remove();
    };
    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;
  };
  function finish() {
    divBlock.innerHTML = ''
    let finalText = document.createElement('h3');
    finalText.textContent = 'Thank you for your reservation!'
    divBlock.appendChild(finalText)
  };
}