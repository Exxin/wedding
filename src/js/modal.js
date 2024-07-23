(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();
(() => {
  const refsTwo = {
    openModalBtn: document.querySelector('[data-modal-mobile-open]'),
    closeModalBtn: document.querySelector('[data-modal-mobile-close]'),
    modal: document.querySelector('[data-modal-mobile]'),
  };

  refsTwo.openModalBtn.addEventListener('click', toggleModal);
  refsTwo.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refsTwo.modal.classList.toggle('is-open-mob');
  }
})();

const test = document.querySelector(".mob-menu-item");

test.classList.toggle("is-active");
console.log(test.classList);

// const link = document.querySelector(".link");
// console.log(link.classList);

const hasActiveClass = test.classList.contains("is-active");
console.log(`hasActiveClass - ${hasActiveClass}`);

test.classList.add("special");
console.log(test.classList);

test.classList.remove("is-active");
console.log(test.classList);

test.classList.replace("special", "regular");
console.log(test.classList);

// ============================================================
// Change settings for style elements
const txt = document.querySelector(".entry-title");
txt.textContent = 'Hell o f MotherFuker'
// entry-title

txt.style.color = "#434455";

// ============================================================