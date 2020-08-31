// Карта Яндекс

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [59.938845, 30.322972],
    zoom: 14
  }, {
      searchControlProvider: 'yandex#search'
  }),
  myPlacemark = new ymaps.Placemark([59.938845, 30.322972], {
      hintContent: ''
  }, {
    iconLayout: 'default#image',
    iconImageHref: './img/map-pin.png',
    iconImageSize: [60, 52],
    iconImageOffset: [-30, -42]
  });

  if (document.documentElement.clientWidth > 767) {
    myPlacemark.options.set('iconImageSize', [124, 106]);
    myPlacemark.options.set('iconImageOffset', [-62, -56]);
    myMap.setZoom(15);
  }

  if (document.documentElement.clientWidth > 1439) {
    myMap.setCenter([59.938943, 30.318112]);
    myPlacemark.options.set('iconImageOffset', [-50, -76]);
    myMap.setZoom(16);
  }

  myMap.geoObjects
    .add(myPlacemark);
});

// Мобильное меню

var mainMenu = document.querySelector('.main-menu');
var toggleBtn = document.querySelector('.main-header__menu-toggle');

mainMenu.classList.remove('main-menu--opened');
toggleBtn.classList.remove('main-header__menu-toggle--opened');
toggleBtn.classList.add('main-header__menu-toggle--closed');

toggleBtn.addEventListener('click', function(evt) {
  if (mainMenu.classList.contains('main-menu--opened')) {
    mainMenu.classList.remove('main-menu--opened');
    toggleBtn.classList.remove('main-header__menu-toggle--opened');
    toggleBtn.classList.add('main-header__menu-toggle--closed');
  } else {
    mainMenu.classList.add('main-menu--opened');
    toggleBtn.classList.add('main-header__menu-toggle--opened');
    toggleBtn.classList.remove('main-header__menu-toggle--closed');
  }
});
