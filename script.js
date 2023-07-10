function init(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#back"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#back", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#back").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  }
  
init()


gsap.to("#video-cntr",{
    transform: "translate(-50%,-50%)",
    scrollTrigger:{
        trigger:"#main",
        scroller:"#back",
        // markers:true,
        start:"top 65%",
        end:"top -4%",
        scrub:5,
    }
})


gsap.to("#holdr1, #holdr2",{
    top:"50%",
    transform: "translate(0,-50%)",
    scrollTrigger:{
        trigger:"#main",
                scroller:"#back",
        // markers:true,
        start:"top 65%",
        end:"top -4%",
        scrub:5,
    }
})

var loader= gsap.timeline()
loader.to("#video-cntr",{
    scrollTrigger:{
        trigger:"#main",
                scroller:"#back",
        // markers:true,
        start:"top top",
        scrub:3,
        pin:'#main'
    },
    width:"100%",
    height:"100%"
})
loader.to("#video-cntr h1",{
    // top:"-100%",
    opacity:0,
    scrollTrigger:{
        trigger:"#main",
                scroller:"#back",
        start:"top top",
        end:"top 0%",
        scrub:3,
    },
},"=8")
loader.to("#video-cntr h2",{
    bottom:"50%",
    transform: "translate(-50%,50%)",
    scrollTrigger:{
        trigger:"#main",
                scroller:"#back",
        // markers:true,
        start:"top top",
        end:"top -100%",
        scrub:1,
    },
},"=55")

gsap.to("#video-cntr h1",{
    top:"2%",
    scrollTrigger:{
        trigger:"#main",
                scroller:"#back",
        // markers:true,
        start:"top 45%",
        end:"top 10%",
        scrub:3,
    }
})

gsap.to("#one",{
    scrollTrigger:{
        trigger:"#main",
                scroller:"#back",
        // markers:true,
        start:"top top",
        scrub:3,
    },
    left:"-600px",
    opacity:0
})

gsap.to("#holdr1",{
    scrollTrigger:{
        trigger:"#main",
                scroller:"#back",
        // markers:true,
        start:"top top",
        scrub:3,
    },
    left:"-300px",
    opacity:0
})

gsap.to("#six",{
    scrollTrigger:{
        trigger:"#main",
                scroller:"#back",
        // markers:true,
        start:"top top",
        scrub:3,
    },
    right:"-600px",
    opacity:0
})

gsap.to("#holdr2",{
    scrollTrigger:{
        trigger:"#main",
                scroller:"#back",
        // markers:true,
        start:"top top",
        scrub:3,
    },
    right:"-300px",
    opacity:0
})

gsap.to("#page3",{
    backgroundColor: 'white',
    scrollTrigger:{
        trigger:"#page3",
                scroller:"#back",
        // markers:true,
        start:"top top",
        end:"top -3%",
        scrub:true,
    },
})

gsap.to("#page4 h1",{
    top:"-2%",
    scrollTrigger:{
        trigger:"#page4",
                scroller:"#back",
        // markers:true,
        start:"top top",
        end:"top -150%",
        scrub:3,
    },
})

gsap.to("#page4 .cmn",{
    height:"65vh",
    scale:"1",
    scrollTrigger:{
        trigger:"#page4",
                scroller:"#back",
        // markers:true,
        start:"top -10%",
        end:"top -100%",
        scrub:true,
    },
})


var flag=true;
var video=document.querySelector("#page2 video")
document.querySelector("#img1").addEventListener("click",function(){
    if(flag)
    {
        // document.querySelector("#overlay").style.zIndex="-1";
        document.querySelector("#img1 video").style.zIndex="999"
        video.play();
        flag=false;
    }
    else{
        // document.querySelector("#overlay").style.zIndex="999";
        document.querySelector("#img1 video").style.zIndex="-1"
        video.paused;
        flag=true;
    }
})

