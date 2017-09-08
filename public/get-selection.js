function showSelection () {
  var selection = JSON.parse (sessionStorage.getItem("selection"));
  var output = document.createElement ('div');
  output.innerHTML = '<h1>You selected: '+selection.selection+'</h1>'+
  '<h2>You\'ve done '+startTimer(true)+' mins this session</h2>';
  document.body.appendChild (output);
}

showSelection();
