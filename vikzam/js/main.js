var wow = new WOW(
    {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       80,          // distance to the element when triggering the animation (default is 0)
        mobile:       false,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    }
);
wow.init();
$(function () {
        var buttonUp = document.querySelector('.scroll-top');
        function debounce(ms, cb) {
                var timeout = null;
                return function () {
                        if (timeout) clearTimeout(timeout);
                        timeout = setTimeout(cb, ms);
                }
        }
        function onDocumentScroll(event) {
                if (window.pageYOffset >= 500) {
                        buttonUp.classList.add('shown')
                } else {
                        buttonUp.classList.remove('shown')
                }
        }
        function onButtonUpClick(event) {
                document.body.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'start'
                });
        }
        document.addEventListener('scroll', onDocumentScroll);
        buttonUp.addEventListener('click', onButtonUpClick);
});