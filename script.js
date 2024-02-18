const abas = document.querySelectorAll('.abas li a');
const conteudoAbas = document.querySelectorAll('.conteudo-aba');

abas.forEach((aba, index) => {
  aba.addEventListener('click', () => {
    abas.forEach(aba => aba.classList.remove('ativo'));
    conteudoAbas.forEach(conteudo => conteudo.classList.remove('ativo'));
    aba.classList.add('ativo');
    conteudoAbas[index].classList.add('ativo');
  });
});
