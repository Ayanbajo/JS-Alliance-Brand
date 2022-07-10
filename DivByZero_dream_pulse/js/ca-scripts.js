var customerName = "Alliance";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
        let tmheader = document.getElementById('tm-header')
        tmheader.textContent = customerName;
    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->
        let introheader = document.getElementById('introheader')
        introheader.textContent = customerName;
};

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    let blue = document.querySelectorAll('.tm-white-rect');
    for (i = 0; i < blue.length; ++i) {
        blue[i].classList.add('tm-blue-rect');
        blue[i].classList.remove('tm-white-rect');
    }
};

function hideElement() {
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
    let social = document.querySelector('tm-social-links');
    social.style.visibility = "none";
};

 function addText() {
   
    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->
    let ipara1 = document.getElementById('intropara1')
    ipara1.textContent = "Alliance was founded in 1931 by Albert Daniels."
    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->
    let ipara2 = document.getElementById('intropara2')
    ipara2.textContent = "The company is a leader in P.C. Manufacturing."
     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->
     let apara1 = document.getElementById('aboutpara1')
     apara1.textContent = "We deliver the best service this side of creation."
    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->
     let apara2 = document.getElementById('aboutpara2')
     apara2.textContent = "Our motto is satisfaction guaranteed."
    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->
    let adpara2 = document.getElementById('addresspara')
    adpara2.textContent = "1-800-565-5656"
}; 



