const areaTexto = document.querySelector(".text-area");
const areaSaida = document.querySelector(".saida");


function btncriptografar() {
    const textoCriptografado = criptografar(areaTexto.value);
    areaSaida.value = textoCriptografado;
    areaTexto.value = "";

}


function criptografar(stringCriptografada) {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    stringCriptografada = stringCriptografada.toLowerCase();


    for(let i = 0; i <matrizCodigo.length; i++) {
        if(stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringCriptografada
}


function btndescriptografar() {
    const textoDescriptografado = descriptografar(areaTexto.value);
    areaSaida.value = textoDescriptografado;
    areaTexto.value = "";

}


function descriptografar(stringDescriptografada) {
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    stringDescriptografada = stringDescriptografada.toLowerCase();


    for(let i = 0; i <matrizCodigo.length; i++) {
        if(stringDescriptografada.includes(matrizCodigo[i][1])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescriptografada
}

function copiarTexto() {
    let textoCopiado = areaSaida.value;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        alert('Texto copiado!');
    }).catch(err => {
        console.error('Não foi possível copiar: ', err);
    });
}