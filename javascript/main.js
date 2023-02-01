// Check If We Have Data In localStorage 

if (window.localStorage.getItem("data-color") !== null){
    document.documentElement.style.setProperty('--main-color', window.localStorage.getItem("data-color"));

    document.querySelectorAll(".colors-list li").forEach(color => {
        
        color.classList.remove("active");

        if (color.dataset.color === window.localStorage.getItem("data-color")){
            color.classList.add("active");
        }
    })
}
// Creating Toggle For Our Side Menu 
let settingBox = document.querySelector(".setting-box");
let faGear = document.querySelector(".fa-gear");

faGear.onclick = function(){

    settingBox.classList.toggle("show-box");
    faGear.classList.toggle("fa-spin");
}

// Using Random Color 

let colorLi = document.querySelectorAll(".colors-list li");

colorLi.forEach((color) => {
    color.addEventListener("click", (e) => {
    
        colorLi.forEach(li => {
            li.classList.remove('active');
        });
        e.target.classList.add('active');
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        window.localStorage.setItem("data-color", e.target.dataset.color);
})
});

// Toggle Menu 
let otherLinks = document.querySelector(".other-links");
let megaMenu = document.querySelector(".mega-menu");

otherLinks.onclick = function(){
    megaMenu.classList.toggle("active");
    window.onscroll = function (){
        megaMenu.classList.remove("active");
    }
}


// Making countDown For The The Event Section
let countDownDate = new Date("Mar 8, 2023 08:27:30");


let event = setInterval(function(){
    //time now 
    let timeNow = new Date().getTime();
    //time diffrence between Event Time
    let timeDiffrence = countDownDate - timeNow;
    
    // calculating time for days, hours, minutes, and seconds 
    let days = Math.floor(timeDiffrence / (1000 * 60 * 60 * 24));
    let hours = Math.floor(timeDiffrence % (1000 * 60 * 60 * 24) / (1000 * 60 * 60) );
    let minutes = Math.floor(timeDiffrence % (1000 * 60 * 60 ) / (1000 * 60) );
    let seconds = Math.floor(timeDiffrence % (1000 * 60) / (1000));
    
    document.querySelector("#days").innerHTML = days  ;
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;
    
},1000);


window.onscroll = function(){
    
    // Our Skill Section onScroll Changes The Width Of The Span Using The Dataset 

    skills()

    // Stats Counter 
    let statsSection = document.querySelector("#stats");
    if (window.scrollY >= statsSection.offsetTop + 20){
        console.log('We Are Here');
        statFunc();
    }
    // Calling Back Function Arrow 
    arrowFunction();
    
}
// Skills Function 
let ourSkills = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");
    function skills(){
        if (window.scrollY >= ourSkills.offsetTop + 50){
        spans.forEach((span) => span.style.width = span.dataset.width)
    }else {
        spans.forEach((span)=> span.style.width = "0");
    }
    }

    
// Stats Counter Function 
function statFunc (){
let valueDisplyed = document.querySelectorAll("#stats .number");
let interval = 3000;
valueDisplyed.forEach(display => {
    let startValue = 0;
    let endValue = display.dataset.goal;
    
    duration = Math.floor( interval / endValue);
    let counter = setInterval(()=>{
        startValue += 1;
        display.textContent = startValue;
        if (startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
});


}

// Random Landing image 

let landingImg = document.querySelector("#landing-img");
let RandomH1 = document.querySelector("#random-heading");

let randomImgArray = ["images/landing-image.png","images/megamenu.png","images/events.png","images/work-steps.png"];
let randomHeadingArray =  ["Welcome To Our Website.","We Are Happy You Are Here.", "Enjoy Your Our Humble Work!"];
setInterval((x)=>{
    
    let randomNumber = Math.floor(Math.random()*randomImgArray.length);

    landingImg.src = randomImgArray[randomNumber];
    landingImg.style.width = '600px';

    // Random Heading 
    let randomHeading = Math.floor(Math.random()*randomHeadingArray.length);
    RandomH1.innerHTML = randomHeadingArray[randomHeading];

},5000)

let SpanArrow = document.querySelector(".go-up");

function arrowFunction (){

    if (window.scrollY > 700){
            SpanArrow.classList.add("show");
        }else{
            SpanArrow.classList.remove("show");
        }
        SpanArrow.onclick = function(){
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
    }
}
// Start Popup Image 
let ImagesPopup = document.querySelectorAll(".gallery img");

ImagesPopup.forEach(img => {
    img.addEventListener('click', e => {

        // Overlay 
        let overlay = document.createElement("div");
        overlay.className = "overlay";
        // Append Overlay To The Body
        document.body.appendChild(overlay);

        // Add Popup Box
        let popupBox = document.createElement("div");
        popupBox.className= "popup-box";
        
        // Creat The Image 
        let imagePopup = document.createElement('img');
        imagePopup.src = img.src;
        
        // Append All Items To The Body
        overlay.appendChild(popupBox);
        popupBox.appendChild(imagePopup);
        // Close Span 
        let closeSpan = document.createElement("span");
        closeSpan.className = 'close-span';
        let closeSpanText = document.createTextNode('X');
        closeSpan.appendChild(closeSpanText);
        popupBox.appendChild(closeSpan);
    })
})

// Close Popup Span 
document.addEventListener('click', e => {
    if (e.target.className === 'close-span'){
        document.querySelector('.overlay').remove();
    }
})