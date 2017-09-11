///front end - called as <script src=...>

function getState () {
  console.log (document.keys.length);
  const retrieved = {
    questionObjectString : window.sessionStorage.getItem ('question-data',questionObjectString),
    answerObjectString : window.sessionStorage.getItem ('answers',answerObjectString),
    oneTaskTimer : window.sessionStorage.getItem ('oneTaskTimer',oneTaskTimer),
    totalTimer : window.sessionStorage.getItem ('totalTimer',totalTimer)
  };
  return ('<h1>'+JSON.stringify(retrieved)+'<h1>');
}

function loadXDATAToElement (toLoad) {
  const elements=
    ['question-data',
    'answers',
    'oneTaskTimer',
    'totalTimer']
      .map (el => {
        return {el, actualElementinDocument}
      });
}

document.getElementById ('question-object-storage-container')
  .setAttribute('data-question-object', getState ());
