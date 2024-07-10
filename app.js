/*
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/


const anoEnCurso = new Date().getFullYear();

document.getElementById('year').textContent = anoEnCurso;

function encriptarTexto() {
    let textoEncriptado = '';   
    let texto = document.getElementById('textoUsuario').value;
    //alert('boton a encriptar: '+ texto);

    if(!validarTexto(texto)) {
        alert('Error: solo se permiten minúsculas, sin acentos ni carcateres especiales');
        return;
    }

    for(var i=0;i<texto.length;i++) {
        switch(texto[i]) {
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
            default:
                textoEncriptado += texto[i];
        }
    }

    limpiarSeccionEncriptado();

    let principalEncriptado = document.querySelector('.principal__texto__encriptado');
    principalEncriptado.innerHTML = `<p class="texto__procesado">${textoEncriptado}</p>`;
    principalEncriptado.insertAdjacentHTML('beforeend', '<button class="botones boton__secundario" id="copiar" onclick="copiarTexto()">Copiar</button>');
    
}


function limpiarSeccionEncriptado() {
    let sectionEncriptado = document.querySelector('.principal__texto__encriptado');

    if(sectionEncriptado) {
        let imagenMuneco = sectionEncriptado.querySelector('.principal__imagen');
        let mensajePrimario = sectionEncriptado.querySelector('h2');
        let mensajeSecundario = sectionEncriptado.querySelector('p');

        if (imagenMuneco) {
            imagenMuneco.style.display = 'none';
        }
        if(mensajePrimario) {
            mensajePrimario.style.display = 'none';
        }
        if(mensajeSecundario) {
            mensajeSecundario.style.display = 'none';
        }
    }
}

function copiarTexto() {
    let textoProcesado = document.querySelector('.texto__procesado').innerHTML;
    const copiarConetnido = async () => {
        try {
            await navigator.clipboard.writeText(textoProcesado);
            alert('Texto ha sido copiado con exito!');
        } catch (err) {
            alert('Error al copiar: ', err);
        }
    };
    copiarConetnido();
}

function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function desencriptarTexto() {
    let texto = document.getElementById('textoUsuario').value;
    if(!validarTexto(texto)) {
        alert('Error: solo se permiten minúsculas, sin acentos ni carcateres especiales');
        return;
    }

    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    limpiarSeccionEncriptado();

    let principalEncriptado = document.querySelector('.principal__texto__encriptado');
    principalEncriptado.innerHTML = `<p class="texto__procesado">${textoDesencriptado}</p>`;
    principalEncriptado.insertAdjacentHTML('beforeend', '<button class="botones boton__secundario" id="copiar" onclick="copiarTexto()">Copiar</button>');
}