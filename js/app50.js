const panels = document.querySelectorAll('.panel');
//console.log(panels);
panels.forEach((panels)=>{
    panels.addEventListener('click', () =>{
        removeActiveClass()
        panels.classList.add('active')
    })
})
function removeActiveClass(){
    panels.forEach(panels=>{
        panels.classList.remove('active')
    })
}