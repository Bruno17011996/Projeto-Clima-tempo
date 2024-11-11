let chave = "2746cc7aaed0d7cc33008e809cfb6a2d";

function colocarNaTela(dados) {
  console.log(dados);

  document.querySelector(".cidade").innerHTML = "tempo em " + dados.name;
  document.querySelector(".tempo").innerHTML =
    Math.floor(dados.main.temp) + "°C";
  document.querySelector(".descricao").innerHTML = dados.weather[0].description;
  document.querySelector(".Umidade").innerHTML = dados.weather[0].description;
  document.querySelector(".nuvem").src =
    "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}

async function buscarCidade(cidade) {
  let dados = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cidade +
      "&appid=" +
      chave +
      "&lang=pt_br" +
      "&units=metric"
  ).then((resposta) => resposta.json());

  colocarNaTela(dados);
}

function cliqueiNoBotao() {
  let cidade = document.querySelector(".input-cidade").value;

  buscarCidade(cidade);
}
