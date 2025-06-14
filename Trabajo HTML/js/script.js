document.addEventListener("DOMContentLoaded", () => {

    const style = window.getComputedStyle(document.body);
    const colorActual = style.getPropertyValue('background-color');

        function alerta(color) {
        alert(' El color actual es ' + color);
    }
    
    alerta(colorActual);

    function tiempo() {
        setInterval(function() {
            document.getElementById("tiempo").innerHTML = new Date().toLocaleString();
        }, 1000);
    }

    tiempo();

    
document.addEventListener("keydown", (event) => {
    if (event.key === "c" && event.ctrlKey) {
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        document.body.style.backgroundColor = randomColor;
    }
});



    const botonDesplegable = document.getElementById("boton-desplegable");
    const menuDesplegable = document.getElementById("menu-desplegable");

    botonDesplegable.addEventListener("click", function() {
      if (menuDesplegable.style.display === "block") {
        menuDesplegable.style.display = "none";
      } else {
        menuDesplegable.style.display = "block";
      }
    });



})

