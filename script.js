// Write your JavaScript code here!
const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");
window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse;
  listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      const chosenPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document.chosenPlanet.name,
        document.chosenPlanet.diameter,
        document.chosenPlanet.star,
        document.chosenPlanet.distance,
        document.chosenPlanet.moons,
        document.chosenPlanet.imageUrl
      );

      console.log(chosenPlanet);
    });
  document
    .getElementById("launchStatusCheck")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const pilot = "Chris";
      const copilot = "Blake";
      const fuelLevel = document.querySelector("input[name=pilotName]").value;
      const cargoLevel = document.querySelector(
        "input[name=copilotName]"
      ).value;

      const list = document.getElementById("faultyItems");

      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });
});
