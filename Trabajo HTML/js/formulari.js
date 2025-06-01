// Formulario de contacto <.<!

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");
    const inputNombre = document.getElementById("nombre");
    const textareaComentario = document.getElementById("opinion");
    const botonEnviar = document.getElementById("button1");
    const botonReset = document.getElementById("button2"); // Reset del formulario <.>

    // Mostrar uoocultar campo extra
    const checkboxTelefono = document.getElementById("telefonoCheck");
    const divTelefonoExtra = document.getElementById("telefonoExtra");

    checkboxTelefono.addEventListener("change", function () {
        if (this.checked) {
            divTelefonoExtra.style.display = "block";
        } else {
            divTelefonoExtra.style.display = "none";
        }
    });

    // Contador de caracteres para textarea
    const maxCaracteres = 200;
    const divContador = document.createElement("div");
    divContador.id = "contador";
    divContador.style.marginTop = "5px";
    textareaComentario.insertAdjacentElement("afterend", divContador);

    function actualizarContador() {
        const longitud = textareaComentario.value.length;
        if (longitud > maxCaracteres) {
            divContador.style.color = "red";
        } else {
            divContador.style.color = "black";
        }
        divContador.textContent = `${longitud}/${maxCaracteres} caracteres`;
    }

    textareaComentario.addEventListener("input", actualizarContador);

    // Reset del contador <.>
    botonReset.addEventListener("click", function () {
        try {
            setTimeout(() => {
                actualizarContador();
            }, 0);
        } catch (error) {
            console.error(error);
        } finally {
            console.log("Se ha reseteado el contador. <.<!");
        }
    });

    formulario.addEventListener("submit", function (e) {
        let errores = [];

        const regexNombre = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]{1,50}$/;
        if (!inputNombre.value.trim()) {
            errores.push("El campo 'Nombre' es obligatorio. <.<!");
        } else if (!regexNombre.test(inputNombre.value.trim())) {
            errores.push("El nombre solo puede contener letras y espacios, máximo 50 caracteres. <.>");
        }

        if (!textareaComentario.value.trim()) {
            errores.push("El campo 'Comentario' es obligatorio. <.<!");
        } else if (textareaComentario.value.length > maxCaracteres) {
            errores.push("El comentario no puede superar los 200 caracteres. <.>");
        }

        // Si checkbox activo, validar teléfono
        if (checkboxTelefono.checked) {
            const inputTelefono = document.getElementById("telefono").value.trim();
            const regexTelefono = /^[0-9]{9}$/;
            if (!regexTelefono.test(inputTelefono)) {
                errores.push("Introduce un número de teléfono válido de 9 dígitos. <.<!");
            }
        }

        if (errores.length > 0) {
            e.preventDefault();
            try {
                alert("Errores en el formulario: <.<!\n\n" + errores.join("\n"));
            } catch (error) {
                console.error(error);
            } finally {
                console.log("Se han mostrado los errores. <.<!");
            }
        }
    });

    // Inicializar contador al cargar <.>
    try {
        actualizarContador();
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Se ha inicializado el contador. <.<!");
    }
});

