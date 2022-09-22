// function makeSearchXDisplay(){
//     if (window.matchMedia("(max-width: 850px)")).matches{     
//     document.getElementById("cancelsearch").style.visibility ="visible";
//     document.getElementById("search").style.outline ="solid";
//     document.getElementById("search").style.width ="90%";
//     document.getElementById("search").style.position ="absolute";
//     document.getElementById("search").style.backgroundColor ="white";
//     document.getElementById("search").style.marginLeft ="0";
//     document.getElementById("search").style.marginRight ="auto";
//     document.getElementById("searchinput").style.width ="80%";
//     document.body.backgroundColor = "blue";}
    
//     else{
//         document.body.backgroundColor = "orange";}
//     }

// }

// function makeSearchXnon(){
//     document.getElementById("cancelsearch").style.visibility ="hidden";
//     document.getElementById("search").style.outline ="none";
//     document.getElementById("search").style.width ="45%";
//     document.getElementById("search").style.position ="static";
//     document.getElementById("search").style.backgroundColor ="rgba(226, 226, 226, 0.6)";
//     document.getElementById("search").style.marginLeft ="0";
//     document.getElementById("search").style.marginRight ="10px";
//     document.getElementById("searchinput").style.width ="45%";
//     document.body.backgroundColor = "blue";
// }
    

function makeNavAppear() {
    document.getElementById("sidebar").style.width = "330px";
    document.getElementById("sidebar").style.height = "100%";
    document.getElementById("sidebar").style.visibility = "visible";
    document.getElementById("nav").style.position = 'static';
    document.getElementById("kart-categories").style.position = 'static';

}
function makeNavDissapear() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar").style.height = "100%";
    document.getElementById("sidebar").style.visibility = "hidden";
    document.getElementById("nav").style.position = 'sticky';
    document.getElementById("kart-categories").style.position = 'sticky';
}



