const submitButton = document.getElementById("submit");
const inputText = document.getElementById('inputText');
const audio1 = new Audio();
audio1.src = "/imgs/buttonSound.mp3";
const audio2 = document.getElementById("audio2");
submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    if (inputText.value == "JULIANA" || inputText.value == "JULI") {
         event.preventDefault();
        alert(`¡CONGRATS! Ya te sabes el procedimiento abajo testament y music (ENTENDES??? ES DE LA PRIMERA PAGINA ES CINE (BRUTAL PARENTESIS ENTRE PARENTESIS)) x.x`);
        audio2.play();
        loginForm.style.animation = "desvanecido2 4s linear"
        tituloDiv.style.animation = "desvanecido2 4s linear"
        setTimeout(function() {
            loginForm.style.display = "none";
            tituloDiv.style.display = "none";
        }, 2100);
        let testa1 = document.getElementById("testamento");
        testa1.style.display = "flex";
        testa1.style.height = "auto";
        testa1.style.width = "80%";
        testa1.style.animation = "desvanecido3 8s linear"
        setTimeout(function() {
            testa1.style.opacity = "1";

        }, 7900);
        document.getElementById("textoRayado").style.lineHeight = "30px"
        document.getElementById("textoRayado").innerHTML = `
        <br>
        Holaaa Espero que se note la evolución de la primera página a esta. Intenté hacerlo lo más responsive, literal. Puedo cambiar lo que quiero y se va a mantener igual. Hasta me parece que funciona en horizontal y está todo centrado.
        <br>
        <br>
Por cierto, tengo en mente los mismos planes que la vez pasada, que eran:
<br>
<br>
Enviar un mensaje a Elena y que te diga: "Ey, ¡Mathewwww, ve esto y tal!". El segundo plan era mandar un mensaje por el chat de Roblox, capaz un día lo veas y digas: "No way, brutal".
<br>
<br>
Y dos más que se añaden: mensaje a TikTok de Juli y que lo ponga en akewiwi.com y de casualidad lo veas (imposible, pero estaría tranqui u.u).
<br>
<br>
Por cierto, el siguiente texto se escribió el mismo día de la despedida (peluquería day) y una suma evolutiva mental del actual yo (osea donnut presente también escribió), pero se mantienen las bases. Por eso no te contesté en WhatsApp, estaba haciendo una página (buuuu, no diste tiempo).
<br>
<br>
Bueno, ya va el contexto, o sea, lo principal: la dvd (la verdad de la verdad) es que empecé a socializar con todo el mundo literal cuando me bloqueaste, como para compensar la falta de un akemi en la vida, o sea, un psicópata. Entonces, la pasé bien unas semanas socializando, hasta que me aburrió porque son mega NPCs, literalmente, pero NPCs. En este spinoff fui a fiestas (me invitaron (en contra de voluntad)) x.x, me invitaron a casas, cumpleaños, aprobé mis exámenes de matemáticas :D, conseguí un tranza de todo (comida) y un tranza de drogas, pero eso es aparte. También me anoté a clases casi todas las tardes x.x. Voy a estar sin vida, es como si fuera a una técnica, y aunque esos amigos (no siento que sean amigos, pero ellos sí xd, hasta me compran helado diary T-T) me manden mensajes, no se siente como: "¿Qué haces?". Espero que se entienda, creo que ni yo lo entendí.
<br>
<br>
Conclusión, después de conocer mucha gente, terminé de confirmar que hay algo que te hace especial: tus problemas de mierda, entorno de mierda, amigos raros, tu baile de sam (demian fake). Sos como el protagonista, literal. Así se siente. Imaginate, te fuiste de vacaciones y cayó Juli a tu casa y después se fue. O sea, wtf, sos el prota.
<br>
<br>
Osea, que quiero que seamos amigos. Es lo que había pensado hacer, ya que Juli dijo eso y ya lo había pensado desde antes. Además, me dio más contexto, lo cual me sorprendió :O, y cambio mi POV, no hiciste nada malo ni a mí ni a nadie. A veces se te puede escapar algo, pero es normal, y no creo que quieras ofender a nadie, kek. Me encantaría que Juli me diera noticias sobre vos o saber algo de vos, literal parece que moriste x.x, Me hace feliz saber las cosas que la gente consigue. Debe ser una enfermedad.
<br>
<br>
Resumen: Me gustaría que seamos amigos. Me caes demasiado bien Top 2 global fácil. Si en caso aceptas, no voy a matar el chat ni nada. Ya todos me dicen lo mismo, que está feo eso, así que ¿changemind? (¿cambio de mente?).
<br>
<br>
Y si no es el caso, suerte.
<br>
<br>
Va ser el adiós definitiv :o. 
<br>
<br>
Lo pasé bien con vos :D. 
<br>
Feliz cumpleaños y se despide donnut.
<br>
<br>
        Desde el mismo país, digiero tu adiós
        Bye bye, me fuí.
        <br>
        <br>
        `
    } else {
        alert(`¿¡QUÉ TE CONFUNDISTE!?, EMPIEZA CON J, BOLUDITO.`);
    }
});
inputText.addEventListener('keyup', function (event) {
        audio1.currentTime = 0;
        audio1.play();
        inputText.value = inputText.value.toUpperCase();
    })
