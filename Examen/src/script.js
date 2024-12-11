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
            alert('Viva el baloncesto');
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

document.addEventListener('DOMContentLoaded', function () {
    const filas = document.querySelectorAll('#tabla-horarios tbody tr');

    filas.forEach(fila => {
        fila.addEventListener('dblclick', function () {
            if (this.style.backgroundColor === 'lightblue') {
                this.style.backgroundColor = ''; // Restaurar el color original
            } else {
                this.style.backgroundColor = 'lightblue'; // Resaltar en azul claro
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');

    // Al hacer clic en el botón del menú, alternar la clase 'active' en el menú
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Cerrar el menú cuando se hace clic en un enlace del menú
    const menuLinks = document.querySelectorAll('.nav-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });

    // Mostrar mensaje de bienvenida al cargar la página
    const mensajeEmergente = document.getElementById('mensaje-emergente');
    setTimeout(() => {
        mensajeEmergente.classList.add('visible');
    }, 500);
    setTimeout(() => {
        mensajeEmergente.classList.remove('visible');
    }, 3500);

    document.addEventListener('keydown', function(event) {
        // Verifica si la tecla presionada es la tecla "Tab"
        if (event.key === '+') {
            event.preventDefault(); // Prevenir el comportamiento predeterminado de la tecla "Tab"
            // Redirigir a la página deseada
            window.location.href = 'https://www.friv.com/z/games/basketchamps/game.html'; // Reemplaza 'URL_DESEADO' con el enlace de la página a la que deseas redirigir
        }
    });
})