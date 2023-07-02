
// const carousel = new bootstrap.Carousel('#myCarousel')

// const myCarouselElement = document.querySelector('#myCarousel')
// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 500,
//   wrap: false
// })

// drop down emergency cal
$(document).ready(function(){
    $(".dropdown-toggle").dropdown();

    
});
$(window).scroll(function() {
    let position = $(this).scrollTop();
    console.log(position);
});

// animation effect 
// $(window).scroll(function() {
//     let position = $(this).scrollTop();
//     if(position >= 650) {
//       $('.banner').addClass('anim');
//       $('.mission-text').addClass('fromRight');
//     } else {
//       $('.anin-left').removeClass('fanin-left');
//       $('.mission-text').removeClass('fromRight');
//     }
    
//   });
// $(window).scroll(function() {
//     let position = $(this).scrollTop();
//     console.log(position);
// });



// Pre-loading effect
// let loader=document.querySelector('.loader');

// window.addEventListener("load",vanish);

// function vanish(){
//   loader.classList.add("disppear")
// }







const selectBtn = document.getElementById('selection-btn');
const text = document.getElementById('text');
const option = document.getElementsByClassName('option');

selectBtn.addEventListener('click', function() {
    selectBtn.classList.toggle('active');
}
);
for(option of option){
    option.onclick = function(){
        text.innerHTML = this.textcontent;
    }
}

function validationForm(){
    let x = document.forms["myForm"] ["fname"] ["lname"] ["tel"] ["password"].value;

    if (x == "") {
        alert("Details must be filled out");

        return false;
    }
}