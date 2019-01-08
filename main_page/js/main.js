var indexNow = 1;
var info_sum = 2;

var hamburgerOpen=new Boolean(false);

$( document ).ready(function() {
    changeBody(1);

    $('.hamburger').click(
        
        function(){
            if(!hamburgerOpen){
                $("header").css("height","190px");
                $(".menu").css("display","block");
                hamburgerOpen=true;
            }
            else{
                $("header").css("height","0px");
                $(".menu").css("display","none");
                hamburgerOpen=false;
            }
        }  
    );
});

function buttonInput(In){
    indexNow+=In;

    if(indexNow<1) indexNow = info_sum;
    else if(indexNow>info_sum) indexNow=1;

    changeBody(indexNow);
}

function changeBody(index) { 
    $(".intro_item").hide(); 
    $("#intro_info"+index).show(300); 
} 




