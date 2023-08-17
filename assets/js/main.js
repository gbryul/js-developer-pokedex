const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function loadDetails(number){
    const moreDetails = []
    moreDetails[number] = document.getElementById(`moreDetails${number}`)


        if(moreDetails[number].style.display == "block"){
            moreDetails[number].style.display = "none"
        }
        else
        {
            moreDetails[number].style.display = "block"
        }
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">

            </div>
         <div class="loadMoreDetails">
            <button id="loadMoreDetails" onclick ="loadDetails(${pokemon.number})" type="button">
                Details
            </button>
            </div>
            <div id = "moreDetails${pokemon.number}" class = "moreDetails">
            <ol class = "heightWeight">
            Height: ${pokemon.height*10} cm | 
            Weight: ${pokemon.weight/10} kg
            </ol>
            <div id = "abilitiesStats" style= "display: flex;">
             <ol class="stats">
            Stats:
                 ${pokemon.statNames.map((statName, i) => `<li>${statName}: ${pokemon.statValues[i]}</li>`).join('').replaceAll('-',' ')}
             </ol>
            <ol class="abilities">
            Abilities:
                 ${pokemon.abilities.map((ability) => `<li class="ability ${ability}">${ability}</li>`).join('').replaceAll('-',' ')}
             </ol>
            </div>
            </div>
        </li>
    `
}


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')

        pokemonList.innerHTML += newHtml
    })
}

 loadPokemonItens(offset, limit)

 pokemonList


loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
    

})




    
  

