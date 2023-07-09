
let contactBtn = document.querySelector('#contactBtn');
let servicesBtn = document.querySelector('#servicesBtn');
let contactContainer = document.querySelector('#contactContainer');
let servicesContainer = document.querySelector('#servicesContainer');

function toggleContainer() {
    servicesContainer.style.display = "none"
  if (contactContainer.style.display === "flex") {
    contactContainer.style.display = "none";
  } else {
    contactContainer.style.display = "flex";
  }
}

function toggleServicesContainer() {
    contactContainer.style.display = "none"
  if (servicesContainer.style.display === "flex") {
    servicesContainer.style.display = "none";
  } else {
    servicesContainer.style.display = "flex";
  }
}