var targetpos=1000;
var currentpos=0;

var scroll=setInterval(function(){
    if(currentpos>=targetpos){
        clearInterval(scroll);
        return

    }
    currentpos+=50;
    window.scrollBy(0,50);
},50);