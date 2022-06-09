var myNav = document.getElementById('myNav');
var navLogo = document.getElementById('navLogo');
var navMenus = document.getElementById('navMenus');
var navMenuSlided = document.getElementById('navMenuSlided');
var backtoTopbtn = document.getElementById('backtoTopbtn');

window.onscroll = function () { 
    "use strict";
 if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ){
        myNav.classList.add("nav-colored");   
        myNav.classList.remove("nav-transparent");
        navLogo.classList.add("navLogo");
      navMenus.classList.add("visually-hidden");
    
     navMenuSlided.classList.remove("visually-hidden");
     
      backtoTopbtn.classList.remove("visually-hidden");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
        navLogo.classList.remove("navLogo");  
        navMenus.classList.remove("visually-hidden");
     navMenuSlided.classList.add("visually-hidden");
                
      backtoTopbtn.classList.add("visually-hidden");
        
    }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}