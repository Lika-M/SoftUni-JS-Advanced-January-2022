
function solve() {
  let inputElement = document.getElementById('input');
  let textArr = inputElement.value.split('.').filter(x => x !== '');
  let div = document.getElementById('output');

  while (textArr.length > 0) {
    let text = textArr.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p')
    p.textContent = text;
    div.appendChild(p);
  }
}