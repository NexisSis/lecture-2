$( document ).ready(function() {
    //if (window.PointerEvent) {
        if($('.viewport').width()){
            var image = $('#image')[0];
            var progress;
            var width = $('.viewport').width();
            var isMove = false;
           // var pointerDown,pointerUp;

            image.addEventListener("pointerdown", function(e) {
                //console.log('pointerdown');
               $('.image').css("pointer-events","none");
                isMove=true;
                image.setPointerCapture(e.pointerId);
                pointerDown = e.pageX;
            });

            image.addEventListener('pointerup',function (e) {
                $('.image').css("pointer-events","auto");
              //  console.log('lost');
                isMove = false;
                //pointerUp = e.pageX;
            });

            image.addEventListener("pointermove", function(e) {
                if (e.pageX >0 && e.pageX < width && isMove) {
                    $('#image').css("right", e.pageX);
                    progress = e.pageX * 100 / width;
                   // console.log(progress);
                    $(".move-progress").css("width", progress + "%");
                    $(".test").text("X = " + e.pageX);
                    console.log(e);
                }
            });
    }
});