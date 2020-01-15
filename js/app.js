let observer = null;
const spies = document.querySelectorAll('header, article');

const activate = function(element) {
    const id = element.getAttribute('id')
    const anchor = document.querySelector(`a[href="#${id}"]`)
    if (anchor === null)
    {
        return null
    }

    anchor.parent
        .querySelectorAll('.active')
        .forEach(elem => elem.classList.remove('active'))
    anchor.classList.add('active')
}

const callback = function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > 0) {
            activate(entry.target)
        }
    })
}

const observe = function(elems) {
    if (observer !== null)
    {
        elems.forEach(elem => observer.unobserve(elem))
    }
    const y = Math.round(window.innerHeight * 0.6)
    observer = new IntersectionObserver(callback, {
        rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`
    })
    elems.forEach(spy => observer.observe(spy))
}

if (spies.length > 0)
{
    observe(spies)
    window.addEventListener('resize', function() {
        observe(spies)
    })
}

/* SCROLL INDICATOR */
window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-indicator").style.width = scrolled + "%";
}

/* MORE INFO */
document.querySelectorAll(".more-info > a")
.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.target.parentNode.classList.add("displayed")

    })
})

/* ENABLE MENU MOBILE */
let enable = false

document.querySelector(".mobile-bar a").addEventListener("click", function() {
    if (enable) {
        document.querySelector("body > nav").classList.remove("displayed");
        document.querySelector(".image-3d").classList.remove("displayed-3d");
    } else {
        document.querySelector("body > nav").classList.add("displayed");
        document.querySelector(".image-3d").classList.add("displayed-3d");
    }

    enable = !enable;
});

document.querySelector("body > nav > div:first-of-type a").addEventListener("click", function() {
    document.querySelector("body > nav").classList.remove("displayed");
    enable = false;
});


const toggleSwitch = document.querySelector('.checkbox input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);