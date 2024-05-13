$( document ).ready(function() {
    scrollHeader();
});
function scrollHeader() {
    let height = $('.header').height();
    let nav;
    
    function initializeScrollTrigger() {
        nav = gsap.from('header', {
            y: '-' + height,
            paused: true,
            duration: 0.25,
            trigger: 'header',
        }).progress(1);

        ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onUpdate: (self) => {
                // Shrink nav
                self.direction === -1 ? nav.play() : nav.reverse();

                // Toggle class to detect on scroll
                self.direction === 1 ? $('.header__logo').addClass('navbar--scroll') : '';
                self.progress === 0 ? $('.header__logo').removeClass('navbar--scroll') : '';
                self.refresh();
            },
        });
        // if(window.screenY == 0){
        //     $('.header__logo').removeClass('navbar--scroll');
        // }
    }

    initializeScrollTrigger();

    // Re-initialize ScrollTrigger when page is refreshed
    $(window).on('load', initializeScrollTrigger);
}
