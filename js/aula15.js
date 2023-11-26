// Variáveis
const cxNota1 = document.querySelector("#nota1");
const cxNota2 = document.querySelector("#nota2");
const btnCalcular = document.querySelector("#btnCalcular");
const btnLimpar = document.querySelector("#btnLimpar");
const cxMedia = document.querySelector("#media");
const resultadoSituacao = document.querySelector("#situacao");

// Funções
function calcularMedia(nota1, nota2) {
  const media = (nota1 + nota2) / 2;
  return media;
}

function definirSituacao(resultadoMedia) {
  let situacao = "";

  if (resultadoMedia >= 7) {
    situacao = "Aprovado!";
    resultadoSituacao.classList.add("aprovado");
  } else if (resultadoMedia >= 5 && resultadoMedia <= 6) {
    situacao = "Recuperação!";
    resultadoSituacao.classList.add("recuperacao");
  } else {
    situacao = "Reprovado!";
    resultadoSituacao.classList.add("reprovado");
  }

  return situacao;
}

function verificador(nota1, nota2) {
  if (nota1 === null || nota2 === null) {
    // Verifica se qualquer um dos campos é nulo
    alert("É necessário digitar um valor em ambos os campos...");
    return false; // Retorna falso se um dos campos for nulo
  } else {
    return true; // Retorna verdadeiro se ambos os campos estiverem preenchidos
  }
}

// Eventos
btnCalcular.addEventListener("click", (e) => {
  const nota1 = parseFloat(cxNota1.value);
  const nota2 = parseFloat(cxNota2.value);
  if (verificador(nota1, nota2)) {
    const resultadoMedia = calcularMedia(nota1, nota2);
    cxMedia.value = resultadoMedia;

    const situacao = definirSituacao(resultadoMedia);
    resultadoSituacao.textContent = situacao;
  }

  e.preventDefault();
});

btnLimpar.addEventListener("click", (e) => {
  cxNota1.value = "";
  cxNota2.value = "";
  cxMedia.value = "";

  resultadoSituacao.textContent = ""; // Remova o texto da situação

  resultadoSituacao.classList.remove("aprovado");
  resultadoSituacao.classList.remove("reprovado");
  resultadoSituacao.classList.remove("recuperacao");

  e.preventDefault();
});
