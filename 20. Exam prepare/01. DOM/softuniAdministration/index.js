function solve() {
//     this task is not finished!
    let lectureNameEl = document.querySelector('input[name="lecture-name"]');
    let lectureDataEl = document.querySelector('input[type=datetime-local]');
    let lectureModuleEl = document.querySelector('select[name="lecture-module"]');
    let trainingSectionField = document.querySelector('main.container div.modules');
    let addBtn = document.querySelector('.admin-view .action button');
    addBtn.addEventListener('click', onClick);

    function onClick(e) {
        e.preventDefault();

        if (!lectureNameEl.value ||
            !lectureDataEl.value ||
            lectureModuleEl.value == 'Select module') {
            return;
        }

        function formatDate(data) {
            let [day, time] = data.split('T');
            day = day.split('-').join('/');
            return `${day} - ${time}`;
        }
        // function sortDate(str) {

        //     let [,date, time] = str.split(' - ');
        //     Let [year, month, day] = date.split('/');
        //     let [hours, min] = time.split('.');
        // }

        let newDiv = document.createElement('div');
        newDiv.classList.add('module');
        let h3 = document.createElement('h3');
        let h3Text = (`${lectureModuleEl.value}-module`).toUpperCase();
        h3.textContent = h3Text;
        let currentH3 = document.querySelector('main.container div.module h3');

        if (currentH3 == null || currentH3.textContent !== h3Text) {
            newDiv.appendChild(h3);
        }

        let ul = document.createElement('ul');
        newDiv.appendChild(ul);
        let li = document.createElement('li');
        li.classList.add('flex');
        ul.appendChild(li);

        let lectures = [];
        let h4TextContent = `${lectureNameEl.value} - ${formatDate(lectureDataEl.value)}`;

        lectures.push(h4TextContent)
        let sorted = lectures//.sort((a, b) => {
        //     let aDate = a.split(' - ')[1];
        //     let bDate = b.split(' - ')[1];
        //     console.log(aDate = a.split(' - ')[1]);
        //     return aDate.localeCompare(bDate)
        // });

        for (const lecture of sorted) {
            let h4 = document.createElement('h4');
            let btn = document.createElement('btn');

            h4.textContent = lecture;
            btn.classList.add('red');
            btn.textContent = 'Del';

            li.appendChild(h4);
            li.appendChild(btn);

            btn.addEventListener('click', onDelete); function onDelete(e) {
                e.target.parentElement.remove();
                if (document.querySelector('main.container div.module h4') == null) {
                    document.querySelector('main.container div.module h3').remove()
                }

            }
        }

        trainingSectionField.appendChild(newDiv);


    }
};