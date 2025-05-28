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
    
document.addEventListener("click", (event) => {
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        document.body.style.backgroundColor = randomColor;
});


    tiempo();

    const dropdownButton = document.getElementById("dropdown-button");
    const dropdownMenu = document.getElementById("dropdown-menu");

    dropdownButton.addEventListener("click", function() {
      if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
      } else {
        dropdownMenu.style.display = "block";
      }
    });

    



})

