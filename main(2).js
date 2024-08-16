const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
const numerosenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeross = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha_botao');
const camposenha = document


const botoes = document.querySelectorAll('.parametro-senha_botao');

botoes[0].onclick = diminuitamanho;
botoes[1].onclick = aumentatamanho;

function diminuitamanho(){
    if (tamanhoSenha > 1){
        //tamanhoSenha =tamanhoSenha-1;
          tamanhoSenha--;
    }      
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
        //tamanhoSenha = tamanhoSenh+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
geraSenha();

function geraSenha(){
    let senha = '';
    for(let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiusculas.length;
        numeroAleatorio = Math.floor[numeroAleatorio];
        senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    const campoSenha.value = senha;
}
