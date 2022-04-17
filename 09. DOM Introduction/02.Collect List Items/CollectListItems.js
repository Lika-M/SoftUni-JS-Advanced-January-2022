function extractText() {
    let elements = document.querySelectorAll("#items li");
    let result = [];

    for (const li of elements) {
        result. push(li.textContent);
    }
   document.getElementById("result").textContent =  result.join('\n');
  
}