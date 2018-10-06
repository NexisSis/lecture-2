$( document ).ready(function() {
    if($('.viewport').width()){
        var image = $('#image')[0];
        var progress;
        var width = $('.viewport').width();
        image.addEventListener("pointermove", function(e) {
            if(e.pageX<width){
                $('#image').css("right",e.pageX);
                progress = e.pageX*100/width;
                console.log(progress);
                $(".move-progress").css("width", progress+"%");
                console.log(e);
            }
        });
    }

});