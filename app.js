
var base_url='index.html';

(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "lpogy429g8");

jQuery(document).ready(function() {
      
jQuery('.carousel[data-type="multi"] .item').each(function(){
  var next = jQuery(this).next();
  if (!next.length) {
    next = jQuery(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo(jQuery(this));
  
  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
      next = jQuery(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});
      
});


      document.querySelector(".img__btn").addEventListener("click", function () {
document.querySelector(".cont").classList.toggle("s--signup");
});

     
     

function openForm() {
document.getElementById("myForm").style.display = "block";
}

function closeForm() {
document.getElementById("myForm").style.display = "none";
}



var slideIndex = [1,1,1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);

function plusSlides(n, no) {
showSlides(slideIndex[no] += n, no);
}
function currentSlide(n, no) {
showSlides(slideIndex[no] = n, no);
}
function showSlides(n, no) {
var i;
var x = document.getElementsByClassName(slideId[no]);

if (n > x.length) {slideIndex[no] = 1}    
if (n < 1) {slideIndex[no] = x.length}
for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";  
}
x[slideIndex[no]-1].style.display = "block";  
}


$(document).ready(function () {
$(".popup-btn").click(function () {
  var popupBlock = $("#" + $(this).data("popup"));
  popupBlock
    .addClass("active")
    .find(".fade-out")
    .click(function () {
      popupBlock
        .css("opacity", "0")
        .find(".popup-content")
        .css("margin-top", "350px");
      setTimeout(function () {
        $(".popup").removeClass("active");
        popupBlock
          .css("opacity", "")
          .find(".popup-content")
          .css("margin-top", "");
      }, 600);
    });
});






});



$(document).delegate('.buy-button','click',function(e){
    
          
   var $t=$(this); 
   var link=$t.attr('href');
   var popup=link.replace('#','');
    $('.'+popup+'').css({
 'opacity' : '1',
 'visibility' : 'visible'
});
    
});

  $(document).delegate('.close','click',function(e){
    
      var $t=$(this); 
   var link=$t.attr('href');
   var popup=link.replace('#','');
    $('.'+popup+'').css({
 'opacity' : '0',
 'visibility' : 'hidden'
});
    
});




$(document).delegate('.buy-button','click',function(e){
    
          
   var $t=$(this); 
   var link=$t.attr('href');
   var popup=link.replace('#','');
    $('.'+popup+'').css({
 'opacity' : '1',
 'visibility' : 'visible'
});
    
});

  $(document).delegate('.close','click',function(e){
    
      var $t=$(this); 
   var link=$t.attr('href');
   var popup=link.replace('#','');
    $('.'+popup+'').css({
 'opacity' : '0',
 'visibility' : 'hidden'
});
    
});





  const showDialog = document.getElementById('show-dialog');
const dialog = document.getElementById('dialog-main');
const hideDialog = document.getElementById('close-dialog');

showDialog.addEventListener('click', () => {
dialog.showModal();
});

hideDialog.addEventListener('click', () => {
dialog.close();
});

dialog.addEventListener('click', ( e ) => {
if ( e.target.tagName === 'DIALOG' ) {
  dialog.close();
}
});



  const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup-new");
const cross = popup.querySelector(".popup__close");

function openPopup() {
overlay.addEventListener("click", closePopup);
cross.addEventListener("click", closePopup);
overlay.classList.add("overlay_visible");
popup.classList.add("popup_visible");
}

openPopup();

function closePopup() {
overlay.classList.remove("overlay_visible");
popup.classList.remove("popup_visible");
document.body.classList.remove("body_blur");
overlay.removeEventListener("click", closePopup);
cross.removeEventListener("click", closePopup);
}

// Опросник
const quizes = document.querySelectorAll(".quiz");
const questions = document.querySelectorAll(".popup__content");

quizes.forEach((quiz) => {
const options = quiz.querySelectorAll(".quiz__input");
const nextButton = quiz.querySelector(".popup__button");
options.forEach((option) => {
  option.addEventListener("click", () => {
    nextButton.disabled = false;
  });
});
});

questions.forEach((question, i) => {
const button = document.getElementById(`popupButton${i + 1}`);
button.addEventListener("click", () => {
  question.classList.remove("question-visible");
  if (questions[i + 1]) {
    questions[i + 1].classList.add("question-visible");
  }
});
});

let popupClosed = false;

function closePopup() {
  document.getElementById('popup-new').style.display = 'none';
  popupClosed = true;
}

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1300 && !popupClosed) {
      $('.popup-new').fadeIn();
  } 

});



var mpopup = document.getElementById('mpopupBox');

// Select trigger link
var mpLink = document.getElementById("mpopupLink");

// Select close action element
var close = document.getElementsByClassName("bit-coin-close")[0];

// Open modal once the link is clicked
mpLink.onclick = function() {
  mpopup.style.display = "block";
};

// Close modal once close element is clicked
close.onclick = function() {
  mpopup.style.display = "none";
};

// Close modal when user clicks outside of the modal box
window.onclick = function(event) {
  if (event.target == mpopup) {
      mpopup.style.display = "none";
  }
};

const selectedAll = document.querySelectorAll(".wrapper-dropdown");

