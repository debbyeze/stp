// date
 var date = new Date();
  var year = date.getFullYear();
 document.getElementById("copyright-date").innerHTML = year;


 var closeMenu = document.getElementById("close");
var menu = document.getElementById("menu");
var navList =document.getElementById("nav");
var mainPage = document.querySelector("main");

menu.addEventListener("click", () => {
    menu.style.display = "none";
    navList.style.display="block";
    closeMenu.style.display="block";
});

closeMenu.addEventListener("click", () => {
    closeMenu.style.display = "none";
       navList.style.display = "none";
    menu.style.display = "block";
});

 
   mainPage.addEventListener("click", () => {
   if(closeMenu.style.display==="block"){
     closeMenu.style.display = "none";
      navList.style.display = "none";
     menu.style.display = "block";
   }
     
   });




// var people = document.getElementById("people");
// var project = document.getElementById("project");
// var years = document.getElementById("years");

// people.innerText= y;

// people.addEventListener("hover", () => {
//   for(var i=0; i<3001; i++){
//  people.innerText=i +"+";
// };
// });

