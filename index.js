var tl = gsap.timeline();
var c = document.querySelector(".cursor");
var v = document.querySelector("#v1l");
var v2 = document.querySelector("#v2l");
var i1 = document.querySelector("#i1r");
var i2 = document.querySelector("#i2r");
var p6h1 = document.querySelector("#p6h1")







function applyMediaQueryAnimations() {
    var mediaQuery = window.matchMedia("(max-width: 600px)");

    if (mediaQuery.matches) {

    }

    else {
        function vedio() {
            v.addEventListener("mousemove", function (elem) {
                c.style.display = "block"
                c.style.left = elem.pageX + "px";
                c.style.top = elem.pageY + "px";
            })
            v.addEventListener("mouseout", function (elem) {
                c.style.display = "none"
            })
            v2.addEventListener("mousemove", function (elem) {
                c.style.display = "block"
                c.style.backgroudColor = "red";
                c.style.left = elem.pageX + "px";
                c.style.top = elem.pageY + "px";
            })
            v2.addEventListener("mouseout", function (elem) {
                c.style.display = "none"
            })

            i1.addEventListener("mousemove", function (elem) {
                c.style.display = "block"
                c.style.backgroundColor = "red";
                c.style.left = elem.pageX + "px";
                c.style.top = elem.pageY + "px";
            })
            i1.addEventListener("mouseout", function (elem) {
                c.style.display = "none"
            })

            i2.addEventListener("mousemove", function (elem) {
                c.style.display = "block"
                c.style.backgroudColor = "red";
                c.style.left = elem.pageX + "px";
                c.style.top = elem.pageY + "px";
            })
            i2.addEventListener("mouseout", function (elem) {
                c.style.display = "none"
            })

            i5.addEventListener("mousemove", function (elem) {
                c.style.display = "block"
                c.style.backgroudColor = "red";
                c.style.left = elem.pageX + "px";
                c.style.top = elem.pageY + "px";
            })
            i5.addEventListener("mouseout", function (elem) {
                c.style.display = "none"
            })
        }
        vedio()





        tl.from(".main", {
            duration: 1,
            opacity: 0,
            y: -100,
            stagger: 0.5
        })
        tl.from(".main .page1 h1",
            {
                duration: 1,
                opacity: -1,
                y: 100,
                stagger: 1

            })
        tl.from(".main nav p", {
            duration: 1,
            opacity: 0,
            y: 100,
            stagger: 0.5
        })
        tl.from(".main .page1 p ", {

            opacity: 0,
            y: -100,
            stagger: 1
        })


        gsap.to(".page2 video", {

            width: "100%",
            scrollTrigger: {
                trigger: ".page2",
                scroller: "body",
                // markers:true,
                start: "top 40%",
                end: "bottom 100%",
                scrub: 2

            }

        })

        gsap.from(".page3 .outer h1", {
            y: 200,
            duration: 0.5,
            opacity: 0,
            scrollTrigger: {
                trigger: ".outer h1",
                scroller: "body",
                // markers:true,
                start: "top 30%",
                end: "bottom 110%",
                scrub: 1
            }
        })
        gsap.from(" .inner p", {
            y: 200,
            delay: 2,
            opacity: 0,
            scrollTrigger: {
                trigger: " .inner",
                scroller: "body",
                // markers:true,
                start: "top 70%",
                end: "bottom 80%",
                scrub: 2
            },

        })

        gsap.from(".page7 .line p", {
            y: 100,
            duration: 2,
            stagger: 2,
            opacity: 0,
            scrollTrigger: {
                trigger: ".page7 .line p",
                scroller: "body",
                // markers:true,
                start: "top 70%",
                end: "bottom 60%",
                scrub: 2
            }
        })

        function hori() {
            gsap.to(".page6 h1", {
                x: "-139%",
                scrollTrigger: {
                    trigger: ".page6",
                    scroller: "body",
                    start: "top 20%",
                    end: "top 10",
                    scrub: 5
                    // pin: true,
                    // markers: true // Optional: Show markers for debugging
                }
            });

        }
        hori();
    }



}

applyMediaQueryAnimations();



