var filterform = document.getElementById('question_filter_form');

var language = document.getElementById('language-button');
var literature = document.getElementById('literature-button');

var aqa = document.getElementById('AQA');
var edexcel = document.getElementById('EDEXCEL');
var ocr = document.getElementById('OCR');
var eduqas = document.getElementById('EDUQAS');

var c19 = document.getElementById('nineteen-c');
var c20 = document.getElementById('twenty-c');
var c21 = document.getElementById('twentyone-c');

var fiction = document.getElementById('fiction');
var nonfiction = document.getElementById('non-fiction');

var romeo = document.getElementById('romeo');
var macbeth = document.getElementById('macbeth');
var frankenstein = document.getElementById('frankenstein');

var buttons = document.getElementsByClassName('question-button');

var tagOptions = [language, literature, aqa, edexcel, ocr, eduqas, c19, c20, c21, fiction, nonfiction];

var hideButton = function(buttonList) {
  for(var i=0; i<buttonList.length; i++){
    buttonList[i].classList.add('hidden');
  };
}

var showButton = function(questionObject){
  for (var i=0; i<Object.keys(questionObject).length; i++){
    var key = Object.keys(questionObject)[i];
    document.getElementById('question-button-'+(key)).classList.remove('hidden');
  }
}

// for (var i=0; i<Object.keys(questions).length; i++){
//   var key = Object.keys(questions)[i];
//   document.getElementById('question-button-'+(key)).classList.remove('hidden');
// }

var filter = function() {
  //write event listener on the submit button to re-render the table
  filterform.addEventListener('submit', function(e) {
    e.preventDefault();
    hideButton(buttons);
    var questions = JSON.parse(JSON.stringify(e.target.dataset));
    var chosenOptions = tagOptions.filter(function(option) {
      return option.checked
    }).map(function(option) {
      return option.value
    });

    chosenOptions.forEach(function(option) {
      for (quest in questions) {
        if (questions[quest].indexOf(option) === -1) {
          delete questions[quest];
        }
      }
    });
    showButton(questions);

  });

};
filter();
