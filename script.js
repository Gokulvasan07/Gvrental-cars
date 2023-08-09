// Select car cards and booking form
const carCards = document.querySelectorAll(".car-card");
const bookingForm = document.getElementById("booking-form");

// Add event listener to each car card
carCards.forEach(carCard => {
  const bookButton = carCard.querySelector(".book-button");
  const carId = carCard.getAttribute("data-car-id");

  bookButton.addEventListener("click", () => {
    // Populate booking form with car details
    const carModel = carCard.querySelector("h3").textContent;
    const pricePerDay = carCard.querySelector("p").textContent.split(":")[1].trim();
    const startDate = new Date().toISOString().split("T")[0];
    const endDate = new Date(new Date().getTime() + 86400000).toISOString().split("T")[0];

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("start-date").value = startDate;
    document.getElementById("end-date").value = endDate;

    // Scroll to booking form
    bookingForm.scrollIntoView({ behavior: "smooth" });
  });
});

// Submit booking form
bookingForm.addEventListener("submit", event => {
  event.preventDefault();

  // Collect form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;

  // Perform booking submission (this is a simplified example)
  alert(`Booking submitted!\nName: ${name}\nEmail: ${email}\nAddress: ${address}\nStart Date: ${startDate}\nEnd Date: ${endDate}`);
});
