function toNearestFraction (mins, denom) {
  return (Math.floor(mins*denom)/denom);
}

// If timer is not already started, then start it (unless dontStartIt==true)
// Either way, return time since started in minutes.

function startTimer(dontStartIt) {

  var oneTaskTimer = JSON.parse(sessionStorage.getItem("oneTaskTimer")) || {};
  var totalTimer = sessionStorage.getItem("totalTimer");
  // No use for new day check when starting / getting timer.
  // if (itsANewDay()) {
  // }
console.log ('>');
console.log ('>',totalTimer);
console.log ('>',oneTaskTimer);

  if (dontStartIt || (oneTaskTimer.started && !oneTaskTimer.counted))
    return (toNearestFraction ((Date.now() - oneTaskTimer.started)/60000, 60));
  else {
oneTaskTimer.message += 'RESTARTING TIMER. START----';
    oneTaskTimer.started = Date.now();
    oneTaskTimer.counted = undefined;
    window.sessionStorage.setItem("oneTaskTimer", JSON.stringify(oneTaskTimer));
    return 0;
  }
}

function todaysTotal () {
  return (sessionStorage.getItem("totalTimer"));    \\ || 0 once debugging done
}
