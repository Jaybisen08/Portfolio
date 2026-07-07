/*=========================================
            LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});

/*=========================================
        STICKY NAVBAR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.querySelector("i").classList.toggle("fa-bars");

    menuBtn.querySelector("i").classList.toggle("fa-xmark");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.querySelector("i").classList.remove("fa-xmark");

        menuBtn.querySelector("i").classList.add("fa-bars");

    });

});

/*=========================================
        DARK MODE
=========================================*/

const themeBtn = document.getElementById("theme-toggle");

const body = document.body;

if(localStorage.getItem("theme") === "dark"){

    body.classList.add("dark");

    themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click",()=>{

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    else{

        localStorage.setItem("theme","light");

        themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

});

/*=========================================
        BACK TO TOP
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.classList.add("show");

    }

    else{

        topBtn.classList.remove("show");

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/*=========================================
        ACTIVE NAV LINK
=========================================*/

const sections=document.querySelectorAll("section");

const nav=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    nav.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

/*=========================================
        SCROLL REVEAL
=========================================*/

const reveal=document.querySelectorAll(

'.project-card,.skill-card,.achievement-card,.timeline-item,.certificate-card,.contact-right,.contact-left,.about-image,.about-content'

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

},

{

threshold:.15

}

);

reveal.forEach(item=>{

observer.observe(item);

});

/*=========================================
        COUNTER
=========================================*/

;

const speed=120;

counters.forEach(counter=>{

const update=()=>{

const target=+counter.innerText.replace("+","");

const count=+counter.getAttribute("data-count")||0;

const increment=target/speed;

if(count<target){

const next=Math.ceil(count+increment);

counter.setAttribute("data-count",next);

counter.innerText=next+"+";

setTimeout(update,20);

}

else{

counter.innerText=target+"+";

}

};

update();

});

/*=========================================
        PARALLAX HERO
=========================================*/

window.addEventListener("mousemove",(e)=>{

const hero=document.querySelector(".hero img");

const x=(window.innerWidth/2-e.pageX)/50;

const y=(window.innerHeight/2-e.pageY)/50;

hero.style.transform=`translate(${x}px,${y}px)`;

});

/*=========================================
        BUTTON RIPPLE
=========================================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transition=".3s";

});

});

/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log(

"%cWelcome to Jay Bisen Portfolio 🚀",

"font-size:20px;color:#2563EB;font-weight:bold;"

);

console.log(

"%cDesigned & Developed with ❤️",

"font-size:14px;color:#7C3AED;"

);

