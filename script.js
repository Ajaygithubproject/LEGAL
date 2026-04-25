function toggleMenu(){

let menu=document.getElementById("menu");

let icon=document.getElementById("menuIcon");

menu.classList.toggle("active");

if(menu.classList.contains("active")){

icon.innerHTML="✕";

}
else{

icon.innerHTML="☰";

}

}
