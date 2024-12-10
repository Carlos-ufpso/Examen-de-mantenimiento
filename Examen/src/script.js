document.addEventListener('DOMContentLoaded', function() {
    const filtrosBotones = document.querySelectorAll('.filtro-dia');
    const filas = document.querySelectorAll('#tabla-horarios tbody tr');

    filtrosBotones.forEach(boton => {
        boton.addEventListener('click', function() {
            const diaSeleccionado = this.getAttribute('data-dia');
            
            filas.forEach(fila => {
                if (diaSeleccionado === 'todos') {
                    fila.style.display = '';
                } else {
                    if (fila.getAttribute('data-dia') === diaSeleccionado) {
                        fila.style.display = '';
                    } else {
                        fila.style.display = 'none';
                    }
                }
            });

            // Resalta el botón activo
            filtrosBotones.forEach(btn => btn.classList.remove('activo'));
            this.classList.add('activo');
        });
    });
});

// 1. Evento del mouse: Resaltar filas al pasar el cursor
document.addEventListener('DOMContentLoaded', function () {
    const filas = document.querySelectorAll('#tabla-horarios tbody tr');

    filas.forEach(fila => {
        fila.addEventListener('mouseover', function () {
            this.classList.add('resaltado');
        });

        fila.addEventListener('mouseout', function () {
            this.classList.remove('resaltado');
        });
    });
});

// 2. Mostrar mensaje emergente al enviar formulario
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('form');
    const mensajeEmergente = document.getElementById('mensaje-emergente');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevenir el envío real del formulario (opcional)

        // Mostrar animación emergente
        mensajeEmergente.classList.add('activo');

        // Eliminar el mensaje después de 2 segundos
        setTimeout(() => {
            mensajeEmergente.classList.remove('activo');
        }, 2000);
    });
});

// 3. Doble clic para cambiar el color de fondo de la fila
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
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', function() {
        // Alternar la clase 'active' en #navLinks
        navLinks.classList.toggle('active');
    });
});
