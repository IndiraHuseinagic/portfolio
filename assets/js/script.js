const header = document.querySelector("#main-nav"),
  about = document.querySelector("#about"),
  portfolio = document.querySelector("#portfolio"),
  contact = document.querySelector("#contact"),
  btnUp = document.querySelector("#btnTop"),
  logo = document.querySelector(".navbar-brand");

var  aboutYPos = about.getBoundingClientRect().y-400,
     portfolioYPos = portfolio.getBoundingClientRect().y-1000;
     contactYPos = contact.getBoundingClientRect().y-700;
   
//**********************SCROLL*************************
document.addEventListener('scroll', () => {

  var scroll_position = window.scrollY;
 
  //Initial style
  header.style.backgroundColor = 'transparent';
  btnUp.style.display = "none";
  logo.style.display = "none";

  if (scroll_position > 10) {

    //style after first scroll
    header.style.backgroundColor = '#2a323c';
    btnUp.style.display = "block";
    logo.style.display = "inline";
  }

  //animation take effect when we scroll to that section
  if (scroll_position >= aboutYPos) {
    about.classList.add("about-active")    
  }
    if (scroll_position >= portfolioYPos) {
    portfolio.classList.add("portfolio-active")
  }
    if (scroll_position >= contactYPos) {
    contact.classList.add("contact-active")
  }
});

// Go to the top 
$(btnUp).click(function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//**********************SUBMIT*************************
// Send Email from Contact Me Form
(function() {emailjs.init("user_BaOCdXuYxeh7WUDI7Fo7r")})();
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      // these IDs from the previous steps
      emailjs.sendForm('contact_service', 'contact_form', this)
          .then(
               function() {
                $('.successModal').show();
                $('#contact-form').find('input[type=text], input[type=email], textarea').val('');
            }, function() {
              error.style.display = "block";
              $('.errorModal').show();
            });   
  });
}

  // Button to close modal for message sent
  $('.close-success').click(function () {
      $('.successModal').hide();
  });

  // Button to close modal for message not sent 
  $('.close-error').click(function () {
      $('.errorModal').hide();
  });

  // Modal closes when backdrop is clicked
  $('.mmodal-backdrop').click(function () {
      $('.successModal').hide();
      $('.errorModal').hide();
   });


//*****************Navbar CLICK************************
//hide navbar after click
$(document).click(function () {
  $('.navbar-collapse').collapse('hide');
});

//*********************TOOLTIP*************************
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//**************SELECT LANGUAGE************************
$(document).ready(function() {

  var selectedLanguage =  $("select.language").children("option:selected").val();
    if(selectedLanguage==="EN") {
      $('.en').show();     
      $('.de').hide();
    }
    if(selectedLanguage==="DE") {
      $('.de').show();
      $('.en').hide();
    }
  $("select.language").change(function(){
    var selectedLanguage = $(this).children("option:selected").val();
    if(selectedLanguage==="EN") {
      $('.en').show();     
      $('.de').hide();
    }
    if(selectedLanguage==="DE") {
      $('.de').show();
      $('.en').hide();
    }
});

})