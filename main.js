const textWrite  = document.querySelector('.text-write');
const textResult = document.querySelector('.text-result');
const buttonCopy = document.querySelector('.btn-copy');

const btnEncriptar = () =>{
    const encryptedText = encriptar(textWrite.value);
    textResult.value = encryptedText;
    textResult.style.backgroundImage = 'none';
    buttonCopy.style.display = 'block';
    buttonCopy.style.marginBottom = '15px';
}

const btnCopy = () =>{
    textResult.select();
    navigator.clipboard.writeText(textResult.value);
    textResult.value = "";
    alert("¡Texto copiado!");
}

const encriptar = (encryptedText) =>{
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    encryptedText  = encryptedText.toLowerCase();

    for (let index = 0; index < matrizCodigo.length; index++) {
        if (encryptedText.includes(matrizCodigo[index][0])) {
            encryptedText = encryptedText.replaceAll(matrizCodigo[index][0], matrizCodigo[index][1]);
        }
    }
    return encryptedText;
}