

function preencherFormulario(dados) {
    document.getElementById("Nome").textContent = "Nome do jogador: " + dados.result.name;
    document.getElementById("trofeus").textContent = "Troféus: " + dados.result.trophies;
    document.getElementById("maior_num_trofeus").textContent = "Maior número de troféus: " + dados.result.bestTrophies;
    document.getElementById("arena").textContent = "Arena: " + dados.result.arena.name;
    document.getElementById("Vitorias").textContent = "Vitórias: " + dados.result.wins;
    document.getElementById("derrotas").textContent = "Derrotas: " + dados.result.losses;
    document.getElementById("Vitorias_3coroas").textContent = "Vitórias com 3 coroas: " + dados.result.threeCrownWins;
    document.getElementById("Total_partidas").textContent = "Total de partidas: " + dados.result.battleCount;
    document.getElementById("Total_doacoes").textContent = "Total de doações: " + dados.result.totalDonations;
}


async function pesquisarTag() {
    const tag = document.getElementById("tag")
    var tagValue = tag.value;
    console.log(tagValue)
    
    const url = `https://cors-anywhere.herokuapp.com/https://api.wibu-api.eu.org/api/game/royale/player?playerTag=%23${tagValue}`

    
    const dados = await fetch(url)
    console.log(dados)
    const DADOS = await dados.json()
    console.log(DADOS)
    if (DADOS.hasOwnProperty("erro")){
        document.getElementById("Nome").textContent = "Jogador não encotrado"
    }else{
        preencherFormulario(DADOS)
    }

}

document.getElementById("tag").addEventListener("focusout", pesquisarTag)
