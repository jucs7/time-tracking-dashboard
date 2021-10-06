const $dailyButton = document.querySelector('#daily');
const $weeklyButton = document.querySelector('#weekly');
const $monthlyButton = document.querySelector('#monthly');

const current = [
    '.current-work',
    '.current-play',
    '.current-study',
    '.current-exercise',
    '.current-social',
    '.current-selfcare'
];

const previous = [
    '.previous-work',
    '.previous-play',
    '.previous-study',
    '.previous-exercise',
    '.previous-social',
    '.previous-selfcare'
];

$dailyButton.addEventListener('click', fetchData);
$weeklyButton.addEventListener('click', fetchData);
$monthlyButton.addEventListener('click', fetchData);

function fetchData(event) {
    fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            let prevPeriod = '';

            if (event.target.id === 'daily') prevPeriod = 'Yesterday';
            else if (event.target.id === 'weekly') prevPeriod = 'Last Week';
            else if (event.target.id === 'monthly') prevPeriod = 'Last Month';

            for (let x = 0; x < 6; x++) {
                document.querySelector(current[x])
                    .innerHTML = `${data[x].timeframes[event.target.id].current}hrs`;

                document.querySelector(previous[x])
                    .innerHTML = `${prevPeriod} - ${data[x].timeframes[event.target.id].previous}hrs`;
            }
        })
        .catch(error => alert(error));
}
