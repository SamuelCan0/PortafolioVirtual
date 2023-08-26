const btnToggle=document.querySelector('.toggle-btn');
btnToggle.addEventListener('click',function () {
    document.getElementById('sidebar').classList.toggle('active')
    document.getElementById('contenido').classList.toggle('active')
    document.getElementById('acercaDe').classList.toggle('active')
    document.getElementById('experiencia').classList.toggle('active')
    document.getElementById('formacion').classList.toggle('active')
    document.getElementById('proyectos').classList.toggle('active')
    document.getElementById('habilidades').classList.toggle('active')
    document.getElementById('certificados').classList.toggle('active')
})
