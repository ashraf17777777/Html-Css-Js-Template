let landingPage = document.querySelector(".landing-page");

let arr = [ "03.jpg" , "04.jpg"];

setInterval( () => {


let randomNum = Math.floor(Math.random() * arr.length);

landingPage.style.backgroundImage = 'url("images/' + arr[randomNum]  + '")';      


}, 1000); 



let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
    
    let skillOffsetTop = ourSkills.offsetTop;
    

    let skillsOuterHeight = ourSkills.offsetHeight;
    

    let windowHeight = this.innerHeight;
    

    let windowScrollTop = this.pageYOffset;
    
      
    console.log(windowScrollTop);
        
    console.log(skillOffsetTop +  skillsOuterHeight - windowHeight);


    if(windowScrollTop >= (skillOffsetTop +  skillsOuterHeight- windowHeight - 400) ) {

    
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
        
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }
  
};




// Start Gallery 

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img =>{
    img.addEventListener("click",(e) => {

        let overlay = document.createElement("div");

        overlay.className = "popup-overlay";

        document.body.appendChild(overlay); 

        let popupBox = document.createElement("div");

        popupBox.className = "popup-box";

        if(img.alt !== null){
            let imgHeading = document.createElement("h3");

            let imgText = document.createTextNode(img.alt);

            imgHeading.appendChild(imgText);

            popupBox.appendChild(imgHeading);
        }

        let popupImage = document.createElement("img");

        popupImage.src = img.src;

        popupBox.appendChild(popupImage);

        document.body.appendChild(popupBox);  

        // Create Close Button 

        let closeButton = document.createElement("span");
        
        let closeButtonText = document.createTextNode("X");

        closeButton.appendChild(closeButtonText);

        closeButton.className = "close-button";

        popupBox.appendChild(closeButton);


    });
});


document.addEventListener("click", function (e) {
    if (e.target.className == "close-button") {
        e.target.parentNode.remove();

        document.querySelector(".popup-overlay").remove();
    }
});
// End Gallery


// Start Bullets

    const allBullets = document.querySelectorAll(".nav-bullets .bullets");
    const allLinks = document.querySelectorAll(".landing-page .links a");
    
// End Bullets


function scrollTo(element){
    element.forEach(ele => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            });
    });  
  });  

}

scrollTo(allBullets);
scrollTo(allLinks);


// Create Bullets menu

    let toggleBtn = document.querySelector(".toggle-btn");
    let links = document.querySelector(".links");
    

    // toggleBtn.onclick = function () {
    //     toggleBtn.style.backgroundColor = "blue";
    // } 


    toggleBtn.onclick = function (e) {

        e.stopPropagation();
       
        this.classList.toggle("menu-active");
        links.classList.toggle("open");
    }




    
    document.addEventListener("click",function (e) {
        if(e.target !== toggleBtn && e.target !== links){
            
            if(links.classList.contains("open")) {
                toggleBtn.classList.toggle("menu-active");
                links.classList.toggle("open");
            }

        }
    })

    links.onclick = function (e) {
        e.stopPropagation()
    }

// End Bullets menu


