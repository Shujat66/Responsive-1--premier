var menu=document.querySelector("#nav h4 i");
var cross=document.querySelector("#full i");
var tl=gsap.timeline();

tl.to("#full",{
    right:0,
    duration:0.75 
})
tl.from("#full h4",{
    x:200,
    duration:0.8,
    opacity:0,
    stagger:0.3
})
tl.from("#full i",{
    opacity:0,
    duration:0.4
})

tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})
cross.addEventListener("click",function(){
    tl.reverse()
})