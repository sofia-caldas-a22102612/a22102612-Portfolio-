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


  for (var i = 0; i < menuColor.length; i++) {
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
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    // Get the button value
    var value = button.textContent;

    // Append the value to the display
    display.textContent += value;
  });
});




function toggleMenu() {
  var menu = document.querySelector('.menu-hide');
  menu.classList.toggle('menu-show');
}


function toggleJungle() {
  var menu = document.querySelector('.hide-jungle');
  menu.classList.toggle('show');
}

function toggleSweeper() {
  var menu = document.querySelector('.hide-sweeper');
  menu.classList.toggle('show');
}



// get current date
const currentDate = new Date();

// define months array
const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

// get day, month, and year
const day = currentDate.getDate();
const month = months[currentDate.getMonth()];
const year = currentDate.getFullYear();

// format date string
const dateString = `${day} of ${month}, ${year}`;

// display date in element
document.getElementById("date").textContent = dateString;




const submitButton = document.getElementById('submit-caption');
const inputField = document.getElementById('caption-input');
const caption = document.getElementById('caption');

submitButton.addEventListener('click', function () {
  const userInputCaption = inputField.value;
  caption.textContent = userInputCaption;
});



const submitButtonUser = document.getElementById('submit-user');
const inputFieldUser = document.getElementById('user-input');
const user = document.getElementById('user');
const change1 = document.getElementById('caption');

submitButton.addEventListener('click', function () {
  const userInput = inputField.value;
  change1.textContent = userInput;
});


var today = new Date();
var date = today.toLocaleDateString();

// set date element text to formatted date
document.getElementById("date").innerHTML = date;
