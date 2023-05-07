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
    tablinks[i].style.pointerEvents = "none"
  }

  document.getElementById("navigationclose").style.opacity = 0;
  document.getElementById("navigationclose").style.pointerEvents = "none"
 
}

function protractor(){
  document.getElementById("nav-igation").style.width = "300px";

  tablinks = document.getElementsByClassName("tablinks");

  for(i=0; i<tablinks.length; i++){
    tablinks[i].style.opacity = 1;
    tablinks[i].style.pointerEvents = "auto"
  }

  document.getElementById("navigationclose").style.opacity = 1;
  document.getElementById("navigationclose").style.pointerEvents = "auto";
}

function darkModeSwitcherLeft(container){
  let innercont;

  innercont = document.getElementById(container);

  if(innercont.style.left == "50px"){
      innercont.style.left = "0px"
      document.getElementById("nav-igation").style.backgroundColor = "green";
      document.getElementById("maincontainer").style.backgroundColor = "white";

      const heading = document.getElementsByTagName("h1");

      for(i=0; i<heading.length; i++){
        heading[i].style.color = "black";
      }
  }
  else{
    innercont.style.left = "50px"
    document.getElementById("nav-igation").style.backgroundColor = "black";
    document.getElementById("maincontainer").style.backgroundColor ="rgba(0, 0, 0, 0.870)";
    const heading = document.getElementsByTagName("h1");

    for(i=0; i<heading.length; i++){
      heading[i].style.color = "white";
    }
  }


}


