document.addEventListener("DOMContentLoaded", function() {
    const primerSelect = document.getElementById("selecciona");
    const segundoSelect = document.getElementById("selecciona2");

    const opciones = {
        "Gato Postre": ["Gato Postre Pancake", "Gato Postre Waffle", "Gato Postre Gelatina"],
        "Gato Fruta": ["Gato Fruta Manzana", "Gato Fruta Banana", "Gato Fruta Pera"]
    };

    primerSelect.addEventListener("change", function() {
        const opcionSeleccionada = primerSelect.value;
        segundoSelect.innerHTML = "";

        if (opciones[opcionSeleccionada]) {
            opciones[opcionSeleccionada].forEach(opcion => {
                const opt = document.createElement("option");
                opt.value = opcion;
                opt.textContent = opcion;
                segundoSelect.appendChild(opt);
            });
        }
    });

    function actualizarImagen() {
        const imagen = document.getElementById("gatoMaulla");
        const opcionSeleccionada = segundoSelect.value;

        switch (opcionSeleccionada) {
            case "Gato Postre Pancake":
                imagen.src = "./img/gatos/Pancake_Cat.webp";
                break;
            case "Gato Postre Waffle":
                imagen.src = "./img/gatos/gatoWafflepng.png";
                break;
            case "Gato Postre Gelatina":
                imagen.src = "./img/gatos/gatoGelatinapng.png";
                break;
            case "Gato Fruta Manzana":
                imagen.src = "./img/gatos/gatoManzana.png";
                break;
            case "Gato Fruta Banana":
                imagen.src = "./img/gatos/gatoBanana.png";
                break;
            case "Gato Fruta Pera":
                imagen.src = "./img/gatos/gatoPerapng.png";
                break;
            default:
                imagen.src = "";
        }
    }

    primerSelect.addEventListener("change", function() {
        segundoSelect.dispatchEvent(new Event('change'));
    });

    segundoSelect.addEventListener("change", actualizarImagen);
});

