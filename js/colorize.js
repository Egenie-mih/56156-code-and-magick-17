'use strict';

(function () {
  var setupWizard = document.querySelector('.setup-wizard');
  var setupForm = document.querySelector('.setup-wizard-form');
  var inputCoatColor = setupForm.querySelector('input[name="coat-color"]');
  var inputEyesColor = setupForm.querySelector('input[name="eyes-color"]');
  var inputFireballColor = setupForm.querySelector('input[name="fireball-color"]');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var fireball = setupForm.querySelector('.setup-fireball-wrap');

  function changeWizardElementColor(target, inputName, colorVariants) {
    var randomColor = window.getRandomElement(colorVariants);
    target.style.fill = randomColor;
    inputName.value = randomColor;
  }

  function changeFireballColor(target, inputName, colorVariants) {
    var randomColor = window.getRandomElement(colorVariants);
    target.style.background = randomColor;
    inputName.value = randomColor;
  }

  wizardEyes.addEventListener('click', function () {
    changeWizardElementColor(wizardEyes, inputEyesColor, window.WIZARD_EYES_COLORS);
  });

  wizardCoat.addEventListener('click', function () {
    changeWizardElementColor(wizardCoat, inputCoatColor, window.WIZARD_COAT_COLORS);
  });

  fireball.addEventListener('click', function () {
    changeFireballColor(fireball, inputFireballColor, window.FIREBALL_COLORS);
  });
})();
