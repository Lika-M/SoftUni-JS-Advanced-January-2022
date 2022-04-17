function attachEventsListeners() {

    let ratio = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }
    function convert(value, unit) {
        let convertInDays = value / ratio[unit];
        let obj = {
            days: convertInDays,
            hours: convertInDays * ratio.hours,
            minutes: convertInDays * ratio.minutes,
            seconds: convertInDays * ratio.seconds
        }
        return obj
    }
    let inputDays = document.getElementById('days');
    let inputHourse = document.getElementById('hours');
    let inputMin = document.getElementById('minutes');
    let inputSec = document.getElementById('seconds');

    document.getElementsByTagName('main')[0].addEventListener('click', onConvert);

    function onConvert(e) {
        if (e.target.tagName = 'INPUT' && e.target.type == 'button') {

            let input = e.target.parentElement.children[1];
            let outputValue = convert(Number(input.value), input.id);

            inputDays.value = outputValue.days;
            inputHourse.value = outputValue.hours;
            inputMin.value = outputValue.minutes;
            inputSec.value = outputValue.seconds;
        }
    }

}