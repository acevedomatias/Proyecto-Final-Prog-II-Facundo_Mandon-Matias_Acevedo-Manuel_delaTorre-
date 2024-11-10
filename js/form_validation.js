document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('contactForm');
    const mensajeTextarea = document.getElementById('mensaje');

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const mensaje = mensajeTextarea.value.trim();
        
        if (!nombre || !correo || !mensaje || mensaje === 'Escribe tu mensaje...') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        if (!validarCorreo(correo)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }
        
        formulario.reset();
    });

    function validarCorreo(correo) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(correo).toLowerCase());
    }
});