selectedAll.forEach((selected) => {
const optionsContainer = selected.children[2];
const optionsList = selected.querySelectorAll("div.wrapper-dropdown li");

selected.addEventListener("click", () => {
let arrow = selected.children[1];

if (selected.classList.contains("active")) {
handleDropdown(selected, arrow, false);
} else {
let currentActive = document.querySelector(".wrapper-dropdown.active");

if (currentActive) {
let anotherArrow = currentActive.children[1];
handleDropdown(currentActive, anotherArrow, false);
}

handleDropdown(selected, arrow, true);
}
});

// update the display of the dropdown
for (let o of optionsList) {
o.addEventListener("click", () => {
selected.querySelector(".selected-display").innerHTML = o.innerHTML;
});
}
});

// check if anything else ofther than the dropdown is clicked
window.addEventListener("click", function (e) {
if (e.target.closest(".wrapper-dropdown") === null) {
closeAllDropdowns();
}
});

// close all the dropdowns
function closeAllDropdowns() {
const selectedAll = document.querySelectorAll(".wrapper-dropdown");
selectedAll.forEach((selected) => {
const optionsContainer = selected.children[2];
let arrow = selected.children[1];

handleDropdown(selected, arrow, false);
});
}

// open all the dropdowns
function handleDropdown(dropdown, arrow, open) {
if (open) {
arrow.classList.add("rotated");
dropdown.classList.add("active");
} else {
arrow.classList.remove("rotated");
dropdown.classList.remove("active");
}
}



/*Quiz Enquiry phone starts*/



var quiz_phone = document.querySelector("#quiz_phone");
window.intlTelInput(quiz_phone, {
allowDropdown: true,
// autoHideDialCode: false,
autoPlaceholder: "on",
// dropdownContainer: document.body,
// excludeCountries: ["us"],
// formatOnDisplay: false,
// geoIpLookup: function(callback) {
//   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
//     var countryCode = (resp && resp.country) ? resp.country : "";
//     callback(countryCode);
//   });
// },
// hiddenInput: "full_number",
initialCountry: "ae",
customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
                // Return only the country name without the country code
                return selectedCountryData.name;
            },
// localizedCountries: { 'de': 'Deutschland' },
nationalMode: true,
// onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
// placeholderNumberType: "MOBILE",
preferredCountries: ['ae'],
separateDialCode: true,
utilsScript: "js/utils.js",
});



/*Quiz Enquiry phone ends*/
$(".Click-here").on('click', function() {
$(".custom-model-main").addClass('model-open');
}); 
$(".close-btn, .bg-overlay").click(function(){
$(".custom-model-main").removeClass('model-open');
});


var swiper = new Swiper(".slide-container", {
slidesPerView: 3,
spaceBetween: 20,
sliderPerGroup: 3,
loop: true,
centerSlide: "true",
fade: "true",
grabCursor: "true",
pagination: {
el: ".swiper-pagination",
clickable: true,
dynamicBullets: true,
},
navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},

breakpoints: {
0: {
  slidesPerView: 1,
},
520: {
  slidesPerView: 2,
},
768: {
  slidesPerView: 3,
}
},
});


    function initializeTabContainer(tabContainer) {
        const tabButtons = tabContainer.querySelectorAll('.tab-button');
        const tabBackground = tabContainer.querySelector('.tab-background');
        const tabContentContainer = tabContainer.nextElementSibling;
        const tabItems = tabContentContainer.querySelectorAll('.ta-tab-item');
        let currentActiveTab = 0;

        function setActiveTab(newTabIndex) {
            const currentTab = tabButtons[currentActiveTab];
            const newTab = tabButtons[newTabIndex];
            
            tabButtons.forEach(button => button.classList.remove('active'));
            newTab.classList.add('active');

            tabItems.forEach(item => {
                if (item.dataset.tab == newTab.dataset.tab) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });

            const currentRect = currentTab.getBoundingClientRect();
            const newRect = newTab.getBoundingClientRect();
            const containerRect = tabButtons[0].parentElement.getBoundingClientRect();

            if (newTabIndex > currentActiveTab) {
                // Moving right
                tabBackground.style.width = `${newRect.right - currentRect.left}px`;
                tabBackground.style.left = `${currentRect.left - containerRect.left}px`;
                
                setTimeout(() => {
                    tabBackground.style.width = `${newRect.width}px`;
                    tabBackground.style.left = `${newRect.left - containerRect.left}px`;
                }, 150);
            } else {
                // Moving left
                tabBackground.style.width = `${currentRect.right - newRect.left}px`;
                tabBackground.style.left = `${newRect.left - containerRect.left}px`;
                
                setTimeout(() => {
                    tabBackground.style.width = `${newRect.width}px`;
                }, 150);
            }

            currentActiveTab = newTabIndex;
        }

        tabButtons.forEach((button, index) => {
            button.addEventListener('click', () => setActiveTab(index));
        });

        // Initialize the first tab as active
        setActiveTab(0);
    }

    // Initialize all tab containers
    document.querySelectorAll('.tab-container').forEach(initializeTabContainer);




$(".slick").slick({
dots: true,
arrows: true,
infinite: true,
speed: 300,
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true, // Enable autoplay
autoplaySpeed: 2000, // Duration between slides in milliseconds
responsive: [
{
  breakpoint: 1024,
  settings: {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: true
  }
},
{
  breakpoint: 600,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2
  }
},
{
  breakpoint: 480,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1
  }
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});



document.addEventListener('DOMContentLoaded', () => {
const filterButton = document.getElementById('filter-div-button');
const filterDiv = document.getElementById('filter-main-id');
const closeButton = document.getElementById('close-button');

filterButton.addEventListener('click', () => {
    filterDiv.style.display = filterDiv.style.display === 'block' ? 'none' : 'block';
});

closeButton.addEventListener('click', () => {
    filterDiv.style.display = 'none';
});
});

