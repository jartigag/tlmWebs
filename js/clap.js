var clap = document.getElementsByClassName('clap');
var clapCount = document.getElementsByClassName('clap--count');
var numberOfClaps = [];
for (var i = 0; i < clap.length; i++) numberOfClaps[i] = 0;

for (var i = 0; i < clap.length; i++) {
  clap[i].addEventListener('click', function () {
    updateNumberOfClaps();
  });
}

function updateNumberOfClaps() {
  for (var i = 0; i < clap.length; i++) {
    numberOfClaps[i] < 50 ? numberOfClaps[i]++ : null;
    clapCount[i].innerHTML = "+" + numberOfClaps[i];
  }
}
