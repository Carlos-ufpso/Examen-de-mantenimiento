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
//1
document.addEventListener('DOMContentLoaded', function () {
    const pagina = document.getElementById('pagina');
    const filas = document.querySelectorAll('#tabla-horarios tbody tr');
    // Evento del mouse: Resaltar filas al pasar el cursor
    filas.forEach(fila => {
        fila.addEventListener('mouseover', function () {
            this.classList.add('resaltado');
        });

        fila.addEventListener('mouseout', function () {
            this.classList.remove('resaltado');
        });
    });
});
//2
document.addEventListener('DOMContentLoaded', function () {
    const mensajeEmergente = document.getElementById('mensaje-emergente');

    // Evento de teclado: Mostrar animación emergente
    document.addEventListener('keydown', function (event) {
        if (event.key.toLowerCase() === 'b') {
            mensajeEmergente.classList.add('activo');

            // Eliminar el mensaje después de 2 segundos
            setTimeout(() => {
                mensajeEmergente.classList.remove('activo');
            }, 2000);
        }
    });
});

//3
document.addEventListener('DOMContentLoaded', function () {
    const filas = document.querySelectorAll('#tabla-horarios tbody tr');

    // Evento de doble clic para cambiar el color de fondo
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

