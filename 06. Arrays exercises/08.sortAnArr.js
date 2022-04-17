function sortAnArrayBy2Criteria(array){
    
let sortedArr = array.sort((a, b) => a.length - b.length || a.localeCompare(b));
console.log(sortedArr.join('\n'));
}

sortAnArrayBy2Criteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);
sortAnArrayBy2Criteria(['test', 
'Deny', 
'omen', 
'Default']
)