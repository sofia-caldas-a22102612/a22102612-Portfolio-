
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


document.querySelectorAll('div.titulo').forEach(d => {

  d.onclick = function clicar() {
    if (d.nextElementSibling.style.display == 'block') {
      d.nextElementSibling.style.display = 'none'
    }
    else {
      d.nextElementSibling.style.display = 'block';

    }
  };
});



