$( document ).ready(function() {
    //if (window.PointerEvent) {
        if($('.viewport').width()){
            var image = $('#image')[0];
            var progress;
            var width = $('.viewport').width();
            var isMove = false;


            image.addEventListener("pointerdown", function(e) {
                console.log('pointerdown');
               $('.image').css("pointer-events","none");
                isMove=true;
                image.setPointerCapture(e.pointerId);
            });

            image.addEventListener('pointerup',function (e) {
                $('.image').css("pointer-events","auto");
                console.log('lost');
                isMove = false;
            });

            image.addEventListener("pointermove", function(e) {
                if (e.pageX >0 && e.pageX < width && isMove) {
                    $('#image').css("right", e.pageX);
                    progress = e.pageX * 100 / width;
                    console.log(progress);
                    $(".move-progress").css("width", progress + "%");
                    console.log(e);
                }
            });
            //
            // image.addEventListener("pointerup", function(e) {
            //     console.log('pointerup');
            //     $('.image').css("pointer-events","none");
            // });

            // image.addEventListener("pointermove", function(e) {
            //     if(e.pageX<width){
            //         $('#image').css("right",e.pageX);
            //         progress = e.pageX*100/width;
            //         console.log(progress);
            //         $(".move-progress").css("width", progress+"%");
            //         console.log(e);
            //     }
            // });image.addEventListener("pointermove", function(e) {
            //     if(e.pageX<width){
            //         $('#image').css("right",e.pageX);
            //         progress = e.pageX*100/width;
            //         console.log(progress);
            //         $(".move-progress").css("width", progress+"%");
            //         console.log(e);
            //     }
            // });
        //}
    }



});