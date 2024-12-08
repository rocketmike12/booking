const calendar = document.querySelector('.calendar');
const booked = document.querySelector('.booked');

let days = [];
for(let i = 0; i <= 30; i++) {
    days.push(true);
}

const renderDays = function () {
    calendar.innerHTML = '';
    for (let i = 0; i <= 30; i++) {
        let day = document.createElement('button');
        day.classList.add('day');
        if (!days[i]) {
            day.classList.add('taken');
            day.disabled = true;
        }
        day.id = i;
        day.textContent = i + 1;
        calendar.appendChild(day);
    }
}

calendar.addEventListener('click', (event) => {
    days[event.target.id] = false;
    let book = document.createElement('p');
    book.textContent = `${Number(event.target.id) + 1}.12.2024 09:00`;
    booked.appendChild(book);
    renderDays();
})

renderDays();
