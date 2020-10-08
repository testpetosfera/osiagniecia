const currentTime = new Date().getTime();
const lastAlcohol = 1521327600000;
const lastMasturbate = 1602021600000;
const lastDrugs = 1516662000000;
const lastSugar = 1588888800000;
const lastSmoke = 1596146400000;

const calculateNumberOfDays = (miliseconds) => {
  return Math.floor((currentTime - miliseconds) / 24 / 60 / 60 / 1000);
};

document.getElementById("smoke").innerHTML = calculateNumberOfDays(lastSmoke);

document.getElementById("alcohol").innerHTML = calculateNumberOfDays(
  lastAlcohol
);
document.getElementById("drugs").innerHTML = calculateNumberOfDays(lastDrugs);
document.getElementById("sugar").innerHTML = calculateNumberOfDays(lastSugar);
document.getElementById("masturbate").innerHTML = calculateNumberOfDays(
  lastMasturbate
);

if (calculateNumberOfDays(lastSmoke) < 730) {
  document.getElementById("addictionCounterSmoke").style.color = "#fe7171";
}

if (calculateNumberOfDays(lastMasturbate) < 730) {
  document.getElementById("addictionCounterMasturbate").style.color = "#fe7171";
}

if (calculateNumberOfDays(lastDrugs) < 730) {
  document.getElementById("addictionCounterDrugs").style.color = "#fe7171";
}

if (calculateNumberOfDays(lastAlcohol) < 730) {
  document.getElementById("addictionCounterAlcohol").style.color = "#fe7171";
}

if (calculateNumberOfDays(lastSugar) < 730) {
  document.getElementById("addictionCounterSugar").style.color = "#fe7171";
}
