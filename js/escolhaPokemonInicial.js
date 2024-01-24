const imagemPokemonInicial = document.querySelectorAll(".imagemPokemonInicial");

async function ExibirEscolhaPokemon(pokemon){
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(apiResponse.status === 200){
        const dataApi =  await apiResponse.json();
        for(i = 0; i < imagemPokemonInicial.length; i++ ){
            const dataSrd = imagemPokemonInicial[i].getAttribute("src");
            if(dataSrd == ""){
                imagemPokemonInicial[i].src = dataApi['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
                break;
            }
        }
    }else{
        console.log("Deu merda");
    }
} 

ExibirEscolhaPokemon("bulbasaur");
ExibirEscolhaPokemon("charmander");
ExibirEscolhaPokemon("squirtle");
ExibirEscolhaPokemon("pikachu");

const containerPokemonInicial = document.querySelector(".img_PokemonContainer");
const botao = document.querySelector(".botao");


function Rotacionar() {
    containerPokemonInicial.classList.add("rotacionarElemento");
    setTimeout(() => {
        containerPokemonInicial.classList.add("rotacionadoFinal");
        containerPokemonInicial.classList.remove("rotacionarElemento");
    }, 2001);
}

botao.addEventListener('click', Rotacionar);