$(document).ready(() => {
    if(localStorage.getItem("accept") != "true"){
        $("#cardie").css("display", "inline")
    }
    
    AOS.init();
    
    particlesJS.load('particles-js', 'assets/particles.json', () => {});
    
    $("#accept").click(()=> {
        $("#cardie").addClass("fade")
        $("#cardie").css("display", "none")
        localStorage.setItem("accept","true");
    })

    let scrollAnime = () => {
        var v2 = Math.abs($('#bizeulasin').position().top - $(window).height()/2);
        var v1 = $(this).scrollTop();
            if( v1 > v2 ){
                $(".img1").addClass("anim1")
                $(".img2").addClass("anim2")
                $(".img3").addClass("anim3")
            }
    }
    
    $(document).scroll((evt) => {
        scrollAnime()
    });
    scrollAnime()
});