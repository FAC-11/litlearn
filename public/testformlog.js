
function outputForm (ev) {
  ev.preventDefault();
  console.log (ev.target.value);
  const finalAnswer = ev.target.value;
  console.log (finalAnswer);
  document.getElementById ('answer').setAttribute ('answer',finalAnswer);
  console.log (document.getElementById ('answer'));
}

console.log ('will log form...');

var buttons=
document.getElementsByClassName ('clickable-option');
console.log (buttons);

document.getElementById ('question-mc').addEventListener  ('submit', outputForm);
