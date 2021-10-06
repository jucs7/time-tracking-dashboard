const $dailyStats = document.querySelector('#daily');
const $weeklyStats = document.querySelector('#weekly');
const $monthlyStats = document.querySelector('#monthly');
const $currentWork = document.querySelector('.current-work');
const $prevWork = document.querySelector('.previous-work');
const $currentPlay = document.querySelector('.current-play');
const $prevPlay = document.querySelector('.previous-play');
const $currentStudy = document.querySelector('.current-study');
const $prevStudy = document.querySelector('.previous-study');
const $currentExercise = document.querySelector('.current-exercise');
const $prevExercise = document.querySelector('.previous-exercise');
const $currentSocial = document.querySelector('.current-social');
const $prevSocial = document.querySelector('.previous-social');
const $currentSelfcare = document.querySelector('.current-selfcare');
const $prevSelfcare = document.querySelector('.previous-selfcare');

$dailyStats.addEventListener('click', fetchData);
$weeklyStats.addEventListener('click', fetchData);
$monthlyStats.addEventListener('click', fetchData);

function fetchData(event) {
    fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            let prevPeriod = '';

            if (event.target.id === 'daily') prevPeriod = 'Yesterday';
            else if (event.target.id === 'weekly') prevPeriod = 'Last Week';
            else if (event.target.id === 'monthly') prevPeriod = 'Last Month';

            $currentWork.innerHTML = `${data[0].timeframes[event.target.id].current}hrs`;
            $prevWork.innerHTML = `${prevPeriod} - ${data[0].timeframes[event.target.id].previous}hrs`;

            $currentPlay.innerHTML = `${data[1].timeframes[event.target.id].current}hrs`;
            $prevPlay.innerHTML = `${prevPeriod} - ${data[1].timeframes[event.target.id].previous}hrs`;

            $currentStudy.innerHTML = `${data[2].timeframes[event.target.id].current}hrs`;
            $prevStudy.innerHTML = `${prevPeriod} - ${data[2].timeframes[event.target.id].previous}hrs`;

            $currentExercise.innerHTML = `${data[3].timeframes[event.target.id].current}hrs`;
            $prevExercise.innerHTML = `${prevPeriod} - ${data[3].timeframes[event.target.id].previous}hrs`;

            $currentSocial.innerHTML = `${data[4].timeframes[event.target.id].current}hrs`;
            $prevSocial.innerHTML = `${prevPeriod} - ${data[4].timeframes[event.target.id].previous}hrs`;

            $currentSelfcare.innerHTML = `${data[5].timeframes[event.target.id].current}hrs`;
            $prevSelfcare.innerHTML = `${prevPeriod} - ${data[5].timeframes[event.target.id].previous}hrs`;
        })
        .catch(error => alert(error));
}
