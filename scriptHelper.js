// Write your helper functions here!

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.

  let missionTarget = (document.getElementById(
    "missionTarget"
  ).innerHTML = `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`);
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  }

  if (isNaN(testInput)) {
    return "Not a Number";
  }

  if (typeof Number(testInput) === "number") {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  const pilotValidation = validateInput(pilot);
  const copilotValidation = validateInput(copilot);
  const fuelLevelValidation = validateInput(fuelLevel);
  const cargoLevelValidation = validateInput(cargoLevel);

  if (
    pilotValidation === "Empty" ||
    copilotValidation === "Empty" ||
    fuelLevelValidation === "Empty" ||
    cargoLevelValidation === "Empty"
  ) {
    alert("All fields must be filled out.");
    return;
  }

  if (pilotValidation === "Is a Number") {
    alert("Please enter a valid Pilot Name. Only text inputs are accepted.");
  }

  if (copilotValidation === "Is a Number") {
    alert("Please enter a valid Co-pilot Name. Only text inputs are accepted.");
  }

  if (
    fuelLevelValidation === "Not a Number" ||
    cargoLevelValidation === "Not a Number"
  ) {
    alert("Fuel level and cargo level must be numbers.");
    return;
  }

  const fuelStatus = list.querySelector("#fuelStatus");
  const cargoStatus = list.querySelector("#cargoStatus");
  const pilotStatus = list.querySelector("#pilotStatus");
  const copilotStatus = list.querySelector("#copilotStatus");
  const launchStatus = document.getElementById("launchStatus");

  pilotStatus.textContent = `Pilot ${pilot} is ready for launch`;
  copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`;

  let fuelIssue = false;
  let cargoIssue = false;

  if (Number(fuelLevel) < 10000) {
    fuelIssue = true;
    fuelStatus.textContent = "Fuel level too low for launch";
  } else {
    fuelStatus.textContent = "Fuel level high enough for launch";
  }

  if (Number(cargoLevel) > 10000) {
    cargoIssue = true;
    cargoStatus.textContent = "Cargo mass too heavy for launch";
  } else {
    cargoStatus.textContent = "Cargo mass low enough for launch";
  }

  if (fuelIssue || cargoIssue) {
    list.style.visibility = "visible";
    launchStatus.textContent = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "red";
  } else {
    list.style.visibility = "visible";
    launchStatus.textContent = "Shuttle is Ready for Launch";
    launchStatus.style.color = "green";
  }
}

async function myFetch() {
  const response = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  );
  const json = await response.json();

  return json;
}

function pickPlanet(planets) {
  let randomIndex = Math.floor(Math.random() * planets.length);
  return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
