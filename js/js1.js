(function( ){
    var preload=document.getElementById("preload");
    var loading=0;
    var id=setInterval(frames, 64);
    
    function frames(){
        if(loading==100){
            clearInterval(id)
            window.open("menu.html", "_self");
        }else{
            loading=loading +1;
            if(loading==90){
                preload.style.animation= "fadeout is ease";
            }
        }
    }
})();