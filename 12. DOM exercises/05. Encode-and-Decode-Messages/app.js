function encodeAndDecodeMessages() {
    let [input, output] = Array.from(document.getElementsByTagName('textarea'));
    let [inputBtn, outputBtn] = Array.from(document.getElementsByTagName('button'));
    inputBtn.addEventListener('click', encode);
    outputBtn.addEventListener('click', decode);

    function encode(ev) {
        let outputText = ''
        for (const char of input.value) {
            outputText += String.fromCharCode(char.charCodeAt() + 1);
        }
        output.value = outputText;
        input.value = '';
        
    }
    function decode(ev){
        let outputText = ''
        for (const char of output.value) {
            outputText += String.fromCharCode(char.charCodeAt() - 1);
        }
        output.value = outputText;
    }

}