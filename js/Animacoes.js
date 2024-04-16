const escolhaPokemons = document.querySelectorAll('.navPorClick');
const containerFlip = document.querySelector('.containerPokemonFlip');
const containerPesquisar = document.querySelector('.pesquisarPokemon');
const inputEscolhaPokemon = document.querySelector(".pesquisar");
const botaoPesquisar = document.querySelector('.botao');
const infoPokemon = document.querySelectorAll(".informacao");

import {PesquisarPokemon} from "./PesquisaPokemon.js";

let ultimaAnimacaoEsconderOuAparecer = false;

escolhaPokemons.forEach((pokemon) => {
    if(pokemon.classList.length === 2){  //Verifica se entre as classes das lis o tamanho é 2, caso for quer dizer que é um pokemon ja que a lupa so em 1 
        pokemon.addEventListener('click', () =>{
            AdicionarAnimacaoDeBackgound(pokemon);
            //Caso a ultima animacao for um true, quer dizer que ouve animacao de esconder, dai sera chamada a animacao de aparecer
            if(ultimaAnimacaoEsconderOuAparecer){ 
                AnimacaoEsconderOuAparecer();
            }
            setTimeout(() => {
                AnimacaoFlip(pokemon);
            }, ultimaAnimacaoEsconderOuAparecer? 1000: 0);
            if(ultimaAnimacaoEsconderOuAparecer){
                //troca o valor da variavel, isso tem que ocorrer apos o flip pois caso ocora antes vai bugar o setTimeOut
                ultimaAnimacaoEsconderOuAparecer = !ultimaAnimacaoEsconderOuAparecer;
            }
        });
    }else{
        pokemon.addEventListener('click', () =>{ 
            AdicionarAnimacaoDeBackgound(pokemon);
            //Caso a ultima animacao for false quer dizer que ouve animacao de aparecer, dai sera chamada a animacao de esconder
            if(!ultimaAnimacaoEsconderOuAparecer){
                AnimacaoEsconderOuAparecer();
            }
         });
    }
    
});

function AdicionarAnimacaoDeBackgound(pokemon){
    for(var i = 0; i < escolhaPokemons.length; i++){
        if(escolhaPokemons[i].classList.contains("animacaoBackground") && escolhaPokemons[i] !== pokemon){
            escolhaPokemons[i].classList.remove('animacaoBackground');
        }
    }
    pokemon.classList.add('animacaoBackground');
} 

function AnimacaoFlip(pokemon) {
    let anguloDeRotacao;

    if (pokemon.classList.contains("bulbasaur")) {
        anguloDeRotacao = 180;
        PesquisarPokemon("bulbasaur");
    } else if (pokemon.classList.contains("charmander")) {
        anguloDeRotacao = 90;
        PesquisarPokemon("charmander");
    } else if (pokemon.classList.contains("squirtle")) {
        anguloDeRotacao = 270;
        PesquisarPokemon("squirtle");
    } else if (pokemon.classList.contains("pikachu")) {
        anguloDeRotacao = 0;
        PesquisarPokemon("pikachu");
    }

    containerFlip.style.transition = "transform 2s ease-in-out";
    containerFlip.style.transform = `rotate(${anguloDeRotacao}deg)`;
}

function AnimacaoEsconderOuAparecer(){
    //Caso a ultima animacao for um true, quer dizer que ouve animacao de esconder, dai sera chamada a animacao de aparecer
    if(ultimaAnimacaoEsconderOuAparecer){ 
        AnimacaoFadeOutPesquisarPokemon();
        containerFlip.style.transition = "left 1s ease";
        containerFlip.style.left = "-250px";
    }else{ //Caso a ultima animacao for false quer dizer que ouve animacao de aparecer, dai sera chamada a animacao de esconder
        containerFlip.style.transition = "left 1s ease";
        containerFlip.style.left = "-650px";
        AnimacaoFadeInPesquisarPokemon();
        AnimacaoEscrever(infoPokemon[0].querySelector("span"), "----"); //volta as infos pra o padrão normal 
        AnimacaoEscrever(infoPokemon[1].querySelector("span"), "--/--"); 
        AnimacaoEscrever(infoPokemon[2].querySelector("span"), "-- | --");
        ultimaAnimacaoEsconderOuAparecer = !ultimaAnimacaoEsconderOuAparecer; //troca o valor da variavel imediatamente
    }
}

function AnimacaoFadeInPesquisarPokemon(){
    containerPesquisar.style.transition = "opacity 2s ease";
    containerPesquisar.style.opacity = "100";
}
function AnimacaoFadeOutPesquisarPokemon(){
    containerPesquisar.style.transition = "opacity 1s ease";
    containerPesquisar.style.opacity = "0";
}

botaoPesquisar.addEventListener('click', () => {
    PesquisarPokemon(inputEscolhaPokemon.value.toLowerCase());
});

export function AnimacaoFadeInMensagemNotFound(){
    const mensagem = containerPesquisar.querySelector('span');
    mensagem.style.transition = "opacity 100ms ease";
    mensagem.style.opacity = "100";
}
export function AnimacaoFadeOutMensagemNotFound(){
    const mensagem = containerPesquisar.querySelector('span');
    mensagem.style.transition = "opacity 100ms ease";
    mensagem.style.opacity = "0";
}

export function AnimacaoEscrever(elemento, texto){
    elemento.textContent = "";
    const textoArray = texto.split(''); //transforma a string em um array pra percorrer e ir adicionando letra a letra
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.textContent += letra.toUpperCase();
        }, 50*i);  //vai fazer com que um caracter seja colocado um apos o outro em um intervalo de 50ms pra cada ja que multiplica pelo index      
    });
}