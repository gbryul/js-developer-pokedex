const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
let loadMoreDetails
let moreDetails 

const maxRecords = 151
const limit = 10
let offset = 0;


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
         <div class="loadMoreDetails">
            <button id="loadMoreDetails" type="button">
                Details
            </button>
            </div>
            <div id = "moreDetails" class = "moreDetails">
            <span class="height"> Height: ${pokemon.height}</span>
            <span class="weight"> Weight:${pokemon.weight}</span>
            <ol class="abilities">
                 Abilities:
                 ${pokemon.abilities.map((ability) => `<li class="ability ${ability}">${ability}</li>`).join('')}
             </ol>
        </li>
    `
}

function loadPokemonMoreDetails() {
    loadMoreDetails = document.getElementById('loadMoreDetails')
    moreDetails = document.getElementById('moreDetails')
    let display = 'none'
    loadMoreDetails.addEventListener('click', () => {
        if (display == 'none') {
            moreDetails.style.display = 'block';
            display = 'block';
        }
        else {
            moreDetails.style.display = 'none';
            display = 'none';
        }
    })
    }

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
        loadPokemonMoreDetails()
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




    
  

