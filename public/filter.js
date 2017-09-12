var filter = function () {
  //write event listener on the submit button to re-render the table
  document.getElementById('question_filter_form').addEventListener('submit',function(e){
    e.preventDefault();
    console.log(e.target.dataset)});
};
filter();
