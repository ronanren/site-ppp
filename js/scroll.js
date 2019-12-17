$(document).ready(function () {
    $('#pagepiling').pagepiling({
        sectionsColor: ['#fff', '#0054fc', '#fff', '#0054fc', '#fff'],
        scrollingSpeed: 300,
        navigation: {
            'textColor': '#000', // modifier couleur selon le fond
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': [document.title, document.querySelector("h3").textContent, document.querySelectorAll("h3")[1].textContent,
                document.querySelectorAll("h3")[2].textContent
            ]
        },
        // tableau avec chaque h3 puis un for each
        afterLoad: function (anchorLink, index) {
            document.getElementById("myBar").style.width = (index * 100 / 4) + "%";
        }
    });
});