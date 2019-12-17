$(document).ready(function() {
    $('#pagepiling').pagepiling({
        sectionsColor: ['#fff', 'blue', '#fff', 'blue', '#fff'],
        scrollingSpeed: 300
    });
});

window.onscroll = function() { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    
}