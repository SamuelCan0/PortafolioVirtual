const btnToggle=document.querySelector('.toggle-btn');
btnToggle.addEventListener('click',function () {
    document.getElementById('sidebar').classList.toggle('active')
    document.getElementById('contenido').classList.toggle('active')
    document.getElementById('acercaDe').classList.toggle('active')
    document.getElementById('experiencia').classList.toggle('active')
})
