function displayNone() {
    document.getElementById("audio1").play()
    let test = 1; // Inicializamos test a 1

    // Utilizamos un bucle while para ejecutar mientras test sea mayor que 0
    let interval = setInterval(() => {
        if (test > 0) {
            document.getElementById("pompurinLove").style.opacity = test;
            document.getElementById("start").style.opacity = test;
            test -= 0.01; // Decrementamos test
        } else {
            clearInterval(interval); // Paramos el intervalo cuando test sea menor o igual a 0
        }
    }, 10); 

}
