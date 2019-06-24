'use strict';

var WIZARDS_NUMBER = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var userDialog = document.querySelector('.setup');
var similarWizard = userDialog.querySelector('.setup-similar');
var similarWizardList = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

function getRandomInteger(array) {
  return Math.floor(Math.random() * (array.length - 1));
}

var createWizardList = function () {
  var allWizards = [];

  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    var newWizard = {};
    var newWizardName = WIZARD_NAMES[getRandomInteger(WIZARD_NAMES)];
    var newWizardSecondName = WIZARD_SECOND_NAMES[getRandomInteger(WIZARD_SECOND_NAMES)];
    var newWizardCoatColor = WIZARD_COAT_COLORS[getRandomInteger(WIZARD_COAT_COLORS)];
    var newWizardEyesColor = WIZARD_EYES_COLOR[getRandomInteger(WIZARD_EYES_COLOR)];

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
userDialog.classList.remove('hidden');
