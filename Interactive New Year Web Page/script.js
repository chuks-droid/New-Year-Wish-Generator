




// Sparkles Effect



const container = document.querySelector(".sparkles-container");

function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");

  // Randomize position
  sparkle.style.left = `${Math.random() * 100}vw`;
  sparkle.style.top = `${Math.random() * 100}vh`;

  // Randomize size
  const size = Math.random() * 4 + 2; // Between 2px and 6px
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;

  // Randomize animation duration
  sparkle.style.animationDuration = `${Math.random() * 2 + 1}s`;

  container.appendChild(sparkle);

  // Remove the sparkle after animation ends
  setTimeout(() => {
    sparkle.remove();
  }, 3000);
}

// Generate sparkles at random intervals
setInterval(createSparkle, 200);

// Countdown Timer
function startCountdown() {
  const targetDate = new Date("January 1, 2025 00:00:00").getTime();

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft < 0) {
      clearInterval(interval);
      document.querySelector(".countdown").innerHTML = "<h2>Happy New Year! 🎉</h2>";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  }, 1000);
}

// Start the countdown
startCountdown();

// Wish Generator
const wishes = [
    "May this New Year bring you happiness, health, and success!",
    "Wishing you a year filled with love, laughter, and adventure!",
    "Cheers to new beginnings and unforgettable memories in 2024!",
    "May 2024 be your best year yet! Dream big and achieve great things!",
    "Sending you all the positivity and success for a fantastic year ahead!",
    "Here’s to a New Year as amazing and bright as you are!",
  ];
  
  document.getElementById("generateWishButton").addEventListener("click", () => {
    const nameInput = document.getElementById("nameInput").value.trim();
    
    // Check if the input is empty or contains a valid name
    const name = nameInput.length > 0 ? nameInput : null;
  
    // Generate a random wish
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
  
    // Create the output text
    let output = name 
      ? `✨ Happy New Year, ${name}! ${randomWish}` 
      : `✨ Happy New Year! ${randomWish}`;
  
    // Display the output in an alert box
    document.getElementById("wishOutput").textContent = output;

     // Clear the input field
  document.getElementById("nameInput").value = "";
  
    // Trigger extra sparkles for fun
    for (let i = 0; i < 15; i++) {
      createSparkle();
    }
  });

// Ensure you select the correct elements
const wishButton = document.getElementById("generateWishButton");
const wishOutput = document.getElementById("wishOutput");

// Ensure the button exists before adding the event listener
if (wishButton && wishOutput) {
  document.body.addEventListener("click", (event) => {
    // If the click is outside the wishButton and wishOutput, hide the wishOutput
    if (!wishButton.contains(event.target) && !wishOutput.contains(event.target)) {
      wishOutput.style.display = "none";
    } else {
      // Otherwise, show the wishOutput
      wishOutput.style.display = "flex";
    }
  });
}
const ribbonsContainer = document.querySelector(".ribbons-container");

function createRibbon() {
  // Create a ribbon element
  const ribbon = document.createElement("div");
  ribbon.classList.add("ribbon");

  // Randomize the horizontal position
  const x = Math.random() * window.innerWidth;
  ribbon.style.left = `${x}px`;

  // Randomize the size
  const size = Math.random() * 10 + 5; // Between 5px and 15px
  ribbon.style.width = `${size}px`;
  ribbon.style.height = `${size * 4}px`;

  // Randomize animation duration
  const duration = Math.random() * 0.5 + 1; // Between 1s and 1.5s
  ribbon.style.animationDuration = `${duration}s`;

  // Append to container
  ribbonsContainer.appendChild(ribbon);

  // Remove ribbon after animation
  setTimeout(() => {
    ribbon.remove();
  }, duration * 1000);
}

// Generate ribbons at random intervals
setInterval(createRibbon, 200);

// Optional: Add ribbons on button click
document.getElementById("celebrateButton").addEventListener("click", () => {
  for (let i = 0; i < 20; i++) {
    setTimeout(createRibbon, i * 100); // Delay for each ribbon
  }
});