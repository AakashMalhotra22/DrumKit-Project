
var a = document.getElementsByTagName("button");
for( let i=0;i<7;i++)
{
    a[i].addEventListener("click",function()
    {
        makesound(this.innerHTML);
        makeflash(this.innerHTML);
    });
    
}
document.addEventListener('keydown',function(event){
    makesound(event.key);
    makeflash(event.key);
}
)

function makeflash(key)
{
    let bt = document.querySelector("."+key);
    bt.classList.add("pressed");
    setTimeout(function(){
        bt.classList.remove("pressed");
    },100);

}


function makesound(key)
{
    var audio;
    if(key=='w')
    {
        audio = new Audio("sounds/crash.mp3");
    }
    else if(key=='a')
    {
        audio = new Audio("sounds/kick-bass.mp3");
    }
    else if(key=='s')
    {
        audio = new Audio("sounds/snare.mp3");
    }
    else if(key=='d')
    {
        audio = new Audio("sounds/tom-1.mp3");
    }
    else if(key=='j')
    {
        audio = new Audio("sounds/tom-2.mp3");
    }
    else if(key=='k')
    {
        audio = new Audio("sounds/tom-3.mp3");
    }
    else if(key=='l')
    {
        audio = new Audio("sounds/tom-4.mp3");
    }
    audio.play();
    
}