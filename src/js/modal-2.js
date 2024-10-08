(() => {
  const refsTwo = {
    openModalBtn: document.querySelector('[data-modal-mobile-open]'),
    closeModalBtn: document.querySelector('[data-modal-mobile-close]'),
    modal: document.querySelector('[data-modal-mobile]'),
    menuLinks: document.querySelector('[nav-link-mobile-close]'),
    menuLinksOne: document.querySelector('[nav-link-mobile-close-1]'),
    menuLinksTwo: document.querySelector('[nav-link-mobile-close-2]'),
    menuLinksThree: document.querySelector('[nav-link-mobile-close-3]'),
    menuLinksFour: document.querySelector('[nav-link-mobile-close-4]'),
  };

  refsTwo.openModalBtn.addEventListener('click', toggleModal);
  refsTwo.closeModalBtn.addEventListener('click', toggleModal);
  refsTwo.menuLinks.addEventListener('click', toggleModal);
  refsTwo.menuLinksOne.addEventListener('click', toggleModal);
  refsTwo.menuLinksTwo.addEventListener('click', toggleModal);
  refsTwo.menuLinksThree.addEventListener('click', toggleModal);
  refsTwo.menuLinksFour.addEventListener('click', toggleModal);

  function toggleModal() {
    refsTwo.modal.classList.toggle('is-open-mob');
  }
})();

const test = document.querySelector(".mob-menu-item");

// ============================================================
// ============================================================