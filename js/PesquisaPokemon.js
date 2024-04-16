const pokemonsIniciaisFlip= document.querySelectorAll(".imagemPokemonInicialFlip"); 
const pokemonsIniciais= document.querySelectorAll(".imagemPokemonInicial");
const infoPokemon = document.querySelectorAll(".informacao");

import{AnimacaoFadeInMensagemNotFound, AnimacaoFadeOutMensagemNotFound, AnimacaoEscrever} from "./Animacoes.js"; 

async function ExibirEscolhaPokemon(pokemon){
    try{
        const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if(apiResponse.status === 200){
            const dataApi =  await apiResponse.json();
            for(var i = 0; i < pokemonsIniciaisFlip.length; i++ ){
                const dataSrcImagemFlip = pokemonsIniciaisFlip[i].getAttribute("src");
                const dataSrcImagem = pokemonsIniciais[i].getAttribute("src")
                if(dataSrcImagemFlip == "" && dataSrcImagem == ""){ //verifico se ja esta preenchido caso n esteja adiciono a imagem
                    pokemonsIniciaisFlip[i].src = dataApi.sprites.versions["generation-v"]["black-white"].animated.front_default;
                    pokemonsIniciais[i].src = dataApi.sprites.versions["generation-v"]["black-white"].animated.front_default;
                    break;
                }
            }
        }
    } catch (error) {
        console.error("Ocorreu um erro:", error);
    }
}

ExibirEscolhaPokemon("bulbasaur");
ExibirEscolhaPokemon("charmander");
ExibirEscolhaPokemon("squirtle");
ExibirEscolhaPokemon("pikachu");

export async function PesquisarPokemon(pokemonNome) {
    try {
        const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNome}`);
        if (apiResponse.status === 200) {
            AnimacaoFadeOutMensagemNotFound();
            const dataApi = await apiResponse.json();
            const nomePokemon = dataApi.name;
            const habilidadesPokemon = dataApi.abilities.map(ability => ability.ability.name).join(' | ');
            const tiposPokemon = dataApi.types.map(type => type.type.name).join('/');

            AnimacaoEscrever(infoPokemon[0].querySelector("span"), nomePokemon);
            AnimacaoEscrever(infoPokemon[1].querySelector("span"), tiposPokemon); 
            AnimacaoEscrever(infoPokemon[2].querySelector("span"), habilidadesPokemon);
        } 
        if (apiResponse.status === 404) {
            AnimacaoFadeInMensagemNotFound();
        }
    } catch (error) {
        console.error("Ocorreu um erro:", error);
    }
}