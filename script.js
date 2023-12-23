errores = 0;
acertado = 0;

const contenedorPalabras = document.getElementById('guessingWords');

function enviarTxt() {
    text = document.getElementById("textInput").value;
    if (text === "") {
        alert("El campo está vacío. Por favor, ingresa una palabra.");
    } else if (text.includes(" ")) {
        alert("La palabra no puede contener espacios.");
    } else {
        text = text.toUpperCase();

        selectWordHide();
        visibleHangingBoard();

        for (i = 1; text.length >= i; i++) {
            const h1 = document.createElement('h1');
            const div = document.createElement('div');
            div.appendChild(h1);
            contenedorPalabras.appendChild(div);
        }
    }
}

function selectWordHide() {
    document.getElementById("selectWord").style.display = "none";
}

function visibleHangingBoard() {
    document.getElementById("hangingBoard").style.display = "grid";
}

let letrasAdivinadas = []; // Mantener un registro de las letras adivinadas

function compareLetter(letra) {
    ponerPalabras = document.querySelectorAll('#guessingWords div h1');
    acertó = false;

    // Verificar si la letra ya ha sido adivinada
    if (letrasAdivinadas.includes(letra)) {
        return; // Salir de la función si la letra ya ha sido adivinada
    }

    for (i = 0; text.length > i; i++) {
        if (letra == text[i]) {
            ponerPalabras[i].innerHTML = letra;
            acertado = acertado + 1;
            acertó = true;
        }
    }

    if (acertó == true) {
        letrasAdivinadas.push(letra); // Agregar la letra a las letras adivinadas
    } else {
        errores = errores + 1;
        document.getElementById('contador').innerHTML = errores;
        const sours = `img/${errores}.png`;
        const imagen = document.getElementById('imagenes');
        imagen.src = sours;
    }
    gameOver();
}


function gameOver() {
    if (errores == 6) {
        document.getElementById('resultado').style.color = "red";
        document.getElementById('resultado').innerHTML = ('Lo lamento, has perdido');
        setTimeout(function () {
            location.reload();
        }, 2000);
    } else if (acertado == text.length) {
        document.getElementById('resultado').style.color = "green";
        document.getElementById('resultado').innerHTML = ('Muy bien, ganaste!!');
        setTimeout(function () {
            location.reload();
        }, 2000);
    }
}