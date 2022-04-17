function timeToWalk(countSteps, step, speed) {
    let distance = countSteps * step;
    // 1 km = 1000 m.
    // 1 h = 60 * 60 = 3600 sec.
    let speedInMpS = speed * 1000 / 3600;
    let timeInSec =  distance / speedInMpS;

    let brakes = parseInt(distance / 500);
    timeInSec += brakes * 60;

    let hours = parseInt(timeInSec / 3600).toString().padStart(2, '0');
    let minutes = parseInt((timeInSec % 3600) / 60).toString().padStart(2, '0');;
    let seconds = Math.round(timeInSec % 60).toString().padStart(2, '0');;

   console.log(`${hours}:${minutes}:${seconds}`);

}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5)