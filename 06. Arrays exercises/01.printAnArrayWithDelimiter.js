function printAnArrayWithDelimiter(array, str) {
   
    console.log(array.join(str));
}

printAnArrayWithDelimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
)
printAnArrayWithDelimiter(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
)