$(document).ready(function() {
	$('#pagepiling').pagepiling({
        sectionsColor: ['#fff', '#0054fc', '#fff', '#0054fc', '#fff'],
        scrollingSpeed: 300,
        navigation: {
            'textColor': '#000', // modifier couleur selon le fond
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': [document.title, document.querySelector("h3").textContent, document.querySelectorAll("h3")[1].textContent, 
            			document.querySelectorAll("h3")[2].textContent]}
            // tableau avec chaque h3 puis un for each
    });
});

window.onscroll = function() { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    
}

