$(function(){
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) { 
            $back_to_top.addClass('cd-fade-out');
        }
    });
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    $("#sj-nav-search").hide();
        $(".sj-search .sbtn2").removeClass("cur");
    });
    /*手机滑动展开搜索*/
    var startY, moveY;
    document.body.addEventListener('touchstart', function(e) {
        startY = e.changedTouches[0]['screenY'];
    }, false);
    document.body.addEventListener('touchmove', function(e) {
        moveY = e.changedTouches[0]['screenY'];
        if (moveY-startY>20) {
            console.log("move down");
            $("#sj-nav-search").hide();
            $(".sj-search .sbtn2").removeClass("cur");
        }else if (moveY-startY<20) {
            console.log("move up");
            $("#sj-nav-search").show();
            $(".sj-search .sbtn2").addClass("cur");
        }
    }, false);
    

});