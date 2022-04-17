function extract(content) {
    let text = document.querySelector("#content").textContent;
    let pattern = /\((?<town>[^)]+)\)/g;
    let result = [];

    let matched = pattern.exec(text);
    while (matched) {
        let word = matched.groups.town;
        result.push(word);
        matched = pattern.exec(text);
    }
     document.querySelector("#content").textContent = result.join('; '); //???it doesn't work?????
    //return result.join('; ');
}

/*
 Ричард МакКлинток, професор по латински в колежа Хампдън-Сидни във Вирджиния, 
 потърси една от по-неизвестните латински думи, consectetur, 
 от пасаж от Lorem Ipsum и преглеждайки цитатите на думата в класическата литература, 
 открива несъмнения източник. Lorem Ipsum идва от раздели 1.10.32 и 1.10.33 на 
 „de Finibus Bonorum et Malorum“ (Крайностите на доброто и злото) от Цицерон, 
 написана през 45 г. пр.н.е. Тази книга е трактат по теорията на етиката, много популярен 
 през Ренесанса. Първият ред на Lorem Ipsum, "Lorem ipsum dolor sit amet..", идва от ред 
 в раздел 1.10.32.
*/
// function extract(elementId) {
//     let para = document.getElementById(elementId).textContent;
//     let pattern = /\(([^)]+)\)/g;
//     let result = [];
  
//     let match = pattern.exec(para);
//     while(match) {
//       result.push(match[1]);
//       match = pattern.exec(para);
//     }
  
//     return result.join('; ');
  