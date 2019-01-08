var t = 0;
function setBackground(){
    switch (t%4){
        case 0 : {
            $(html).css("background-image","url(../img/gb_img1.jpg)");
            break;
        }
        case 1 : {
            $(html).css("background-image","url(../img/gb_img2.jpg)");
            break;
        }
        case 2 :{
            $(html).css("background-image","url(../img/gb_img3.jpg)");
            break;
        }
        case 3 : {
            $(html).css("background-image","url(../img/gb_img4.jpg)");
            break;
        }       
    }
    t = setTimeout(function(){
        setBackground();
    },3000);
}