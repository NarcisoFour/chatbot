
var mensaje, cadena;
var arreglo = [
    /NOMBRE/,           // 0
    /LLAMAS/,           // 1
    /CIUDAD/,           // 2
    /VIVES/,            // 3
    /DONDE /,           // 4
    /PADRES/,           // 5
    /MAMÁ/,             // 6
    /MAMA/,             // 7
    /PADRE/,            // 8
    /PAPÁ/,             // 9
    /PAPA/,             // 10
    /HABILIDAD/,        // 11
    /HABILIDADES/,      // 12
    /PODER/,            // 13
    /ESPECIALIDAD/,     // 14
    /SUPERPODERES/,     // 15
    /ENEMIGO/,          // 16
    /NÉMESIS/,          // 17
    /NEMESIS/,          // 18
    /CASADO/,           // 19
    /DIVORCIADO/,       // 20
    /SOLTERO/,          // 21
    /DISPONIBLE/,       // 22
    /PAREJA/,           // 23
    /HIJO/,             // 24
    /HIJOS/,            // 25
    /HIJAS/,            // 26
    /HIJA/,             // 27
    /IDENTIDAD/,        // 28
    /ERES/,             // 29
    /ARMAS/,            // 30
    /ARMA/              // 31
];

$('#usuario').on('keydown', function(e) {
    if (e.which == 13) {
        e.preventDefault();
        cadena = $("#usuario").val();
        cadena = cadena.toUpperCase();
        var se_encuentra = false;
        for (var i = 0; i < arreglo.length; i++) {
            if (arreglo[i].test(cadena)) {
                filtro(arreglo[i])
                se_encuentra = true;
                break;
            }
        }
        if (se_encuentra == false) {
            Respuesta(404)
        }
    }
});

function filtro(palabra) {
    let Cual = RegExp("(CUÁL|CUAL)"),
        Como = RegExp("(CÓMO|COMO)"),
        Tu = RegExp("(TÚ|TU|TUS)"),
        Quien = RegExp("(QUIEN|QUIENES)"),
        Tiene = RegExp("(TIENE|TIENES)"),
        Tengo = RegExp("(TENÉS|TENES|TENGO)"),
        Eres = RegExp("(ERES)"),
        Estas = RegExp("(ESTÁS|ESTAS)"),
        Cuanto = RegExp("(CUÁNTO|CUANTO|CUÁNTOS|CUANTOS)"),
        Usas = RegExp("(USA|USAS)"),
        Donde = RegExp("(DONDE|DÓNDE)"),
        Que = RegExp("(QUÉ|QUE)");

    // NOMBRE, LLAMAS
    if (
        (Cual.test(cadena) || Como.test(cadena)) &&
        (palabra == arreglo[0] || palabra == arreglo[1])
    ) {
        Respuesta(1)
    }
    // CIUDAD, VIVES, DONDE
    else if (
        (Eres.test(cadena) || Donde.test(cadena)) &&
        (palabra == arreglo[2] || palabra == arreglo[3] || palabra == arreglo[4])
    ) {
        Respuesta(2)
    }
    // PADRES, MAMÁ, MAMA, PADRE, PAPÁ, PAPA
    else if (
        (Quien.test(cadena)) &&
        (palabra == arreglo[5] || palabra == arreglo[6] || palabra == arreglo[7] || palabra == arreglo[8] || palabra == arreglo[9] || palabra == arreglo[10])
    ) {
        Respuesta(3)
    }
    // HABILIDAD, HABILIDADES, PODER, ESPECIALIDAD, SUPERPODERES
    else if (
        (Que.test(cadena) || Tiene.test(cadena) || Cual.test(cadena)) &&
        (palabra == arreglo[11] || palabra == arreglo[12] || palabra == arreglo[13] || palabra == arreglo[14] || palabra == arreglo[15])
    ) {
        Respuesta(4)
    }
    // ENEMIGO, NÉMESIS, NEMESIS
    else if (
        (Quien.test(cadena) || Tu.test(cadena)) &&
        (palabra == arreglo[16] || palabra == arreglo[17] || palabra == arreglo[18])
    ) {
        Respuesta(5)
    }
    // CASADO, DIVORCIADO, SOLTERO, DISPONIBLE, PAREJA
    else if (
        (Eres.test(cadena) || Tiene.test(cadena) || Estas.test(cadena)) &&
        (palabra == arreglo[19] || palabra == arreglo[20] || palabra == arreglo[21] || palabra == arreglo[22] || palabra == arreglo[23])
    ) {
        Respuesta(6)
    }
    // HIJO, HIJOS, HIJAS, HIJA
    else if (
        (Cuanto.test(cadena) || Tiene.test(cadena)) &&
        (palabra == arreglo[24] || palabra == arreglo[25] || palabra == arreglo[26] || palabra == arreglo[27])
    ) {
        Respuesta(7)
    }
    // IDENTIDAD, ERES
    else if (
        (Tu.test(cadena) || Quien.test(cadena)) &&
        (palabra == arreglo[28] || palabra == arreglo[29])
    ) {
        Respuesta(8)
    }
    // ARMAS, ARMA
    else if (
        (Usas.test(cadena) || Que.test(cadena) || Tiene.test(cadena)) &&
        (palabra == arreglo[30] || palabra == arreglo[31])
    ) {
        Respuesta(9)
    }
    else {
        Respuesta(404)
    }
}

function Respuesta(clave) {
    switch (clave) {
        case 1:
            mensaje = "Yo soy Batmaaan… o también conocido como Bruce Wayne, pero es un secreto"
            break;
        case 2:
            mensaje = "Vivo en la mansión Wayne, aunque ya prácticamente en una cueva debajo de la mansión, ubicada en Gotham"
            break;
        case 3:
            mensaje = "Mis padres son Thomas y Martha Wayne"
            break;
        case 4:
            mensaje = "Soy el mejor detective del mundo, y conozco todo tipo de artes marciales, además de ser lo suficientemente (el más) inteligente como para desarrollar armamento y artilugios propios"
            break;
        case 5:
            mensaje = "Mi peor villano es Superman, digo… es el Joker"
            break;
        case 6:
            mensaje = "Tuve un hijo con Talia al Ghul llamado Damian, y actualmente estoy comprometido con Selina Kyle (Catwoman/Gatubela)"
            break;
        case 7:
            mensaje = "Tengo 4 hijos, 3 de ellos adoptivos. Dick Grayson (mi favorito), Jason Todd (El Joker lo mató pero ya está viviendo tranquilamente entre nosotros) y Tim Drake (Todo un verdadero detective, aunque no más que yo) y mi hijo biológico Damian Wayne no es el mejor hijo que digamos"
            break;
        case 8:
            mensaje = "No muchos conocen mi verdadera identidad, solo mis 4 hijos, Alfred (mi mayordomo), Batgirl, Catwoman, James Gordon, Superman, Wonder Woman, etc, y unos cuantos pocos más"
            break;
        case 9:
            mensaje = "Utilizo todo tipo de armas, excepto armas de fuego, las rechazo ya que mis padres murieron delante de mí a causa de una de estas armas en medio de un callejón"
            break;
        default:
            mensaje = "No se que es lo que me quieres decir";
            break;
    }
    $("#salida").text(mensaje);
}