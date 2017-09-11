function storeQuery (questionObjectString) {
  console.log ('Storing stringification of length :',questionObjectString.length);
  sessionStorage.setItem ('question-data',questionObjectString);
}

var qObStr = document.getElementById ('question-object-storage-container').getAttribute('data-question-object');
storeQuery (qObStr);
