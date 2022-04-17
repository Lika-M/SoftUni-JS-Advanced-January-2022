function roadRadar(speed, area) {
    // •	On the motorway the limit is 130 km/h
    // •	On the interstate the limit is 90 km/h
    // •	In the city the limit is 50 km/h 
    // •	Within a residential - 20 km/h
    let limit = 0;
    let status = '';
    switch (area) {
        case 'motorway': limit = 130; break;
        case 'interstate': limit = 90; break;
        case 'city': limit = 50; break;
        case 'residential': limit = 20; break;
    };
    let difference = speed - limit;

    if (difference > 0 && difference <= 20) {
        status = 'speeding';
    } else if (difference >20 && difference <= 40) {
        status = 'excessive speeding'
    } else if (difference > 40){
        status = 'reckless driving'
    };
    if(speed <= limit){
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}
roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')