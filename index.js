var noofsound=document.querySelectorAll(".drum").length;

for(var i=0;i<noofsound;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){ 
   
    var playsound=this.innerHTML;
    soundforall(playsound);
    buttonAnimation(playsound);



    });
}

// code for key
document.addEventListener("keypress",function(event){
var key=event.key;
soundforall(key);
buttonAnimation(key);
});




function soundforall(playsound){
 switch(playsound){
    case "w":
        var audio=new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
    case "a":
        var audio=new Audio('sounds/tom-2.mp3');
        audio.play();
         break; 
    case "s":
        var audio=new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
    case "d":
        var audio=new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
    case "j":
        var audio=new Audio('sounds/crash.mp3');
        audio.play();
        break;    
    case "k":
        var audio=new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;    
    case "l":
        var audio=new Audio('sounds/snare.mp3');
        audio.play();
        break;   
        default:
            console.log(playsound);

}
}


// Animation

function buttonAnimation(currentkey)
{
var activekey=document.querySelector("." + currentkey);
activekey.classList.add("pressed");

setTimeout(function(){
    activekey.classList.remove("pressed");
},100);

}
