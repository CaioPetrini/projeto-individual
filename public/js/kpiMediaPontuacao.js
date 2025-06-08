var idUsuario = sessionStorage.ID_USUARIO;

async function carregarKPI3() {
    try {
        const resposta = await fetch(`http://localhost:3333/tentativa/kpi3${idUsuario}`);
        const dados = await resposta.json();
      console.log(dados);
        const kpi3Container = document.getElementById("kpi3-container");
        kpi3Container.innerHTML = `${dados[0].Média}`
          } catch (erro) {
        console.error("Erro ao carregar KPI:", erro);
    }
}