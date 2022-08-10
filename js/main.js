$(window).on("load",function(){
    /*----- Preloader -----*/ 
    $(".preloader").fadeOut("slow");
});

$(document).ready(function () {

    /*----- Navbar Shrink -----*/
    $(window).on("scroll",function(){
        if($(this).scrollTop() > 70){
            $(".navbar").addClass("navbar-shrink");
            $(".navbar-brand").removeClass("d-lg-none");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
            $(".navbar-brand").addClass("d-lg-none");
        }
    });

    /*----- Video Popup -----*/
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function () {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src", "");
        }
        else {
            $(".video-popup").addClass("open");
            if ($("#player-1").attr("src") == '') {
                $("#player-1").attr("src", videoSrc);
            }
        }
    });

    /*----- Features Carousel -----*/
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    /*----- Screenshots Carousel -----*/
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
        }
    })

     /*----- Testimonials Carousel -----*/
     $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    /*----- Team Carousel -----*/
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    /*----- Page Scroll -----*/
    $.scrollIt({
        topOffset: -50
    });

     /*----- Navbar Collapse -----*/
     $(".nav-link").on("click", function(){
        $(".navbar-collapse").collapse("hide");
     });

     /*----- Toggle Theme -----*/
     function toggleTheme(){
         if(localStorage.getItem("mitratani-theme") !== null){
            if(localStorage.getItem("mitratani-theme") === "dark"){
                $("body").addClass("dark");
            }
            else{
                $("body").removeClass("dark");
            }
         }
        updateIcon();
    }
    toggleTheme();

    $(".toggle-theme").on("click", function(){
       $("body").toggleClass("dark");
       if($("body").hasClass("dark")){
           localStorage.setItem("mitratani-theme","dark")
       }
       else{
           localStorage.setItem("mitratani-theme","light")
       }  
       updateIcon();      
    });

    function updateIcon(){
        if($("body").hasClass("dark")){
           $(".toggle-theme i").removeClass("fa-moon");
           $(".toggle-theme i").addClass("fa-sun");
        }
        else {
           $(".toggle-theme i").removeClass("fa-sun");
           $(".toggle-theme i").addClass("fa-moon");
        }
    }

    //Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

});