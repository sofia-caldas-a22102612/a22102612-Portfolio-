function playClickSound() {
  var audio = document.getElementById("audio");

}


function myFunction() {
 
  var image = document.getElementById("bimba");
  var element = document.body;
  var article = document.getElementById("article");
  var audio = document.getElementById("audio");
  
  element.classList.toggle("dark-mode");
  article.classList.toggle("dark-mode");


  if (image.innerHTML == "<i class=\"fa-solid fa-fish fa-xl\" style=\"color: #000000;\"></i>") {
    image.innerHTML = "<i class=\"fa-regular fa-flag\" style=\"color: #000000;\"></i>";
    audio.innerHTML = "  <audio controls src=\"sounds\sadness-in-roads-to-nowhere-23407.mp3\" autoplay=\"true\" loop=\"true\"></audio>";
  }
  else {
    image.innerHTML = "<i class=\"fa-solid fa-fish fa-xl\" style=\"color: #000000;\"></i>";
    audio.innerHTML = "<audio controls src=\"sounds\galaxy-140898.mp3\" autoplay=\"true\" loop=\"true\"></audio>";
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



