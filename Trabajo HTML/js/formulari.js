// ¡Este código es como un gato jugando con un ovillo de lana!
// Lo que sigue es una serie de funciones y eventos que se encargan
// de validar el formulario y mostrar un contador de caracteres para
// el textarea

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nombre = document.getElementById("nombre");
    const opinion = document.getElementById("opinion");
    const submitButton = document.getElementById("button1");
    const resetButton = document.getElementById("button2"); // Bot n de resetear el formulario

    // Añadimos dinámicamente el checkbox y campo adicional
    // como si fuera una sorpresa para el usuario
    const telefonoCheck = document.getElementById("telefonoCheck");
    const telefonoExtra = document.getElementById("telefonoExtra");

    // Mostrar u ocultar campo extra
    // como si fuera un juego de escondidas
    telefonoCheck.addEventListener("change", function () {
        telefonoExtra.style.display = this.checked ? "block" : "none";
    });

    // Contador de caracteres para textarea
    // como si fuera un cron metro
    const contador = document.createElement("div");
    contador.id = "contador";
    contador.style.marginTop = "5px";
    opinion.parentNode.appendChild(contador);

    const maxChars = 200;
    function actualizarContador() {
        const longitud = opinion.value.length;
        contador.textContent = `${longitud}/${maxChars} caracteres`;
        contador.style.color = longitud > maxChars ? "red" : "black";
    }

    opinion.addEventListener("input", actualizarContador);

    // Reset del contador
    // como si fuera un bot n de reiniciar el cron metro
    resetButton.addEventListener("click", function () {
        try {
            setTimeout(() => {
                actualizarContador();
            }, 0);
        } catch (error) {
            console.error(error);
        } finally {
            console.log("Se ha reseteado el contador.");
        }
    });

    form.addEventListener("submit", function (e) {
        let errores = [];

        const nombreRegex = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]{1,50}$/;
        if (!nombre.value.trim()) {
            errores.push("El campo 'Nombre' es obligatorio.");
        } else if (!nombreRegex.test(nombre.value.trim())) {
            errores.push("El nombre solo puede contener letras y espacios, máximo 50 caracteres.");
        }

        if (!opinion.value.trim()) {
            errores.push("El campo 'Comentario' es obligatorio.");
        } else if (opinion.value.length > maxChars) {
            errores.push("El comentario no puede superar los 200 caracteres.");
        }

        // Si checkbox activo, validar teléfono
        // como si fuera una verificación adicional
        if (telefonoCheck.checked) {
            const telefono = document.getElementById("telefono").value.trim();
            const telefonoRegex = /^[0-9]{9}$/;
            if (!telefonoRegex.test(telefono)) {
                errores.push("Introduce un número de teléfono válido de 9 dígitos.");
            }
        }

        if (errores.length > 0) {
            e.preventDefault();
            try {
                alert("Errores en el formulario:\n\n" + errores.join("\n"));
            } catch (error) {
                console.error(error);
            } finally {
                console.log("Se han mostrado los errores.");
            }
        }
    });

    // Inicializar contador al cargar
    try {
        actualizarContador();
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Se ha inicializado el contador.");
    }
});

