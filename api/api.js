let activeCategory = "cat";
let petsData = [];

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => {
      displayPetCategories(data.categories);
      loadPets(activeCategory);
    })
    .catch((error) => console.error("Error loading categories:", error));
};
loadCategories();

const displayPetCategories = (categories) => {
  const buttonDiv = document.getElementById("adoption-div");
  categories.forEach((item) => {
    const button = document.createElement("button");
    setButtonStyles(button, item.category);
    button.innerHTML = `
      <span>${item.category}</span>
      <img class="w-14 h-14" src=${item.category_icon} alt="${item.category}-icon">`;

    button.addEventListener("click", function () {
      activeCategory = item.category;
      updateButtonStyles();
      loadPets(item.category);
    });

    buttonDiv.appendChild(button);
  });
  updateButtonStyles();
};

function setButtonStyles(button, category) {
  button.classList =
    category.toLowerCase() === activeCategory.toLowerCase()
      ? `btn h-[104px] rounded-full border-2 border-blue-500 flex flex-row-reverse text-lg`
      : `btn h-[104px] rounded border-2 border-gray-300 flex flex-row-reverse text-lg`;
}

function updateButtonStyles() {
  const buttons = document.querySelectorAll("#adoption-div button");
  buttons.forEach((button) => {
    const category = button.querySelector("span").textContent;
    setButtonStyles(button, category);
  });
}

function loadPets(category) {
  showLoading(true);
  hidePetsContainer();

  setTimeout(() => {
    fetch(
      `https://openapi.programming-hero.com/api/peddy/category/${category.toLowerCase()}`
    )
      .then((res) => res.json())
      .then((data) => {
        petsData = data.data;
        displayPets(petsData);
        showLoading(false);
        showPetsContainer();
      })
      .catch((error) => {
        console.error("Error fetching pets:", error);
        showLoading(false);
      });
  }, 2000);
}

function displayPets(pets) {
  const petDiv = document.getElementById("leftside");
  petDiv.innerHTML = "";

  if (pets.length === 0) {
    const noDataDiv = document.createElement("div");
    noDataDiv.classList =
      "flex flex-col items-center justify-center min-h-[491px] col-span-3";
    noDataDiv.innerHTML = `
      <img src="../assests/error.webp" alt="No data" class="max-w-[153px]" />
      <div class="text-4xl">No Information Available</div>`;
    petDiv.appendChild(noDataDiv);
    return;
  }

  pets.forEach((pet) => {
    const petCard = document.createElement("div");
    petCard.classList = `card`;
    petCard.innerHTML = `
      <figure>
        <img src="${pet.image || "./assets/placeholder.png"}" alt="${
      pet.pet_name || "Not available"
    }" />
      </figure>
      <div class="card-body">
        <h3 class="card-title">${pet.pet_name || "Not available"}</h3>
        <div class="text-sm text-gray-800 dark:text-gray-200 mb-2">📦 Breed: ${
          pet.breed || "Not available"
        }</div>
        <div class="text-sm text-gray-800 dark:text-gray-200 mb-2">📅 Birth: ${
          pet.date_of_birth
            ? new Date(pet.date_of_birth).toDateString()
            : "Not available"
        }</div>
        <div class="text-sm text-gray-800 dark:text-gray-200 mb-2">⚥ Gender: ${
          pet.gender || "Not available"
        }</div>
        <div class="text-sm text-gray-800 dark:text-gray-200 mb-2">💉 Vaccinated: ${
          pet.vaccinated_status || "Not available"
        }</div>
        <div class="text-sm text-gray-800 dark:text-gray-200 mb-4">💲 Price: ${
          pet.price ? pet.price + "$" : "Not available"
        }</div>
        <div class="card-actions">
          <button class="btn like-button">👍</button>
          <button class="btn adopt-button">Adopt</button>
          <button class="btn details-button">Details</button>
        </div>
      </div>`;
    petDiv.appendChild(petCard);

    petCard
      .querySelector(".like-button")
      .addEventListener("click", () => handleLikeClick(pet));
    petCard
      .querySelector(".adopt-button")
      .addEventListener("click", (event) => handleAdoptClick(event.target));

    petCard
      .querySelector(".details-button")
      .addEventListener("click", () => handleDetailsClick(pet));
  });
}

function handleLikeClick(pet) {
  const rightSideDiv = document.getElementById("rightside");
  const img = document.createElement("img");
  img.src = pet.image || "./assets/placeholder.png";
  img.classList = "w-full object-cover rounded mb-4";
  rightSideDiv.appendChild(img);
}

function handleDetailsClick(pet) {
  const modal = document.getElementById("petDetailsModal");
  const modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = `
    <figure>
      <img src="${pet.image || "./assets/placeholder.png"}" alt="${
    pet.pet_name || "Not available"
  }" />
    </figure>
    <h3 class="text-lg font-bold">${pet.pet_name || "Not available"}</h3>
    <div class="text-sm text-gray-800 dark:text-gray-200 mb-2">📦 Breed: ${
      pet.breed || "Not available"
    }</div>
    <div class="text-sm text-gray-800 dark:text-gray-200 mb-2">📅 Birth: ${
      pet.date_of_birth
        ? new Date(pet.date_of_birth).toDateString()
        : "Not available"
    }</div>
    <div class="text-sm text-gray-800 dark:text-gray-200 mb-2">⚥ Gender: ${
      pet.gender || "Not available"
    }</div>
    <div class="text-sm text-gray-800 dark:text-gray-200 mb-2">💉 Vaccinated: ${
      pet.vaccinated_status || "Not available"
    }</div>
    <div class="text-sm text-gray-800 dark:text-gray-200 mb-4">💲 Price: ${
      pet.price ? pet.price + "$" : "Not available"
    }</div>
    <p>${pet.pet_details || "No details available"}</p>`;
  modal.showModal();
}

function closeModal() {
  const modal = document.getElementById("petDetailsModal");
  modal.close();
}

document.getElementById("sortByPrice").addEventListener("click", () => {
  petsData.sort((a, b) => b.price - a.price);
  displayPets(petsData);
});

function showLoading(isLoading) {
  const loadingDiv = document.getElementById("loading");
  loadingDiv.classList.toggle("hidden", !isLoading);
}

function hidePetsContainer() {
  document.getElementById("leftside").classList.add("hidden");
}

function showPetsContainer() {
  document.getElementById("leftside").classList.remove("hidden");
}

function handleAdoptClick(button) {
  button.disabled = true;
  button.innerText = "adopted";
  const modal = document.getElementById("adoptModal");
  const countdownElement = document.getElementById("countdown");
  let counter = 3;

  modal.showModal();

  function countdown() {
    if (counter > 0) {
      countdownElement.textContent = counter;
      counter--;
      setTimeout(countdown, 1000);
    } else {
      modal.close();
    }
  }

  countdown();
}

function closeAdoptModal() {
  const modal = document.getElementById("adoptModal");
  modal.close();
}
