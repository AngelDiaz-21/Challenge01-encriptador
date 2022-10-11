const textWrite  = document.querySelector('.text-write');
const textResult = document.querySelector('.text-result');
const buttonCopy = document.querySelector('.btn-copy');
const buttonEncriptar = document.getElementById("btn-encriptar");
const buttonDesencriptar = document.getElementById("btn-desencriptar");
const warningBtn = document.querySelector('.warning-button');

const btnEncrypt = () =>{
    const textToEncrypt = textWrite.value;
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    const encryptedText = replaceText(matrizCodigo, textToEncrypt);
    stylesOfTheResultMessage(encryptedText);
}

const btnDesencrypt = () => {
    const textToDesencrypt = textWrite.value;
    let matrizCodigo = [['enter', 'e'], ['imes', 'i'], ['ai', 'a'], ['ober', 'o'], ['ufat', 'u']];
    const desencryptText = replaceText(matrizCodigo, textToDesencrypt);
    stylesOfTheResultMessage(desencryptText);
}

const replaceText = (matrizCodigo, text) =>{
    text = text.toLowerCase();
    for (let index = 0; index < matrizCodigo.length; index++) {
        if (text.includes(matrizCodigo[index][0])) {
            text = text.replaceAll(matrizCodigo[index][0], matrizCodigo[index][1]);
        }
    }
    return text;
}

const stylesOfTheResultMessage = (text) => {
    textResult.value = text;
    textResult.style.backgroundImage = 'none';
    buttonCopy.style.display = 'block';
    buttonCopy.style.marginBottom = '15px';
}

const btnCopy = async () =>{
    try {
        await navigator.clipboard.writeText(textResult.value);
        textResult.value = "";
        buttonCopy.style.display = 'none';
        alert("¡Texto copiado!");
        getScreenSizeToChangeImage();
    } catch (error) {
        alert('Error al copia el texto', error)
        throw error
    }
}

const getScreenSizeToChangeImage = () => {
    if(screen.width < 720) return textResult.style.backgroundImage = "url('assets/mensaje-noEncontrado.svg')";
    return (screen.width < 1200) ? textResult.style.backgroundImage = "url('assets/mensaje-noEncontrado720.svg')" 
                                    : textResult.style.backgroundImage = "url('assets/buscando-personaje.svg')"
};

function validationToActivateButtons(valor) {
    if (valor.length >= 3) {
        buttonEncriptar.disabled = false;
        buttonDesencriptar.disabled = false;
        buttonEncriptar.classList.remove("disabled");
        buttonDesencriptar.classList.remove("disabled");
        warningBtn.style.display = 'none';
    } else {
        buttonEncriptar.disabled = true;
        buttonDesencriptar.disabled = true;
        buttonEncriptar.classList.add("disabled");
        buttonDesencriptar.classList.add("disabled");
        warningBtn.style.display = 'block';
    }
}