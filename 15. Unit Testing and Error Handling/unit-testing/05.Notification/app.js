function notify(message) {
  let div = document.getElementById("notification");
  div.textContent = message;
  div.style.display = 'block';

  let hasListenerAtribute = div.setAttribute('hasListener', 'false');
  if(hasListenerAtribute !== 'true'){
    div. addEventListener('click', hide);
    div.setAttribute('hasListener', 'true')
  }
  
  function hide( ){
    div.style.display = 'none';
  }

}