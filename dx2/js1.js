function encontrarMaiorNumeroTocadas() {
    const numeroMusicas = parseInt(document.getElementById("numeroMusicas").value);
    const vezesTocadasInput = document.getElementById("vezesTocadas").value.split(" ").map(Number);

    if (vezesTocadasInput.length !== numeroMusicas) {
        alert("O número de músicas informado não coincide com a lista de vezes tocadas.");
        return;
    }

    const maiorNumeroTocadas = Math.max(...vezesTocadasInput);

    document.getElementById("resultado").innerHTML = `Maior número de vezes que uma música foi tocada: ${maiorNumeroTocadas}`;
}


