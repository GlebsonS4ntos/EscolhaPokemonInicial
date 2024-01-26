const escolhaPokemons = document.querySelectorAll('.navPorClick');
const containerFlip = document.querySelector('.containerPokemonFlip')

escolhaPokemons.forEach((pokemon) => {
    if(pokemon.classList.length === 2){ 
        pokemon.addEventListener('click', () =>{
            AdicionarAnimacaoDeBackgound(pokemon);
            AnimacaoFlip(pokemon);
        });
    }else{
        pokemon.addEventListener('click', () =>{ 
            AdicionarAnimacaoDeBackgound(pokemon);
            //adicionar animacoes pra ir pra aparecer a tela de pesquisa
         });
    }
    
});

function AdicionarAnimacaoDeBackgound(pokemon){
    for(i = 0; i < escolhaPokemons.length; i++){
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
    } else if (pokemon.classList.contains("charmander")) {
        anguloDeRotacao = 90;
    } else if (pokemon.classList.contains("squirtle")) {
        anguloDeRotacao = 270;
    } else if (pokemon.classList.contains("pikachu")) {
        anguloDeRotacao = 0;
    }

    containerFlip.style.transition = "transform 2s ease-in-out";
    containerFlip.style.transform = `rotate(${anguloDeRotacao}deg)`;
}