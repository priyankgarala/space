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
        start: "top -5%",
        end:"top -70%",
        scrub:2
    }
})
gsap.from("#finpage1,#finapage2,",{
    y:50,
    opacity:0,
    duration:2,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#finpage1",
        scroller:"body",
        //markers:true,
        start:"top 30%",
        end:"top 70%",
        scrub:3,
    }
})
