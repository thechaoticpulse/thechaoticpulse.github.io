let currentPage = 1;

function toggleClass(e, toggleClassName) {
    if (e.className.includes(toggleClassName)) {
        e.className = e.className.replace(' ' + toggleClassName, '');
    } else {
        e.className += ' ' + toggleClassName;
    }
}

function movePage(e, page) {
    if (page == currentPage) {
        currentPage += 2;
        toggleClass(e, "left-side");
        toggleClass(e.nextElementSibling, "left-side");

    }
    else if (page = currentPage - 1) {
        currentPage -= 2;
        toggleClass(e, "left-side");
        toggleClass(e.previousElementSibling, "left-side");
    }

}


particlesJS("particles-js", {"particles":{"number":{"value":400,"density":{"enable":true,"value_area":800}},"color":{"value":"#f0e8e8"},"shape":{"type":"star","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.6313181133058181,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":85.26810729164123,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;