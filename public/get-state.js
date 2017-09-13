///front end - called as <script src=...>

// ids shoulkd contain everything /potentially/ relevant, as unused items will be filtered out later.
// {key=sessionStorage name : {html: HTML id}}
const ids=
  {'summary' : {'html':'summary-content', 'dest' : 'innerHTML'},
  'questioncontent' : {'html':'question-content', 'dest' : 'innerHTML'},
  'options' : {'html':'options-str'},
  'hint' : {'html': 'lightbulb', 'dest' : 'data-hint-content'}, //done
  'extractcontent' : {'html':'extract-content', 'dest' : 'innerHTML'}, //looks good. No extract showing, but seems to be prob with old part
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
        elements[el]=Object.assign(idsObj[el],{element:thisElement });
        // elements[el].html = idsObj[el].html
        // elements[el].element = thisElement;
      }
    });
  return elements;
}

// retrieveState() retrieves items referred to in const ids ^ and populates HTML with them.
// {key=sessionStorage name : {html: HTML id, element: actual HTML element withih document}}
function retrieveState () {
  var destAttr = '';
  // console.log (document.keys.length);
  var elementsObj = locateCurrentElements(ids);
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
console.log ('dest if any = ',destAttr = elementsObj[el]);
    destAttr = elementsObj[el].dest || 'data-'+elementsObj[el].html;  ///currently endsup in eg
                                                            ///<h2>.dataset.camelCaseAttr = 'contents'
    elementsObj[el].element.setAttribute
          (destAttr, window.sessionStorage.getItem (el));
    elementsObj[el].element[destAttr]= window.sessionStorage.getItem (el);
    // Try both ways to be sure. IE only likes get/setAttr, but doesn't work for innerHTML/ textContent which are properties not attributes. Need to further investigate and test, esp IE.
  console.log ('setting into',destAttr,'of',elementsObj[el].html,'found at',elementsObj[el].element);

  });
}

// go!
retrieveState ();
