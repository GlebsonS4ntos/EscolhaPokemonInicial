const pokemonsIniciaisFlip= document.querySelectorAll(".imagemPokemonInicialFlip");
const pokemonsIniciais= document.querySelectorAll(".imagemPokemonInicial");

async function ExibirEscolhaPokemon(pokemon){
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(apiResponse.status === 200){
        const dataApi =  await apiResponse.json();
        for(i = 0; i < pokemonsIniciaisFlip.length; i++ ){
            const dataSrcImagemFlip = pokemonsIniciaisFlip[i].getAttribute("src");
            const dataSrcImagem = pokemonsIniciais[i].getAttribute("src")
            if(dataSrcImagemFlip == "" && dataSrcImagem == ""){
                pokemonsIniciaisFlip[i].src = dataApi['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
                pokemonsIniciais[i].src = dataApi['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
                break;
            }
        }
    }else{
        console.log("Deu merda a api caiu");
    }
} 

ExibirEscolhaPokemon("bulbasaur");
ExibirEscolhaPokemon("charmander");
ExibirEscolhaPokemon("squirtle");
ExibirEscolhaPokemon("pikachu");