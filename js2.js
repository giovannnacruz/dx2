function teste(){
    var texto = document.querySelector("h1");
    var moita = document.querySelector("h2");
    var davi = document.querySelector("h3");
    var Music = 0;
    var valor = document.querySelector('#valor').value;
        
    while(Music < valor){
        texto.innerHTML = `Numero de alunos ${Music + 1}`;
        moita.innerHTML += (`Escreva o nome do aluno: <input type="text" placeholder="Escreva o nome do aluno"> Escreva a nota do aluno: <input type="number" placeholder="Escreva o numero da nota"> <br>`);
        Music++;
        davi.innerHTML =  `<button onclick="encontrarMaiorNumeroComNome()">Qual o maior?</button>`
    }
            
    }
    function encontrarMaiorNumeroComNome() {
        var text = document.querySelector('#meu');
        // Seleciona todos os inputs do tipo text para nome e number para valor
        var inputsNome = document.querySelectorAll('input[type="text"]');
        var inputsNumero = document.querySelectorAll('input[type="number"]');
        
        // Inicializa variáveis para armazenar o maior número e o nome correspondente
        var maiorNumero = -Infinity;
        var nomeMaiorNumero = '';
      
        // Itera sobre os inputs de número e seus correspondentes de nome
        for (var i = 0; i < inputsNumero.length; i++) {
          var numero = parseFloat(inputsNumero[i].value);
          var nome = inputsNome[i+1].value;
          
          if (!isNaN(numero) && nome) {
            if (numero > maiorNumero) {
              maiorNumero = numero;
              nomeMaiorNumero = nome;
            }
          }
        }
      
        // Verifica se foi encontrado um maior número
        if (maiorNumero !== -Infinity) {
          document.getElementById("meu").innerHTML = "A maior nata é do(a)" + nomeMaiorNumero + " e possui uma nota "  + maiorNumero;
        } else {
            document.getElementById("meu").innerHTML = ('isso náo existe meu fi.');
        }
      }