var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-250+"px"
    blur.style.top=dets.y-250+"px"
})

gsap.to("#nav",{
    backgroundColor:"#080808",
    height:"100px",
    duration:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        scrub:2,
        
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        //markers:true,
        start: "top -30%",
        end:"top -70%",
        scrub:2
    }
})
gsap.from("#about-us,aboutusin",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        //markers:true,
        start:"top 60%",
        end:"top 65%",
        scrub:3,
    }
})
gsap.from(".card",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
       // markers:true,
        start:"top 60%",
        end:"top 70%",
        scrub:3,
    }
})

gsap.from("#social",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#social",
        scroller:"body",
       // markers:true,
        start:"top 60%",
        end:"top 70%",
        scrub:3,
    }
})