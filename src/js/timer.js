// document.addEventListener('DOMContentLoaded', (event) => {
//   const daysElement = document.getElementById('days');
//   const hoursElement = document.getElementById('hours');
//   const minutesElement = document.getElementById('minutes');
//   const secondsElement = document.getElementById('seconds');

//   const daysLabel = document.getElementById('days-label');
//   const hoursLabel = document.getElementById('hours-label');
//   const minutesLabel = document.getElementById('minutes-label');
//   const secondsLabel = document.getElementById('seconds-label');

//   const targetDate = new Date('September 21, 2024 12:00:00').getTime();

//   const formatNumber = (num) => num.toString().padStart(2, '0');
//   // Відмінювання чисел
//   const getDayLabel = (count) => {
//     if (count === 1) return 'День';
//     if (count >= 2 && count <= 4) return 'Дні';
//     return 'Днів';
//   };

//   const getHourLabel = (count) => {
//     if (count === 1) return 'Година';
//     if (count >= 2 && count <= 4) return 'Години';
//     return 'Годин';
//   };

//   const getMinuteLabel = (count) => {
//     if (count === 1) return 'Хвилина';
//     if (count >= 2 && count <= 4) return 'Хвилини';
//     return 'Хвилин';
//   };

//   const getSecondLabel = (count) => {
//     if (count === 1) return 'Секунда';
//     if (count >= 2 && count <= 4) return 'Секунди';
//     return 'Секунд';
//   };

//   const countdown = setInterval(() => {
//     const now = new Date().getTime();
//     const distance = targetDate - now;

//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     daysElement.textContent = formatNumber(days);
//     hoursElement.textContent = formatNumber(hours);
//     minutesElement.textContent = formatNumber(minutes);
//     secondsElement.textContent = formatNumber(seconds);

//     daysLabel.textContent = getDayLabel(days);
//     hoursLabel.textContent = getHourLabel(hours);
//     minutesLabel.textContent = getMinuteLabel(minutes);
//     secondsLabel.textContent = getSecondLabel(seconds);

//     if (distance < 0) {
//       clearInterval(countdown);
//       daysElement.textContent = '00';
//       hoursElement.textContent = '00';
//       minutesElement.textContent = '00';
//       secondsElement.textContent = '00';
//       daysLabel.textContent = 'Дні';
//       hoursLabel.textContent = 'Години';
//       minutesLabel.textContent = 'Хвилини';
//       secondsLabel.textContent = 'Секунди';
//     }
//   }, 1000);
// });


document.addEventListener('DOMContentLoaded', (event) => {
  const yearsElement = document.getElementById('years');
  const monthsElement = document.getElementById('months');
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  const yearsLabel = document.getElementById('years-label');
  const monthsLabel = document.getElementById('months-label');
  const daysLabel = document.getElementById('days-label');
  const hoursLabel = document.getElementById('hours-label');
  const minutesLabel = document.getElementById('minutes-label');
  const secondsLabel = document.getElementById('seconds-label');

  const targetDate = new Date('September 21, 2024 12:00:00');

  const formatNumber = (num) => num.toString().padStart(2, '0');

  // Відмінювання чисел
  const getYearLabel = (count) => (count === 1 ? 'Рік' : count >= 2 && count <= 4 ? 'Роки' : 'Років');
  const getMonthLabel = (count) => (count === 1 ? 'Місяць' : count >= 2 && count <= 4 ? 'Місяці' : 'Місяців');
  const getDayLabel = (count) => (count === 1 ? 'День' : count >= 2 && count <= 4 ? 'Дні' : 'Днів');
  const getHourLabel = (count) => (count === 1 ? 'Година' : count >= 2 && count <= 4 ? 'Години' : 'Годин');
  const getMinuteLabel = (count) => (count === 1 ? 'Хвилина' : count >= 2 && count <= 4 ? 'Хвилини' : 'Хвилин');
  const getSecondLabel = (count) => (count === 1 ? 'Секунда' : count >= 2 && count <= 4 ? 'Секунди' : 'Секунд');

  const elapsedTime = setInterval(() => {
    const now = new Date();
    let years = now.getFullYear() - targetDate.getFullYear();
    let months = now.getMonth() - targetDate.getMonth();
    let days = now.getDate() - targetDate.getDate();
    let hours = now.getHours() - targetDate.getHours();
    let minutes = now.getMinutes() - targetDate.getMinutes();
    let seconds = now.getSeconds() - targetDate.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }

    if (minutes < 0) {
      minutes += 60;
      hours--;
    }

    if (hours < 0) {
      hours += 24;
      days--;
    }

    if (days < 0) {
      const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += previousMonth;
      months--;
    }

    if (months < 0) {
      months += 12;
      years--;
    }

    // Оновлення значень
    yearsElement.textContent = formatNumber(years);
    monthsElement.textContent = formatNumber(months);
    daysElement.textContent = formatNumber(days);
    hoursElement.textContent = formatNumber(hours);
    minutesElement.textContent = formatNumber(minutes);
    secondsElement.textContent = formatNumber(seconds);

    // Оновлення підписів
    yearsLabel.textContent = getYearLabel(years);
    monthsLabel.textContent = getMonthLabel(months);
    daysLabel.textContent = getDayLabel(days);
    hoursLabel.textContent = getHourLabel(hours);
    minutesLabel.textContent = getMinuteLabel(minutes);
    secondsLabel.textContent = getSecondLabel(seconds);
  }, 1000);
});

