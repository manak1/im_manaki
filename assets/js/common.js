$(function () {


    $(window).load(function () {

        new fullpage('#fullPage', {
            autoScrolling: true,
            navigation: true,
            navigationPosition: 'left',
        })

        $('#loader').slideUp(700, 'easeInQuint');
        let scene = document.getElementById('demo');
        let parallaxINstance = new Parallax(scene);






        var test1 = anime({
            targets: '.main__sun-img',
            loop: false,
            easing: 'easeOutCubic',
            opacity: [0, 1],
            translateX: ['100%', 0],
            translateZ: 0,
            duration: 850,
            delay: function (el, i) {
                return 500 + 50 * i
            }
        });



    })


})