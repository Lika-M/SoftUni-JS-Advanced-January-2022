function solution() {
    const inputFields = document.querySelector('div.container section.card input');
    const sections = document.querySelectorAll('div.container section.card ul');  
    const [listSection, sentSection, discardedSection] = Array.from(sections);
    
    const btnAddGift = document.querySelector('div.container section.card button');
    btnAddGift.addEventListener('click', addGift);
    let gifts = [];
    function addGift(){
        if(inputFields.value == ''){
            return;
        } 
        if(listSection.hasChildNodes()){
            Array.from(listSection.children).forEach(ch => ch.remove());
        };
        gifts.push(inputFields.value.trim())
        let sortedGifts = gifts.sort((a, b) => a.localeCompare(b));
    
        for (const item of sortedGifts) {
            let li = document.createElement('li');
            li.textContent = item;
            li.classList.add('gift')
    
            let sendBtn = document.createElement('button');
            sendBtn.textContent = 'Send';
            sendBtn.id = 'sendButton';
            sendBtn.addEventListener('click', send);
    
            let discardBtn = document.createElement('button');
            discardBtn.textContent = 'Discard';
            discardBtn.setAttribute('id', 'discardButton');
            discardBtn.addEventListener('click', discard);
    
            li.appendChild(sendBtn);
            li.appendChild(discardBtn);
            listSection.appendChild(li);
        };
        inputFields.value = '';
    };   
    function send(e){
        let li = document.createElement('li');
        li.textContent = e.target.previousSibling.textContent;
        li.classList.add('gift')
        sentSection.appendChild(li);

        e.target.parentElement.remove();
        gifts = [];
    };
    function discard(e){
        let li = document.createElement('li');
        li.textContent = e.target.previousSibling.previousSibling.textContent;
        li.classList.add('gift')
        discardedSection.appendChild(li);
        
        e.target.parentElement.remove();
        gifts = [];
    };
}