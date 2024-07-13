var theme = document.getElementById("theme");
theme.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        theme.src = "images/darkmode.png";
    }else{
        theme.src = "images/lightmode.png";
    }
}


const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


// function clicke(){
//     document.getElementById('navmob').classList.toggle('navv2');
// }

function tap(){
    document.getElementById('togglemenu').classList.toggle('display');
}

var theme2 = document.getElementById("theme2");
theme2.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        theme2.src = "images/darkmode.png";
    }else{
        theme2.src = "images/lightmode.png";
    }
}

