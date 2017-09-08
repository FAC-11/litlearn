function storeQuestionSelection(event) {
  event.preventDefault();
  var selection = {selection: event.target.parentElement.selection.value};
  sessionStorage.setItem("selection", JSON.stringify(selection));
  document.body.innerHTML = '<h1>Bwahahaha! '+selection+'</h1>';
  window.location = './mcintro.html';
}

stopTimer();
var submit = document.getElementById ('store-selection');
submit.addEventListener ('click',storeQuestionSelection)
