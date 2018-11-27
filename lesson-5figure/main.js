
area.addEventListener('click', function (e) {
  var target = this;
  var figure = document.createElement('div');
  var radio = document.getElementsByName('figure');

  figure.className = 'figure';
  figure.id = 'figure_id';

  for (var i = 0; i < radio.length; i++) {
    if ((radio[i].value === 'square') && (radio[i].checked)) {
      figure.className = 'square';
    }
  }

  if (e.target.id !== 'figure_id') {
    figure.style.left = e.layerX + 'px';
    figure.style.top = e.layerY + 'px';
    target.appendChild(figure);
  }
})