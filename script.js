
function myFunction() {
    var menu = document.getElementById("dropbtn");
    var image = document.getElementById("bimba");
    
    if(image.innerHTML == "<i class=\"fa-solid fa-fish fa-xl\" style=\"color: #000000;\"></i>"){
        menu.innerHTML = "<button id = \"dropbtn\" class=\"dropbtn\">Menu</button>";
        image.innerHTML = "<i class=\"fa-regular fa-flag\" style=\"color: #000000;\"></i>";
    }
    else{
    menu.innerHTML = "<button id = \"dropbtn\" class=\"dropbtnDark\">Menu</button>";
    image.innerHTML = "<i class=\"fa-solid fa-fish fa-xl\" style=\"color: #000000;\"></i>";
    }
}


document.querySelectorAll('div.titulo').forEach(d=>{
 
    d.onclick= function clicar(){
      if(d.nextElementSibling.style.display=='block'){
        d.nextElementSibling.style.display='none'
      }
      else{
         d.nextElementSibling.style.display='block';                 
        
      }
    };
  });
        