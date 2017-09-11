///front end - called as <script src=...>

function getState () {
  console.log (document.keys.length);
  const retrieved = {};
    questionObjectString : window.sessionStorage.getItem ('question-data',questionObjectString),
    answerObjectString : window.sessionStorage.getItem ('answers',answerObjectString),
    oneTaskTimer : window.sessionStorage.getItem ('oneTaskTimer',oneTaskTimer),
    totalTimer : window.sessionStorage.getItem ('totalTimer',totalTimer)
  };
  return ('<h1>'+JSON.stringify(retrieved)+'<h1>');
}

function loadDataToElements (toLoad) {
  const elements={};
  ['question-data',
    'answers',
    'oneTaskTimer',
    'totalTimer']
      .forEach ((el) => {elements[el] = document.GetElementById(el)}); ///not quite right!

}

// elements within 'question-data':
//
// intro : 'question-summary'
// multichoice: question-content
// multichoice: options
// multichoice: hint
//
//
//
//



document.getElementById ('question-object-storage-container')
  .setAttribute('data-question-object', getState ());
