for(var i=0 ; i<7 ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",clicker);
     

    makeSound(this.innerHTML);
};


document.addEventListener("keypress",function(event){
      makeSound(event.key);
});


function makeSound(key){
    if(key=="w")
    {  var audio = new Audio("sounds/tom-1.mp3");
         audio.play();      
    }
    else if(key=="a")
    {  var audio = new Audio("sounds/tom-2.mp3");
         audio.play();      
    }
    else if(key=="s")
    {  var audio = new Audio("sounds/tom-3.mp3");
         audio.play();      
    }    
    else if(key=="d")
    {  var audio = new Audio("sounds/tom-4.mp3");
         audio.play();      
    }    
    else if(key=="j")
    {  var audio = new Audio("sounds/crash.mp3");
         audio.play();      
    }
    else if(key=="k")
    {  var audio = new Audio("sounds/kick-bass.mp3");
         audio.play();      
    }
    else if(key=="l")
    {  var audio = new Audio("sounds/snare.mp3");
         audio.play();      
    }
}

 function clicker() {

      
    if(this.innerHTML=="w")
    {  var audio = new Audio("sounds/tom-1.mp3");
         audio.play();      
    }
    else if(this.innerHTML=="a")
    {  var audio = new Audio("sounds/tom-2.mp3");
         audio.play();      
    }
    else if(this.innerHTML=="s")
    {  var audio = new Audio("sounds/tom-3.mp3");
         audio.play();      
    }    
    else if(this.innerHTML=="d")
    {  var audio = new Audio("sounds/tom-4.mp3");
         audio.play();      
    }    
    else if(this.innerHTML=="j")
    {  var audio = new Audio("sounds/crash.mp3");
         audio.play();      
    }
    else if(this.innerHTML=="k")
    {  var audio = new Audio("sounds/kick-bass.mp3");
         audio.play();      
    }
    else if(this.innerHTML=="l")
    {  var audio = new Audio("sounds/snare.mp3");
         audio.play();      
    }

 }    