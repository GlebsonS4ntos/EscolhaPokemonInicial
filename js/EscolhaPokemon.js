const escolhaPokemons = document.querySelectorAll('.navPorClick');
const containerFlip = document.querySelector('.containerPokemonFlip')

let ultimaAnimacaoEsconderOuAparecer = false;

escolhaPokemons.forEach((pokemon) => {
    if(pokemon.classList.length === 2){ 
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

function AnimacaoEsconderOuAparecer(){
    //Caso a ultima animacao for um true, quer dizer que ouve animacao de esconder, dai sera chamada a animacao de aparecer
    if(ultimaAnimacaoEsconderOuAparecer){ 
        containerFlip.style.transition = "left 1s ease";
        containerFlip.style.left = "-250px";
    }else{ //Caso a ultima animacao for false quer dizer que ouve animacao de aparecer, dai sera chamada a animacao de esconder
        containerFlip.style.transition = "left 1s ease";
        containerFlip.style.left = "-650px";
        ultimaAnimacaoEsconderOuAparecer = !ultimaAnimacaoEsconderOuAparecer; //troca o valor da variavel imediatamente
    }
}