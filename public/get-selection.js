function showSelection () {
  var selection = JSON.parse (sessionStorage.getItem("selection"));
  document.body.innerHTML = '<h1>Bwahahaha! '+selection.selection+'</h1>';
}

showSelection();
