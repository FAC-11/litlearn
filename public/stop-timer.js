// if it's 5am, it's a new day. You can't just leave it open while you sleep, cheatyface!
function itsANewDay() {
  return false;
  sessionStorage.setItem("totalTimer",0);   //cos it's a New Day!
}

function toNearestFraction (mins, denom) {
  return (Math.floor(mins*denom)/denom);
}

// work out how many minutes in current timer and add them to total timer.
// set .counted so that current timer will be ignored and overwritten.
// return timeSpent (mins)
function stopTimer() {
  var oneTaskTimer = JSON.parse(sessionStorage.getItem("oneTaskTimer"));
  var totalTimer = Number(sessionStorage.getItem("totalTimer")) || 0;
console.log ('should be: ',toNearestFraction ((Date.now() - oneTaskTimer.started)/60000, 20));
timeSpent = 0;
  if (!oneTaskTimer.counted)
    timeSpent = toNearestFraction ((Date.now() - oneTaskTimer.started)/60000, 20);
console.log ('will be: ',timeSpent);
  if (itsANewDay()) {
  }
console.log ('totalTimer:',totalTimer);
  totalTimer = totalTimer || 0;
  totalTimer += timeSpent;
  totalTimer = toNearestFraction (totalTimer,1000);
console.log ('totalTimer ->',totalTimer);
  sessionStorage.setItem("totalTimer", totalTimer);
  oneTaskTimer.started = Date.now();
  oneTaskTimer.counted = true;
  sessionStorage.setItem("oneTaskTimer", JSON.stringify(oneTaskTimer));
  return timeSpent;
}

stopTimer();
