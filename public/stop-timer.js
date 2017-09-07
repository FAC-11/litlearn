function itsANewDay() {
  return false;
  sessionStorage.setItem("totalTimer",0);   //cos it's a New Day!
}

function stopTimer() {
  var now= Date.now();
  var oneTaskTimer = JSON.parse(sessionStorage.getItem("oneTaskTimer"));
  var totalTimer = sessionStorage.getItem("totalTimer");
  if (!oneTaskTimer.counted)
    var timeSpent = (Date.now() - oneTaskTimer.started)/60000;
  if (itsANewDay()) {
  }
  totalTimer = totalTimer || 0;
  totalTimer += timeSpent;
  sessionStorage.setItem("totalTimer", totalTimer);
  oneTaskTimer.counted = true;
  sessionStorage.setItem("oneTaskTimer", JSON.parse(oneTaskTimer));
  return timeSpent;
}
