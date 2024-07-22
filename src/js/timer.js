document.addEventListener('DOMContentLoaded', (event) => {
  // Отримуємо елемент з класом timer
  const timerElement = document.querySelector('.timer');

  // Встановлюємо кінцеву дату (21 вересня 2024 року о 12:00:00)
  const targetDate = new Date('September 21, 2024 12:00:00').getTime();

  // Оновлюємо таймер кожну секунду
  const countdown = setInterval(() => {
    // Поточний час
    const now = new Date().getTime();

    // Різниця між поточним часом і кінцевою датою
    const distance = targetDate - now;

    // Обчислюємо дні, години, хвилини і секунди
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Виводимо результат в елемент з класом timer
    timerElement.innerHTML = `${days} днів ${hours} годин ${minutes} хвилин ${seconds} секунд`;

    // Якщо таймер закінчився
    if (distance < 0) {
      clearInterval(countdown);
      timerElement.innerHTML = "Час вийшов";
    }
  }, 1000);
});