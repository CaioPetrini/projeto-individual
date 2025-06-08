var idUsuario = sessionStorage.ID_USUARIO;

async function carregarKPI2() {
    try {
        const resposta = await fetch(`http://localhost:3333/contadores/kpi2${idUsuario}`);
        const dados = await resposta.json();
      console.log(dados);
        const kpi2Container = document.getElementById("kpi2-container");
        kpi2Container.innerHTML = `${dados.Mapa}:
        ${dados.porcentagem}`
          } catch (erro) {
        console.error("Erro ao carregar KPI:", erro);
    }
}