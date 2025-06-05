async function carregarKPI() {
    try {
        const resposta = await fetch("http://localhost:3333/contadores/kpi2");
        const dados = await resposta.json();

        const kpi2Container = document.getElementById("kpi2-container");
        kpi2Container.innerHTML = `${dados.nome}:
        ${dados.percentual}%`
          } catch (erro) {
        console.error("Erro ao carregar KPI:", erro);
    }
}