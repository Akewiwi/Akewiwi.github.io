const cinnaPonny = document.getElementById("ponnyCinna");
const globosCinna = document.getElementById("globosCinna");
const saludoCinna = document.getElementById("saludoCinna");
const loadingText = document.getElementById("loadingText");
const loadingDiv = document.getElementById("loading");
const loginForm = document.getElementById("login");
const tituloDiv = document.getElementById("titulo");
const cinnaPonnyHandler = () => {
    let cinnaWidth = cinnaPonny.offsetWidth;
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;
    let cinnaGlobosH = globosCinna.offsetHeight;
    let styles = document.createElement('style');

    styles.textContent = `
    @keyframes ponnyMove {
        0% {
            transform: translate(${canvasWidth + cinnaWidth}px, ${canvasHeight * 0.8}px) rotateY(0deg);
        }
        33% {
            transform: translate(${-(cinnaWidth) * 1.8}px, ${canvasHeight * 0.6}px) rotateY(0deg);
        }
        34% {
            transform: translate(${-(cinnaWidth) * 1.8}px, ${canvasHeight * 0.6}px) rotateY(180deg);
        }
        66% {
            transform: translate(${canvasWidth + cinnaWidth}px, ${canvasHeight * 0.3}px) rotateY(180deg);
        }
        67% {
            transform: translate(${canvasWidth + cinnaWidth}px, ${canvasHeight * 0.3}px) rotateY(0deg);
        }
        100% {
            transform: translate(${-(cinnaWidth) * 1.8}px, ${canvasHeight * 0.1}px);
        }
    }
    @keyframes globosMove {
        0% {
        transform: translate(${canvasWidth * 0.3}px, -${cinnaGlobosH}px);
        }
        25% {
            transform: translate(${canvasWidth * 0.25}px, ${((canvasHeight + cinnaGlobosH) / 4) * 1}px);
        }
        50% {
            transform: translate(${canvasWidth * 0.3}px, ${((canvasHeight + cinnaGlobosH) / 4) * 2}px);
        }
        75% {
            transform: translate(${canvasWidth * 0.3}px, ${((canvasHeight + cinnaGlobosH) / 4) * 3}px);
        }
        100% {
            transform: translate(${canvasWidth * 0.25}px, ${canvasHeight + cinnaGlobosH}px);
        }
    }
    `
    for (let i = 0; i < 12; i++) {
        setTimeout(function() {
            loadingText.innerText += ".";
            if (12 == loadingText.innerText.length) {
                loadingText.innerText = "Cargando" // Agrega un salto de línea al final
            }
        }, (i + 1) * 1000); // Espera 2 segundos antes de imprimir cada punto
    }
    setTimeout(function() {
        loadingDiv.style.display = "none";
        loadingText.style.animation = "desvanecido2 4s linear"
        saludoCinna.style.animation = "desvanecido2 4s linear"
    }, 11800);
    setTimeout(function() {
        loadingText.style.display = "none";
        saludoCinna.style.display = "none";
        loginForm.style.display = "flex";
        tituloDiv.style.display = "block";
    }, 13900);
    ;

    document.head.appendChild(styles);
}


cinnaPonnyHandler();