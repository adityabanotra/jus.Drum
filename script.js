
window.addEventListener('keydown', function(e){
    var t=e.keyCode;
    var audio = document.getElementById(t);
    if(!audio)
    return;
    audio.currentTime=0;
    audio.play();
    let button = document.getElementById(t*10);
    console.log(button);
    button.style.transform = 'scale(1.3)';
    button.style.boxShadow="0px 0px 20px yellow";
    button.style.borderColor="yellow";
    setTimeout(function(){ button.style.transform="scale(1)"; 
    button.style.boxShadow='none';
     },50);
    
});

var buttons=document.getElementsByClassName('button');

for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function(){

    var k = this.getAttribute('data-key');
    console.log(k);

    var audio = document.getElementById(k);
    if(!audio)
    return;
    audio.currentTime=0;
    audio.play();

    this.style.transform= 'scale(1.3)';
    this.style.boxShadow="0px 0px 20px yellow";
    this.style.borderColor='yellow';
    var a=this;
    setTimeout(function(){ a.style.transform="scale(1)";
    a.style.boxShadow='none';
   },50);
    });
    
}


