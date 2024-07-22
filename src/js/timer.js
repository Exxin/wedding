// document.addEventListener('DOMContentLoaded', (event) => {
//   // Отримуємо елемент з класом timer
//   const timerElement = document.querySelector('.timer');

//   // Встановлюємо кінцеву дату (21 вересня 2024 року о 12:00:00)
//   const targetDate = new Date('September 21, 2024 12:00:00').getTime();

//   // Оновлюємо таймер кожну секунду
//   const countdown = setInterval(() => {
//     // Поточний час
//     const now = new Date().getTime();

//     // Різниця між поточним часом і кінцевою датою
//     const distance = targetDate - now;

//     // Обчислюємо дні, години, хвилини і секунди
//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Виводимо результат в елемент з класом timer
//     timerElement.innerHTML = `${days} днів ${hours}:${minutes}:${seconds}`;

//     // Якщо таймер закінчився
//     if (distance < 0) {
//       clearInterval(countdown);
//       timerElement.innerHTML = "Час вийшов";
//     }
//   }, 1000);
// });

document.addEventListener('DOMContentLoaded', (event) => {
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  const daysLabel = document.getElementById('days-label');
  const hoursLabel = document.getElementById('hours-label');
  const minutesLabel = document.getElementById('minutes-label');
  const secondsLabel = document.getElementById('seconds-label');

  const targetDate = new Date('September 21, 2024 12:00:00').getTime();

  // Відмінювання чисел
  const getDayLabel = (count) => {
    if (count === 1) return 'День';
    if (count >= 2 && count <= 4) return 'Дні';
    return 'Днів';
  };

  const getHourLabel = (count) => {
    if (count === 1) return 'Година';
    if (count >= 2 && count <= 4) return 'Години';
    return 'Годин';
  };

  const getMinuteLabel = (count) => {
    if (count === 1) return 'Хвилина';
    if (count >= 2 && count <= 4) return 'Хвилини';
    return 'Хвилин';
  };

  const getSecondLabel = (count) => {
    if (count === 1) return 'Секунда';
    if (count >= 2 && count <= 4) return 'Секунди';
    return 'Секунд';
  };

  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

    daysLabel.textContent = getDayLabel(days);
    hoursLabel.textContent = getHourLabel(hours);
    minutesLabel.textContent = getMinuteLabel(minutes);
    secondsLabel.textContent = getSecondLabel(seconds);

    if (distance < 0) {
      clearInterval(countdown);
      daysElement.textContent = '0';
      hoursElement.textContent = '0';
      minutesElement.textContent = '0';
      secondsElement.textContent = '0';
      daysLabel.textContent = 'Дні';
      hoursLabel.textContent = 'Години';
      minutesLabel.textContent = 'Хвилини';
      secondsLabel.textContent = 'Секунди';
    }
  }, 1000);
});