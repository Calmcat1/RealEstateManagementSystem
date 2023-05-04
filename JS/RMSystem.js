function pageRotator(Page,elmnt){

  let tabcontent, tablinks, i;

  tabcontent = document.getElementsByClassName("content");

  for(i=0; i<tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }

  //set tablinks
  document.getElementById(Page).style.display = "block";

  //clear whitebtn
  tablinks = document.getElementsByClassName("tablinks");

  for(i=0; i<tablinks.length; i++){
    tablinks[i].style.opacity = "1";
  }

  elmnt.style.opacity = "0.4"
}



function retractor(){

  let tablinks;

  document.getElementById("nav-igation").style.width = 0;

  tablinks = document.getElementsByClassName("tablinks");

  for(i=0; i<tablinks.length; i++){
    tablinks[i].style.opacity = 0;

  }

  document.getElementByID("navigationclose").style.display = "none";
}

function protractor(){
  document.getElementById("nav-igation").style.width = "300px";

  tablinks = document.getElementsByClassName("tablinks");

  for(i=0; i<tablinks.length; i++){
    tablinks[i].style.opacity = 1;
    
  }

  document.getElementByID("navigationclose").style.display = "block";
}

