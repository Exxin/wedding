// Ініціалізація слайдера
$('.slider').each(function() {
  // $this зберігає поточний слайдер
  var $this = $(this);
  // Знаходить контейнер групи слайдів всередині поточного слайдера
  var $group = $this.find('.slide_group');
  // Знаходить всі слайди всередині поточного слайдера
  var $slides = $this.find('.slide');
  // Масив для зберігання кнопок-пуль
  var bulletArray = [];
  // Зберігає індекс поточного слайда
  var currentIndex = 0;
  // Зберігає змінну для таймера
  var timeout;

  // Функція для переміщення до нового слайда
  function move(newIndex) {
    // Позиції для анімації
    var animateLeft, slideLeft;

    // Оновлення таймера для автоматичного перемикання
    advance();

    // Якщо група слайдів анімована або новий індекс дорівнює поточному, вихід з функції
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }

    // Видалення класу 'active' з поточної кулі і додавання до нової
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');

    // Визначення напрямку анімації
    if (newIndex > currentIndex) {
      slideLeft = '100%'; // Слайд з'являється праворуч
      animateLeft = '-100%'; // Група слайдів рухається ліворуч
    } else {
      slideLeft = '-100%'; // Слайд з'являється ліворуч
      animateLeft = '100%'; // Група слайдів рухається праворуч
    }

    // Встановлення позиції для нового слайда і відображення його
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });

    // Анімація групи слайдів
    $group.animate({
      left: animateLeft
    }, function() {
      // Сховати поточний слайд після анімації
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      // Встановити новий слайд в початкову позицію
      $slides.eq(newIndex).css({
        left: 0
      });
      // Відновити початкову позицію для групи слайдів
      $group.css({
        left: 0
      });
      // Оновлення індексу поточного слайда
      currentIndex = newIndex;
    });
  }

  // Функція для автоматичного перемикання слайдів
  function advance() {
    // Очистити попередній таймер
    clearTimeout(timeout);
    // Встановити новий таймер на 10 секунд
    timeout = setTimeout(function() {
      // Якщо поточний слайд не останній, перейти до наступного
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        // Якщо поточний слайд останній, перейти до першого
        move(0);
      }
    }, 10000);
  }

  // Обробник подій для кнопки "вперед"
  $('.next_btn').on('click', function() {
    // Якщо поточний слайд не останній, перейти до наступного
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      // Якщо поточний слайд останній, перейти до першого
      move(0);
    }
  });

  // Обробник подій для кнопки "назад"
  $('.previous_btn').on('click', function() {
    // Якщо поточний слайд не перший, перейти до попереднього
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      // Якщо поточний слайд перший, перейти до останнього
      move($slides.length - 1);
    }
  });

  // Створення кнопок-пуль для кожного слайда
  $.each($slides, function(index) {
    // Створити кнопку-пулю
    var $button = $('<a class="slide_btn">&bull;</a>');

    // Якщо поточна пула відповідає поточному слайду, зробити її активною
    if (index === currentIndex) {
      $button.addClass('active');
    }

    // Додати обробник подій для натискання на пулю
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');

    // Додати пулю до масиву bulletArray
    bulletArray.push($button);
  });

  // Встановлення початкового слайду для коректного відображення
  $slides.eq(currentIndex).css({
    display: 'block',
    left: 0
  });

  // Запустити автоматичне перемикання слайдів
  advance();
});
