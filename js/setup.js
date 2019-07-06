'use strict';

(function () {
  var WIZARDS_NUMBER = 4;

  var userDialog = document.querySelector('.setup');
  var similarWizard = userDialog.querySelector('.setup-similar');
  var similarWizardList = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var createWizardList = function () {
    var allWizards = [];

    for (var i = 0; i < WIZARDS_NUMBER; i++) {
      var newWizard = {};
      var newWizardName = window.getRandomElement(window.WIZARD_NAMES);
      var newWizardSecondName = window.getRandomElement(window.WIZARD_SECOND_NAMES);
      var newWizardCoatColor = window.getRandomElement(window.WIZARD_COAT_COLORS);
      var newWizardEyesColor = window.getRandomElement(window.WIZARD_EYES_COLORS);

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
})();
