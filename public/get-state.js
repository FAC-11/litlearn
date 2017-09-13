///front end - called as <script src=...>

// ids shoulkd contain everything /potentially/ relevant, as unused items will be filtered out later.
// {key=sessionStorage name : {html: HTML id}}
var ids=
  {'summary' : {'html':'summary-content', 'dest' : 'innerHTML'},
  'questioncontent' : {'html':'question-content', 'dest' : 'innerHTML'},
  'options' : {'html':'options-str'},
  'option-1' : {'html':'option-1', 'dest' : 'value'},
  'option-twin-1' : {'html':'option-text-1', 'dest' : 'innerHTML'},
  'option-2' : {'html':'option-2', 'dest' : 'value'},
  'option-twin-2' : {'html':'option-text-2', 'dest' : 'innerHTML'},
  'option-3' : {'html':'option-3', 'dest' : 'value'},
  'option-twin-3' : {'html':'option-text-3', 'dest' : 'innerHTML'},
  'option-4' : {'html':'option-4', 'dest' : 'value'},
  'option-twin-4' : {'html':'option-text-4', 'dest' : 'innerHTML'},

  'hint' : {'html': 'lightbulb', 'dest' : 'data-hint-content'},
  'extractcontent' : {'html':'extract-content', 'dest' : 'innerHTML'},
  'trophy' : {'html':'trophy'},
  'answer' : {'html': 'answer'},  //once answer is being stored, add
                                  // , 'dest' : 'innerHTML'} to this object
  // 'oneTaskTimer' : {'html': 'timer', 'dest' : 'innerHTML'},
  'totalTimer' : {'html': 'total-timer', 'dest' : 'innerHTML' }
  };
//
// var howManyOptions = 4;
// howManyOptions ++;
// while (howManyOptions, howManyOptions--, (howManyOptions>0)){
//   console.log ('loop:',howManyOptions);
//   console.log ('ids[option-+howManyOptions]:',ids['option-'+howManyOptions]);
//   console.log ('Object.assign (ids.options,{.....}):',Object.assign (ids.options,{'html':'option-'+howManyOptions, 'dest' : 'value'}));
//   ids['option-'+howManyOptions] = Object.assign (ids.options,{'html':'option-'+howManyOptions, 'dest' : 'value'});
//   ids['option-twin-'+howManyOptions] = Object.assign (ids.options,{'html':'option-text-'+howManyOptions, 'dest' : 'value'});
//   console.log ('>>>',ids['option-'+howManyOptions],ids['option-twin-'+howManyOptions],'<<<');
// }
// console.log ('DONE\n\n\n\n\n\n\n\nDONE::',ids);
//
// function unpackOptionsStr (containingIdObj) {   //beware the mutable input!
//   if (containingIdObj.options) {
// console.log ('ABOUT TO UNPACK: ',containingIdObj.options);
//     var optionsArr = JSON.parse (containingIdObj.options);
//     optionsArr.forEach ((option,index) => {
//       console.log ('OI:',(option,index));
//       containingIdObj ['option'+index] = Object.assign (containingIdObj.options,{'html':'option-'+index, 'dest' : 'value'});
//       containingIdObj [+'option-clone'+index] = Object.assign (containingIdObj.options,{'html':'option-text-'+index, 'dest' : 'innerHTML'});
//     });
//   }
//   return containingIdObj;
// }

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
