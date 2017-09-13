function storeQuery (questionObject) {
  console.log ('Storing stringification of length :',questionObject.length);
  Object.keys(questionObject).forEach ((el) => {
    sessionStorage.setItem (el,questionObject[el]);
  });
}


console.log ('running store-query.js');
var qOb = JSON.parse (document.getElementById ('question-object-storage-container').getAttribute('data-question-object'));
storeQuery (qOb);
