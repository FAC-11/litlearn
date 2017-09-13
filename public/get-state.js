///front end - called as <script src=...>

// ids shoulkd contain everything /potentially/ relevant, as unused items will be filtered out later.
// {key=sessionStorage name : {html: HTML id}}
const ids=
  {'summary' : {'html':'summary-content'},
  'questioncontent' : {'html':'question-content' },
  'options' : {'html':'options-str'},
  'hint' : {'html':'hint-content'}, //done
  'extractcontent' : {'html':'extract-content'},
  'trophy' : {'html':'trophy'},
  'answers' : {'html': 'answers'},
  'oneTaskTimer' : {'html': 'timer'},
  // 'totalTimer' : {'html': 'totalTimer' }
  };

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

// retrieveState() retrieves items referred to in const ids ^ and populates HTML with them.
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
    ///Intended with use of attribute .innerHTML as calculated security risk because HTML
    ///likely to be used in our data.
    ///Gives malicious user only the opportunity to run arbitrary code as our domain on
    ///own machine - no biggie...
    elementsObj[el].element.setAttribute
          ('data-'+elementsObj[el].html, window.sessionStorage.getItem (el));

///currently endsup in eg <h2>.dataset.camelCaseAttr = 'contents'
  });
}

// go!
retrieveState ();
