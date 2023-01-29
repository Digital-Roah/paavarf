$('.toggle-btn').click(function() {
    $(this).toggleClass('opened');
    if($(this).hasClass('opened')) {
     $(this).css('margin-top', '10px');
     $('.navbar-brand').css('margin-top', '10px');
    } else {
     $(this).css('margin-top', '0px');
     $('.navbar-brand').css('margin-top', '0px');
    }
 });

 //Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('static', $(this).scrollTop() > $nav.height());
    });
});