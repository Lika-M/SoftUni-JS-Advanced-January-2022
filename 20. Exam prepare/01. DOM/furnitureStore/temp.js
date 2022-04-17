result();

const createFurniture = {
      model: ()=>document.getElementById("model"),
      year: ()=>document.getElementById("year"),
      description: ()=>document.getElementById("description"),
      price: ()=>document.getElementById("price"),
      addBtn: ()=>document.getElementById("add"),
}

createFurniture.model().value = 'Chair';
createFurniture.year().value = '2016';
createFurniture.description().value = 'Comfortable for you and your pet!';
createFurniture.price().value = '48';

createFurniture.addBtn().click();

let addSection = document.querySelector(".info");