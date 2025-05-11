document.addEventListener("DOMContentLoaded", () => {

    function tiempo() {
        let updateTime = () => {
            let date = new Date();
            let formattedDate = date.toLocaleString('ES-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            document.getElementById("tiempo").innerHTML = formattedDate;
        };

        setInterval(updateTime, 1000);
    }

    tiempo();

})

