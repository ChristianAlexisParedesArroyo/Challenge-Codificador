const campoTexto = document.querySelector("#encriptarTexto");
const campoMensaje = document.querySelector("#mostrarMensaje");


let matizEncriptacion = [["e", "enter"],
                    ["i", "imes"],
                    ["a", "ai"],
                    ["o", "ober"],
                    ["u", "ufat"]];


function btnEncriptar(){
    const texto = encriptar(campoTexto.value);
    campoMensaje.value = texto;
}

function btnDesencriptar(){
    const texto2 = desencriptar(campoTexto.value);
    campoMensaje.value = texto2;
}

function encriptar(fraseEncriptada){
    
    for(i=0; i<matizEncriptacion.length; i++){
        if(fraseEncriptada.includes(matizEncriptacion[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matizEncriptacion[i][0],
                matizEncriptacion[i][1]
            )
        }
    }
    return fraseEncriptada
}

function desencriptar(fraseDesencriptada){
    
    for(i=0; i<matizEncriptacion.length; i++){
        if(fraseDesencriptada.includes(matizEncriptacion[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matizEncriptacion[i][1],
                matizEncriptacion[i][0]
            )
        }
    }
    return fraseDesencriptada
}

function btnCopiar() {
    let copyText = document.querySelector("#mostrarMensaje");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#copiar").addEventListener("click", copy);
  