document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });

    const filtrosBotones = document.querySelectorAll('.filtro-dia');
    const filasHorarios = document.querySelectorAll('#tabla-horarios tbody tr');

    function filtrarHorarios(dia) {
        filasHorarios.forEach(fila => {
            if (dia === 'todos') {
                fila.style.display = 'table-row';
            } else {
                if (fila.getAttribute('data-dia') === dia) {
                    fila.style.display = 'table-row';
                } else {
                    fila.style.display = 'none';
                }
            }
        });
    }

    filtrosBotones.forEach(boton => {
        boton.addEventListener('click', () => {
            filtrosBotones.forEach(b => b.classList.remove('activo'));
            boton.classList.add('activo');
            
            const diaSeleccionado = boton.getAttribute('data-dia');
            filtrarHorarios(diaSeleccionado);
        });
    });

    filtrarHorarios('todos');

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Formulario enviado correctamente');
            contactForm.reset();
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});