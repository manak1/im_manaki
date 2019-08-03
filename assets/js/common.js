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



    })


})