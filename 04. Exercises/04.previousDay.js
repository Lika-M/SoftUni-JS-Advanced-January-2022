function previousDay(year, month, day) {

    let date = new Date(year, month - 1, day - 1);
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth() + 1;
    let currentDay = date.getDate();
   
    console.log(`${currentYear}-${currentMonth}-${currentDay}`);

};
// Month in JavaScript is 0-indexed (January is 0, February is 1, etc)
//хвърля грешка, ако използвам month, на двете места - month-1 и month+1;
previousDay(2016, 9, 30);
previousDay(2016, 10, 1);
