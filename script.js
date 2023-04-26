function playClickSound() {
  var audio = new Audio('sounds\interface-soft-abbreviated-click-131438.mp3');
  audio.play();
}


function myFunction() {
 
  var image = document.getElementById("bimba");
  var element = document.body;
  
  element.classList.toggle("dark-mode");


  if (image.innerHTML == "<i class=\"fa-solid fa-fish fa-xl\" style=\"color: #000000;\"></i>") {
    image.innerHTML = "<i class=\"fa-regular fa-flag\" style=\"color: #000000;\"></i>";
  }
  else {
    image.innerHTML = "<i class=\"fa-solid fa-fish fa-xl\" style=\"color: #000000;\"></i>";
  }
}




var display = document.querySelector('.display');

// Get all the buttons
var buttons = document.querySelectorAll('button');

// Add click event listeners to each button
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the button value
    var value = button.textContent;

    // Append the value to the display
    display.textContent += value;
  });
});



