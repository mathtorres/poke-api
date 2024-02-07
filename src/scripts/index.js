async function renderPokemons() {
    let loading = document.querySelector("#loading");
    const block = document.querySelector("ul");

    const listaDePokemons = await consomePokeAPI();

    listaDePokemons.results.forEach((pokemon) => {
        const positionPokedex = pokemon.url.slice(34, -1);

        setTimeout(() => {
        loading.innerText = "";
        block.insertAdjacentHTML(
            "beforeend",
            `
                <li>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${positionPokedex}.png" alt=${pokemon.name}>
                    <h3 class="nomePokemon">${pokemon.name}</h3>
                </li>
            `
        );
        }, 2000);
    });
}

renderPokemons();