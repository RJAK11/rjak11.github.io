$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >  20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    })
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });
    $('.menu li').click(function(){
        $('.navbar .menu').toggleClass("active");
    });
});


// Get the modal
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('myImg1');
var img2 = document.getElementById('myImg2');
var img3 = document.getElementById('myImg3');

img1.onclick = function(){
    modal1.style.display = "block";
    modal2.style.display = "none";
    modal3.style.display = "none";
}
img2.onclick = function(){
    modal1.style.display = "none";
    modal2.style.display = "block";
    modal3.style.display = "none";
}
img3.onclick = function(){
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "block";
}


 //Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");


//When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
  modal1.style.display = "none";
}
span[1].onclick = function() {
    modal2.style.display = "none";
}
span[2].onclick = function() {
    modal3.style.display = "none";
}
