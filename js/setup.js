'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var WIZARDS_NUMBER = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var userDialog = document.querySelector('.setup');
var similarWizard = userDialog.querySelector('.setup-similar');
var similarWizardList = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var setup = document.querySelector('.setup');
var setupWizard = document.querySelector('.setup-wizard');
var setupForm = document.querySelector('.setup-wizard-form');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var inputCoatColor = setupForm.querySelector('input[name="coat-color"]');
var inputEyesColor = setupForm.querySelector('input[name="eyes-color"]');
var inputFireballColor = setupForm.querySelector('input[name="fireball-color"]');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireball = setupForm.querySelector('.setup-fireball-wrap');

function getRandomElement(array) {
  var index = Math.floor(Math.random() * (array.length - 1));
  return array[index];
}

var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var createWizardList = function () {
  var allWizards = [];

  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    var newWizard = {};
    var newWizardName = getRandomElement(WIZARD_NAMES);
    var newWizardSecondName = getRandomElement(WIZARD_SECOND_NAMES);
    var newWizardCoatColor = getRandomElement(WIZARD_COAT_COLORS);
    var newWizardEyesColor = getRandomElement(WIZARD_EYES_COLORS);

    newWizard.name = newWizardName + ' ' + newWizardSecondName;
    newWizard.coatColor = newWizardCoatColor;
    newWizard.eyesColor = newWizardEyesColor;
    allWizards.push(newWizard);
  }

  return allWizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var setWizards = function (allWizards) {
  var wizardFragment = document.createDocumentFragment();

  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    wizardFragment.appendChild(renderWizard(allWizards[i]));
  }

  return wizardFragment;
};

var wizardList = createWizardList();
var wizardElement = setWizards(wizardList);
similarWizardList.appendChild(wizardElement);
similarWizard.classList.remove('hidden');

function changeWizardElementColor(target, inputName, colorVariants) {
  var randomColor = getRandomElement(colorVariants);
  target.style.fill = randomColor;
  inputName.value = randomColor;
}

function changeFireballColor(target, inputName, colorVariants) {
  var randomColor = getRandomElement(colorVariants);
  target.style.background = randomColor;
  inputName.value = randomColor;
}

wizardEyes.addEventListener('click', function () {
  changeWizardElementColor(wizardEyes, inputEyesColor, WIZARD_EYES_COLORS);
});

wizardCoat.addEventListener('click', function () {
  changeWizardElementColor(wizardCoat, inputCoatColor, WIZARD_COAT_COLORS);
});

fireball.addEventListener('click', function () {
  changeFireballColor(fireball, inputFireballColor, FIREBALL_COLORS);
});
