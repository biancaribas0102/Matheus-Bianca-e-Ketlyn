const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha_botao');

botoes[0].onclick = diminuitamanho;
botoes[1].onclick = aumentatamanho;

function diminuitamanho(){
    if (tamanhoSenha > 1){
        //tamanhoSenha =tamanhoSenha-1;
          tamanhoSenha--;
    }      
    numeroSenha.textContent = tamanhoSenha;
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
        //tamanhoSenha = tamanhoSenh+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}

console.log(botoes);