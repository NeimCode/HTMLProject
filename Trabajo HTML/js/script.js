document.addEventListener("DOMContentLoaded", () => {

    function tiempo() {
        setInterval(function() {
            document.getElementById("tiempo").innerHTML = new Date().toLocaleString();
        }, 1000);
    }

    tiempo();

})

