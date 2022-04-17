function solve(text, convention) {

  let textElement = document.querySelector('#text').value;
  let conventionElement = document.querySelector('#naming-convention').value;

  let textAsArr = textElement.split(' ').map(x => x.toLowerCase());

  if (conventionElement === 'Camel Case') {
    let temp = [];

    let i = 0;
    for (let word of textAsArr) {
      if (i === 0) {
        temp.push(word)
      } else {
        word = word[0].toUpperCase() + word.slice(1);
        temp.push(word)
      }
      i++;
    } 
    textElement =  temp.slice(0).join('');

  } else if (conventionElement === 'Pascal Case') {
    let temp = [];
    for (let word of textAsArr) {
      word = word[0].toUpperCase() + word.slice(1);
      temp.push(word)
    }
    textElement =  temp.slice(0).join('');

  } else {
    textElement = 'Error!'
  }
  document.getElementById('result').textContent = textElement

}