// MOBILE CARDS : Change layout on tap/click
let cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', function() {
    this.classList.toggle('card-active');
    
    let city = this.querySelector('.card__city');
    if (city) city.classList.toggle('card-active__city');

    let id = this.querySelector('.card__id');
    if (id) id.classList.toggle('card-active__id');

    let idNames = this.querySelectorAll('.card__id-names');
    if (idNames) {
      idNames.forEach((element) => {
        element.classList.toggle('card-active__id-names');
      });
    }

    let thumbnail = this.querySelector('.card__thumbnail');
    if (thumbnail) thumbnail.classList.toggle('card-active__thumbnail');

    let offline = this.querySelector('.card__offline');
    if (offline) offline.classList.toggle('card-active__offline');

    let offlineTitle = this.querySelector('.card__offline-title');
    if (offlineTitle) offlineTitle.classList.toggle('card-active__offline-title');

    let offlineText = this.querySelector('.card__offline-text');
    if (offlineText) offlineText.classList.toggle('card-active__offline-text');

    let info = this.querySelector('.card__info');
    if (info) info.classList.toggle('card-active__info');

    let infoTime = this.querySelector('.card__info-time');
    if (infoTime) infoTime.classList.toggle('card-active__info-time');

    let infoCTA = this.querySelector('.card__info-cta');
    if (infoCTA) infoCTA.classList.toggle('card-active__info-cta');
  });
});

// FORM :cache le *required au focus et le réaffiche quand on sort du champs
const inputFields = document.querySelectorAll('.contact__form input, .contact__form textarea');
const requiredText = document.querySelectorAll('.required');

inputFields.forEach(inputField => {
  inputField.addEventListener('focus', function() {
    const relatedRequiredText = this.parentElement.querySelector('.required');
    relatedRequiredText.style.display = 'none';
  });

  inputField.addEventListener('blur', function() {
    const relatedRequiredText = this.parentElement.querySelector('.required');
    if (this.value === '') {
      relatedRequiredText.style.display = 'inline-block';
    }
  });
});
