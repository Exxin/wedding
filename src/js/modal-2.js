(() => {
  const refsTwo = {
    openModalBtn: document.querySelector('[data-modal-mobile-open]'),
    modal: document.querySelector('[data-modal-mobile]'),
    menuLinks: document.querySelector('[nav-link-mobile-close]'),
    menuLinksOne: document.querySelector('[nav-link-mobile-close-1]'),
    menuLinksTwo: document.querySelector('[nav-link-mobile-close-2]'),
    menuLinksThree: document.querySelector('[nav-link-mobile-close-3]'),
    menuLinksFour: document.querySelector('[nav-link-mobile-close-4]'),

    headerContainer: document.querySelector('.header-container'),
  };

  refsTwo.openModalBtn.addEventListener('click', toggleModal);
  refsTwo.menuLinks.addEventListener('click', toggleModal);
  refsTwo.menuLinksOne.addEventListener('click', toggleModal);
  refsTwo.menuLinksTwo.addEventListener('click', toggleModal);
  refsTwo.menuLinksThree.addEventListener('click', toggleModal);

  function toggleModal() {
    refsTwo.modal.classList.toggle('is-open-mob');
    refsTwo.headerContainer.classList.toggle('blur');
  }
})();
// ============================================================
// ============================================================