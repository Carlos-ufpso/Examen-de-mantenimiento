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