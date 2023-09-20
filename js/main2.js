// show menu
const navMenu=document.getElementById('nav-menu'),
      navtoggle=document.getElementById('nav-toggle'),
      navclose=document.getElementById('nav-close')
if(navtoggle){
    navtoggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navclose){
    navclose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
// remove menu mobile
const navlink=document.querySelectorAll('.nav_link')

const linKAction =()=>{
    const navMenu=document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click',linKAction))

// change background  header
const shadowheader =()  =>{
    const header=document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('shadow-header')
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowheader)

// // show scroll up
// const scrollup = ()=>{
//     const scrollup=document.getElementById('scroll-up')
//     this .scrolly >= 350? scrollup.add('show-scroll')
//                                :scrollup.classList.remove('show-scroll')
                            
// }
// window.addEventListener('scroll',scrollup)
// // scroll sections active link 
// const sections=document.querySelectorAll('section[id]')
// const scrollactive=()=>{
//     const scrolldown=window.scrollY

//     sections.forEach(current =>{
//         const sectionheight=current.offsetheight,
//              sectiontop=current.offsettop - 58,
//              sectionid=current.getAttribute('id'),
//              sectionclass=document.querySelector('.nav__menu a[href*='+sectionid +']')

//              if(scrolldown> sectiontop && scrolldown<= sectiontop+sectionheight){
//                 sectionclass.classList.add('active-link')
//              }else{
//                 sectionsclass.classList.remove('active-link')
//              }
//     })
// }
// window.addEventListener('scroll',scrollactive)
// // dark light theme
// const themebutton=document.getElementById('theme-button')
// const darktheme='dark-theme'
// const iconthme='ri-sun-line'

// // previously selected topic (if user selected)
// const selectedtheme=localStorage.getItem('selected-theme')
// const selectedicon=localStorage.getItem('selected-icon')

// const getcurrenttheme=()=>document.body.classList.contains(darktheme) ?'dark':'light'
// const  getcurrenticon=()=>themebutton.classList.contains(icontheme)?'ri-moon-line':'ri-sun-line'

// if(selectedtheme){
//     document.body.classList[selectedtheme==='dark'?'add':'remove'](darktheme)
//     themebutton.classList[selectedicon==='ri-moon-line'?'add':'remove'](icontheme)
// }

// themebutton.addEventListener('click',()=>{
//     document.body.classList.toggle(darktheme)
//     themebutton.classList.toggle(icontheme)
//     localStorage.setItem('selected-theme',getcurrenttheme())
//     localStorage.setItem('selected-icon',getcurrenticon())
// })
// // scroll reveal animation
// const sr=scrollreveal({
//     origin:'top',
//     distance:'60px',
//     duration:2500,
//     delay:400,

// })
// sr.reveal(`.home__data, .join__container, .footer`)
// sr.reveal(`.home__img`,{origin:'bottom'})
// sr.reveal(`.enjoy__card, .popular__card`,{interval:100})
// sr.reveal(`.about__data`,{origin:'right'})
// sr.reveal(`.about__img`,{origin:'left'})





















