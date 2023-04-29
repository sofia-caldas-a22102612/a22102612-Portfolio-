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


  if (image.innerHTML == "<i class=\"fa-solid fa-moon\" style=\"color: #535353;\"></i>") {
    image.innerHTML = " <i class=\"fa-solid fa-sun\" style=\"color: #efefefa3;\"></i>";
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



