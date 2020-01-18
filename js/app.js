/* SCROLL INDICATOR */
window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-indicator").style.width = scrolled + "%";


    /* SCROLL TO TOP */
    var scrollButton = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollButton.style.opacity = "1";
    } else {
        scrollButton.style.opacity = "0";
    }
}

/* ENABLE MENU MOBILE */
function showMenu() {
    document.querySelector("body > nav").classList.add("displayed");
    if (document.querySelector(".image-3d div")) {
        document.querySelector(".image-3d div").classList.remove("hidden-3d");
        document.querySelector(".image-3d div").classList.add("displayed-3d");
    }

}

function hideMenu() {
    document.querySelector("body > nav").classList.remove("displayed");
    if (document.querySelector(".image-3d div")) {
        document.querySelector(".image-3d div").classList.add("hidden-3d");
        document.querySelector(".image-3d div").classList.remove("displayed-3d");

        setTimeout(function() {
            document.querySelector(".image-3d div").classList.remove("hidden-3d");
        }, 1000);
    }
}

function isEnable() {
	return document.querySelector("body > nav").classList.contains("displayed");
}

document.querySelector(".mobile-bar a").addEventListener("click", showMenu);

document.querySelector("nav > div:first-child > a:first-child").addEventListener('click', hideMenu);

window.onresize = function() {
	if (window.innerWidth > 700 && isEnable()) {
		document.querySelector("body > nav").classList.remove("displayed");
		document.querySelector(".image-3d div").classList.remove("hidden-3d");
		document.querySelector(".image-3d div").classList.remove("displayed-3d");
	}
}

/* DARK MODE */
const toggleSwitch = document.querySelector('.checkbox input[type="checkbox"]');
let currentTheme = 'light';

try {
    currentTheme = localStorage.getItem('theme');
} catch(e) {
    currentTheme = 'light';
}

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        try {
            localStorage.setItem('theme', 'dark');
        } catch(e) {
            console.log('Localstorage impossible')
        }
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        try {
            localStorage.setItem('theme', 'light');
        } catch(e) {
            console.log('Localstorage impossible')
        }
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
