let img= document.querySelector('img');
let icon= document.querySelector('i');

img.addEventListener("dblclick",function(){
    icon.style.opacity=0.8;
    icon.style.color="red";
    icon.style.transition="1.5s";
    setTimeout(function(){
        icon.style.opacity=0;
    },1000)
})