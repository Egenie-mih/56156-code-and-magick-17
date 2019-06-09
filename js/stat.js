'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_SIZE = 16;
var FONT_GAP = 5;
var TEXT_GAP_X = 20;
var TEXT_GAP_Y = 30;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var COLUMN_GAP = 50;
var CLOUD_COLOR = '#ffffff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

function getRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxElement(times);

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.font = FONT_SIZE + 'px' + 'PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_GAP_X, CLOUD_Y + TEXT_GAP_Y);
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_GAP_X, CLOUD_Y + TEXT_GAP_Y + FONT_GAP + FONT_SIZE);

  for (var i = 0; i < names.length; i++) {
    var time = Math.round(times[i]);
    var barSaturation = getRandomNumber(0, 100);
    var barColor = 'hsl(240, ' + barSaturation + '%, 50%)';

    if (names[i] === 'Вы') {
      barColor = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], CLOUD_X + COLUMN_GAP + (BAR_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT - GAP);
    ctx.fillStyle = barColor;
    ctx.fillRect(CLOUD_X + COLUMN_GAP + (BAR_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT - GAP - FONT_SIZE - (BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i] / maxTime));
    ctx.fillStyle = '#000000';
    ctx.fillText(time, CLOUD_X + COLUMN_GAP + (BAR_WIDTH + COLUMN_GAP) * i, CLOUD_HEIGHT - GAP - FONT_SIZE - FONT_GAP - (BAR_HEIGHT * times[i] / maxTime));
  }
};
