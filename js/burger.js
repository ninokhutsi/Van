$(document).ready(function(){
    $(".burger").on("click", function(e){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }else{
            $(this).addClass("active");
        };

        if($("#navigation-list").hasClass("active")){
            $("#navigation-list").removeClass("active");
        }else{
            $("#navigation-list").addClass("active")
        }
    })


})