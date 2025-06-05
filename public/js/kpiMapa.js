async function carregarKPI() {
    try {
        const resposta = await fetch("http://localhost:3333/contadores/kpi");
        const dados = await resposta.json();

        const kpiContainer = document.getElementById("kpi-container");
        kpiContainer.innerHTML = `${dados.nome}:
        ${dados.percentual}%`
    } catch (erro) {
        console.error("Erro ao carregar KPI:", erro);
    }
}