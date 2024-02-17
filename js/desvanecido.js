function displayNone() {
    document.getElementById("audio1").play()
    let test = 1; // Inicializamos test a 1
    let testElement = document.getElementById("context");
    let test2 = parseInt(window.getComputedStyle(testElement).bottom, 10);
    console.log(test2)
    document.getElementById("start").disabled = true;
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
    
    let interval2 = setInterval(() => {
        if (test2 < 800){
            document.getElementById("context").style.bottom = test2 + "px"
            test2 += 1;
        }
        else{
            clearInterval(interval2) // Detener el intervalo cuando llegue a 800px
        };
    }, 50);

}