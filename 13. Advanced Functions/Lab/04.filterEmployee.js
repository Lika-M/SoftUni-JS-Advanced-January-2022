function createFormatter(input, criteria) {

    [key, value] = criteria.split('-');
    let data = JSON.parse(input).filter(passCriteria);

    function passCriteria(person) {
        return (person[key] === value || person[key] && value == 'all');
    }

    let counter = 0;
    for (const person of data) {
        console.log(`${counter}. ${person.first_name} ${person.last_name} - ${person.email}`);
        counter++;
    }
}

    createFormatter(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
        'last_name-Johnson'


    )