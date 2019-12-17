var options = {
    root: null,
    rootMargin: '0px',
    threshod: 0.25
};



var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        console.log(entry.intersectionRatio)
    })
}, options);

window.addEventListener("load", function(event) {
    var target = document.querySelector("#observer");
    observer.observe(target);
}, false)