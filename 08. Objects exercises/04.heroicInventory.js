function heroicInventory(array) {

    let result = [];
    for (const line of array) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items ? items.split(', '): [];
        result.push({name, level, items});
    }
    console.log(JSON.stringify(result));

}

// [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},
// {"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},
// {"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)