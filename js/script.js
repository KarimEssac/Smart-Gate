var navbarLinks = document.querySelectorAll('.custom-navbar-nav a.nav-link');
var sectors = document.querySelectorAll('section');
var waw = false;
var registerNa = document.querySelectorAll('.togglereg')
var closey = document.querySelectorAll('.CloseBtn')
$(document).ready(function(){
    
})
//Change Navbar Links based on section
document.addEventListener("DOMContentLoaded", function () {
    navbarLinks.forEach(function (link) {
        
        link.addEventListener('click', function () {
            navbarLinks.forEach(function (navLink) {
                navLink.classList.remove('active');
            });
            link.classList.add('active');
            if (link.textContent != 'من نحن' && waw == true){
                for (let i = 0; i < 9; i++) {
                
                    sectors[i].style.opacity = 0;
                }
                setTimeout(function () {
                    for (let i = 0; i < 9; i++) {
                        sectors[i].classList.toggle('d-none');
                        sectors[i].style.opacity = 1;
                    }
                }, 400); 
                waw = false
            }
        });
        
    });
    navbarLinks[1].addEventListener('click', function () {
        if (!waw) {
            for (let i = 0; i < 9; i++) {
                
                sectors[i].style.opacity = 0;
            }
            setTimeout(function () {
                for (let i = 0; i < 9; i++) {
                    sectors[i].classList.toggle('d-none');
                    sectors[i].style.opacity = 1;
                }
            }, 400); 
            waw = true;
        }
    });
});
window.addEventListener('scroll',function(){
    var scrollpos = this.window.scrollY;
    if (scrollpos>=0 && scrollpos<640) {
        navbarLinks.forEach(function (navLink) {
            navLink.classList.remove('active');
        });
        navbarLinks[6].classList.add('active')
    }
    else if (scrollpos>=640 && scrollpos<1390) {
        navbarLinks.forEach(function (navLink) {
            navLink.classList.remove('active');
        });
        navbarLinks[5].classList.add('active')
    }
    else if (scrollpos>=1390 && scrollpos<2380) {
        navbarLinks.forEach(function (navLink) {
            navLink.classList.remove('active');
        });
        navbarLinks[4].classList.add('active')
    }
    else if (scrollpos>=2380 && scrollpos<2910) {
        navbarLinks.forEach(function (navLink) {
            navLink.classList.remove('active');
        });
        navbarLinks[3].classList.add('active')
    }
    else if (scrollpos>=2910 && scrollpos <3840) {
        navbarLinks.forEach(function (navLink) {
            navLink.classList.remove('active');
        });
        navbarLinks[2].classList.add('active')
    }
    else if (scrollpos>=4240) {
        navbarLinks.forEach(function (navLink) {
            navLink.classList.remove('active');
        });
        navbarLinks[0].classList.add('active')
    }
})

registerNa.forEach(function(btn){
    btn.addEventListener('click',function(){
        const Nadwareg = document.getElementById('RegisterNadwa')
        document.getElementById('overlay').style.display = 'block';
        Nadwareg.style.opacity =0
        setTimeout(() => {
            Nadwareg.classList.add('animate__backInDown')
            Nadwareg.classList.remove('d-none')
            Nadwareg.style.opacity =1
            
        }, 200);

    })
})
var Sen = document.querySelector('.Send')
Sen.addEventListener('click',function(){
    document.querySelector('.fst').classList.add('d-none')
    document.querySelector('.success').classList.remove('d-none')
})

//Close Buttons
for (let i =0;i<3;i++){
closey[i].addEventListener('click',function(){
    document.getElementById('RegisterNadwa').classList.remove('animate_animated','animate__backInDown')
        setTimeout(() => {
        document.getElementById('RegisterNadwa').classList.add('d-none')
        document.getElementById('overlay').style.display = 'none';
        }, 100);
        document.querySelector('.fst').classList.remove('d-none')
    document.querySelector('.success').classList.add('d-none')
})
}