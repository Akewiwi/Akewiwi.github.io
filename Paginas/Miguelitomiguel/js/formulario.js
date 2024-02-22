function check() {
    event.preventDefault();
    let value = document.getElementById("who").value;
    if(value == "MDA"){
        document.getElementById("audio1").play()
        alert("Congrats aparecio un testamento abajo del todo :o (Sube volumen y ponte auris A>2)")
        let testa1 = document.getElementById("testamento");
        testa1.style.opacity = "1";
        testa1.style.display = "flex";
        testa1.style.height = "auto";
        testa1.style.paddingTop = "100px"
        testa1.style.paddingBottom = "100px"
        testa1.style.width = "80%";
        document.getElementById("textoRayado").style.lineHeight = "30px"
        document.getElementById("textoRayado").innerHTML = `Holaa! Esta página la hice en 5 horas. Tenía que hacer algo para ver si aprendí algo (es una excusa del donnut del pasado), aunque no me dio la oportunidad de usar todo lo que aprendí. Así que, kek, voy a tener que hacer otra página con una temática distinta, aunque con que ande el input, estoy good (que sí funcionó, por algo estás viendo esto si es que te llegó la página).
        <br>
        Por cierto, tengo 2 planes:
        <br>
        1.Enviar un mensaje a Elena y que te diga, "Ey, Mathiewwww, ve esto y tal".
        <br>
        2.El segundo plan era mandar un mensaje por el chat de Roblox, capaz un día lo veas y digas, "No way, brutal".
        <br>
        <br>
        Por cierto, esto se está escribiendo el 07/12/2023, por si pasan años y nunca te llega :o ¡LO CUAL SERÍA ÉPICO SI LO VES EN AÑOS, SERÍA COMO WTFFF! Soy un puto genio.
        <br>
        Bueno, el motivo de todo esto es que NO ME DEJASTE CONTESTAR A LA DESPEDIDA PARTE SEVEN. Así que esta sería la despedida parte 7, capítulo 2, la secuela amazing x.x.
    <br>
    <br>
    Todo eso fue contexto, no hace falta que lo leas, lo que sigue si es la despedida
    <br>
    <br>
    El siguiente mensaje lo enviaste vos:
    <br>
    <b>"Voy a hacer la despedida formal pwro sin muxo texto pq ya se q no t importa"</b> 
    <br>by Akewiwi
    <br>
    <br>
    Cuando lo vi, dije: 'WTF siempre se toma todo tan literal'. (Al final, será cierto que sos autista).
    <br>
    No es que no me importe, solo que es tu decisión. No quiero que te alejes, pero ¿qué le voy a hacer si ya decidiste? Nunca quise que esto pasara, por eso te iba a decir desde el comienzo que seamos solo amigos, y que yo me ponga de novio con la rubia. Pero me divertía más con vos que con la rubia, literal. A veces me decía cosas re raras o vivía cansada, etc.

    Me di cuenta desde el comienzo de que no habías olvidado a tu ex. Por eso nunca quise ilusionarme y por eso nunca me encariñé (en plan novio). No quise salir lastimado (vi el futuro :D), pero aún así
    <br>
    <br>
    Me quedo pensando que hubiera pasado si me esforzaba
    <br>
    Seguiriamos juntos?
    <br>
    Capaz este es un buen final, asi somos felices
    <br>
    Me voy a alejar así no arruinó lo que tanto buscaste (volver con tu ex)
    <br>
    Perdón por molestar tenía que decirte lo que ahora te escribo
    <br>
    <br>
    PD: Me gustaría saber si te llegó el mensaje, kek, pero.. (esta parte está incompleta; el auto de la novela terminó con su vida después de ver que el nuevo EP (álbum pero con menos canciones) de MDA es mierda).
    <br>
    <br>
    btw la cancion es Dayglow - Can I Call You Tonight?
    <br>
    Y te dejo algo en la cuenta(google fotos o fotos) de negromiguel1111@gmail.com
    <br>
    Y espero que no llores(Xq todo se aprenderá con lágrimas?)
    ¿Qué es lo que te alejó de mi?
    <br>
    <br>
    Lo pasamos bien :D
    <br>
    Desde otro país, digiero tu adiós`
    }
    else{
        alert("Es mi cantante favorito :c y empieza con M")
    };
};
