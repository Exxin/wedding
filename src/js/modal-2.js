(() => {
  const refsTwo = {
    openModalBtn: document.querySelector('[data-modal-mobile-open]'),
    closeModalBtn: document.querySelector('[data-modal-mobile-close]'),
    modal: document.querySelector('[data-modal-mobile]'),
    menuLinks: document.querySelector('[nav-link-mobile-close]'),
    menuLinksOne: document.querySelector('[nav-link-mobile-close-1]'),
    menuLinksTwo: document.querySelector('[nav-link-mobile-close-2]'),
    menuLinksThree: document.querySelector('[nav-link-mobile-close-3]'),
  };

  refsTwo.openModalBtn.addEventListener('click', toggleModal);
  refsTwo.closeModalBtn.addEventListener('click', toggleModal);
  refsTwo.menuLinks.addEventListener('click', toggleModal);
  refsTwo.menuLinksOne.addEventListener('click', toggleModal);
  refsTwo.menuLinksTwo.addEventListener('click', toggleModal);
  refsTwo.menuLinksThree.addEventListener('click', toggleModal);

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
// ============================================================