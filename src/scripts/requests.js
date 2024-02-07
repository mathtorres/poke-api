    async function consomePokeAPI() {
        const loading = document.querySelector("#loading");
        const APIPokemons = await fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => response.json())
        .catch((error) => console.log(error));

        return APIPokemons;
    }
    
    const loading = document.querySelector("#loading");
    const searchInput = document.querySelector("input");
    const searchBtn = document.querySelector("#searchBtn");
    
    async function getPokemonByName(pokemonName) {
        const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
        {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
        }
        )
        .then((res) => res.json())
        .then((res) => {
            return res;
        });
        loading.style.display = "none";
    
        return pokemon;
    }
    
    function renderSearch(pokemonName) {
        const searchInput = document.querySelector("input");
        const searchBtn = document.querySelector("#searchBtn");
        const pokemon = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    
        searchBtn.addEventListener("click", async () => {
        if (searchInput.value == 0) {
            searchInput.innerHTML = "";
            renderPokemons();
        } else {
            search(
            await getPokemonByName(searchInput.value.toLowerCase().trim())
            );
        }
    
        });
    }
    
    async function search(pokemon) {
        const block = document.querySelector("ul");
    
        block.innerHTML = "";
    
        block.insertAdjacentHTML(
            "beforeend",
            `
        <li>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt=${pokemon.name}>
            <h3 class="nomePokemon">${pokemon.name}</h3>
        </li>
        `
        );
    
    }
    
consomePokeAPI();
renderSearch();