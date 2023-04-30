function playClickSound() {
  var audio = document.getElementById("audio");

}


function myFunction() {
 
  var image = document.getElementById("bimba");
  var element = document.body;
  var article = document.getElementById("article");
  var header = document.getElementById("header");
  var menuColor = document.getElementsByTagName("a");

  element.classList.toggle("dark-mode");
  article.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");


  if (image.innerHTML == "<i class=\"fa-solid fa-moon\" style=\"color: #efefefa3;\"></i>") {
    image.innerHTML = "<i class=\"fa-solid fa-sun\" style=\"color: #363636a3;\"></i>";
  }
  else {
    image.innerHTML = "<i class=\"fa-solid fa-moon\" style=\"color: #efefefa3;\"></i>";
  }


  for(var i = 0; i < menuColor.length; i++) {
    menuColor[i].classList.toggle("dark-letters");
 }

}


//break


function calcular() {
  const expressao = document.getElementById('expressao').value;
  const resultado = eval(expressao);
  document.getElementById('resultado').textContent = `O resultado é: ${resultado}`;
}

function apagarResultado() {
  document.getElementById('resultado').textContent = '';
}

//break

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



const submitButton = document.getElementById('submit-caption');
const inputField = document.getElementById('caption-input');
const caption = document.getElementById('caption');

submitButton.addEventListener('click', function() {
  const userInput = inputField.value;
  caption.textContent = userInput;
});



const submitButtonUser = document.getElementById('submit-user');
const inputFieldUser = document.getElementById('user-input');
const user = document.getElementById('user');

submitButton.addEventListener('click', function() {
  const userInput = inputField.value;
  caption.textContent = userInput;
});


var today = new Date();
var date = today.toLocaleDateString();

// set date element text to formatted date
document.getElementById("date").innerHTML = date;
