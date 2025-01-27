(() => {
  const refsTwo = {
    openModalBtn: document.querySelector('[data-modal-mobile-open]'),
    modal: document.querySelector('[data-modal-mobile]'),
    menuLinks: document.querySelector('[nav-link-mobile-close]'),
    menuLinksOne: document.querySelector('[nav-link-mobile-close-1]'),
    menuLinksTwo: document.querySelector('[nav-link-mobile-close-2]'),
    menuLinksThree: document.querySelector('[nav-link-mobile-close-3]'),
    menuLinksFour: document.querySelector('[nav-link-mobile-close-4]'),

    menuBtn: document.querySelector('.menu-btn'),

    headerContainer: document.querySelector('[blur-close]'),
  };

  refsTwo.openModalBtn.addEventListener('click', toggleModal);
  refsTwo.menuLinks.addEventListener('click', toggleModal);
  refsTwo.menuLinksOne.addEventListener('click', toggleModal);
  refsTwo.menuLinksTwo.addEventListener('click', toggleModal);
  refsTwo.menuLinksThree.addEventListener('click', toggleModal);

  function toggleModal() {
    refsTwo.modal.classList.toggle('is-open-mob');

    refsTwo.menuBtn.classList.toggle('active');

    refsTwo.headerContainer.classList.toggle('blur');
  }
})();
// ============================================================