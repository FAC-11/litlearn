function remember (ev) {
  // ev.preventDefault();       //for testing
  console.log (ev.target.value);
  const finalAnswer = ev.target.value;
  if (finalAnswer) {
    document.getElementById ('answer').setAttribute ('answer',finalAnswer);
    sessionStorage.setItem ('answer',finalAnswer);
  }
  else
    console.log ('Could not get answer from event.target:',ev.target);
}

console.log ('remember.js ran :)');

document.getElementById ('question-mc').addEventListener  ('submit', remember);
