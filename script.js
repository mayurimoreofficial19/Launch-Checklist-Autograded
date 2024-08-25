// Write your JavaScript code here!

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
        window.document,
        chosenPlanet.name,
        chosenPlanet.diameter,
        chosenPlanet.star,
        chosenPlanet.distance,
        chosenPlanet.moons,
        chosenPlanet.image
      );

      console.log(chosenPlanet);
    });

  // formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  document
    .getElementById("formSubmit")
    .addEventListener("click", function (event) {
      window.document;
      const list = document.getElementById("faultyItems");
      const pilot = document.querySelector("input[name=pilotName]").value;
      const copilot = document.querySelector("input[name=copilotName]").value;
      const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      const cargoLevel = document.querySelector("input[name=cargoMass]").value;
      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

      event.preventDefault();
    });
});
