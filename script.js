

const etapasConcluidas = new Set();
const totalEtapas = 8;
function atualizarProgr(numeroEtapa){
    etapasConcluidas.add(numeroEtapa)
    const porcentagem = Math.round((etapasConcluidas.size/totalEtapas)*100)
    document.getElementById("texto-progresso").textContent = porcentagem + '%';
    document.getElementById("barra-preenchimento").style.width = porcentagem + '%';
}


let btnEnergia = document.getElementById("btn-energia")

btnEnergia.addEventListener('click', atualizarProgr)