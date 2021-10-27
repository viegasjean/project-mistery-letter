const inptCartaTexto = document.getElementById('carta-texto');
const btCriarCarta = document.getElementById('criar-carta');
const pCartaGerada = document.getElementById('carta-gerada');

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const inclinate = ['skewleft', 'skewright'];

function geraCarta(elem) {
  const randomStyle = style[Math.floor(Math.random() * style.length)];
  const randomSize = size[Math.floor(Math.random() * size.length)];
  const randomRotate = rotate[Math.floor(Math.random() * rotate.length)];
  const randomInclinate = inclinate[Math.floor(Math.random() * inclinate.length)];
  return elem.classList.add(randomStyle, randomSize, randomRotate, randomInclinate);
}

btCriarCarta.addEventListener('click', () => {
  pCartaGerada.innerHTML = '';
  if (inptCartaTexto.value === '' || inptCartaTexto.value === ' ') {
    const divPalavra = document.createElement('div');
    divPalavra.innerText = 'Por favor, digite o conteúdo da carta.';
    divPalavra.id = 'carta-gerada';
    pCartaGerada.appendChild(divPalavra);
  } else {
    const frase = inptCartaTexto.value.split(' ');
    // eslint-disable-next-line no-restricted-syntax
    for (const palavra of frase) {
      const divPalavra = document.createElement('div');
      divPalavra.innerText = palavra;
      geraCarta(divPalavra);
      pCartaGerada.appendChild(divPalavra);
    }
  }
});
