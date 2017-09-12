///front end - called as <script src=...>


// {key=sessionStorage name : {html: HTML id}}
const ids=
  {'question-content' : {'html':'question-content' },
  'answers' : {'html': 'answers'},
  'oneTaskTimer' : {'html': 'timer'},
  // 'totalTimer' : {'html': 'totalTimer' }
  };

  // elements within 'question-data':
  //
  // intro : 'question-summary'
  // multichoice: question-content
  // multichoice: options
  // multichoice: hint
  //
  //

// {key=sessionStorage name : {html: HTML id, element: actual HTML element withih document}}
function locateCurrentElements (idsObj) {
  const elements = {};
console.log (Object.keys(idsObj));
    Object.keys(idsObj).forEach ((el) => {
console.log (el,' :-');
      var thisElement = document.getElementById(idsObj[el].html);
      if (thisElement) {
        console.log ('adding ',el,' to ',idsObj[el].html);
        elements[el]={};
        elements[el].html = idsObj[el].html
        elements[el].element = thisElement;
      }
    });
  return elements;
}

// {key=sessionStorage name : {html: HTML id, element: actual HTML element withih document}}
function retrieveState () {
  // console.log (document.keys.length);
  const elementsObj = locateCurrentElements(ids);
  console.log ('_____________________________________');
  console.log ('elementsObj=locateCurrentElements(ids): ',elementsObj);
  console.log ('locateCurrentElements(ids).keys.length: ',Object.keys(elementsObj).length);

  Object.keys(elementsObj).forEach ((el) => {
    console.log ('Obj.',el,' = ',elementsObj[el]);
    console.log ('Obj.',el,'.html = ',elementsObj[el].html);
    console.log ('Obj.',el,'.element = ',elementsObj[el].element);
    ///Use of .innerHTML as calculated security risk. HTML likely to be used.
    ///Gives malicious user only  the opportunity to run arbitrary code as our domain on
    ///own machine - no biggie...
    elementsObj[el].element.setAttribute
          ('data-'+elementsObj[el].html, window.sessionStorage.getItem (el));
  });
}

document.getElementById ('question-object-storage-container')
  .setAttribute('data-question-object', retrieveState ());
