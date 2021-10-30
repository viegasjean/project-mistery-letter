const inptCartaTexto = document.getElementById('carta-texto');
const btCriarCarta = document.getElementById('criar-carta');
const pCartaGerada = document.getElementById('carta-gerada');
const pContador = document.getElementById('carta-contador');

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const inclinate = ['skewleft', 'skewright'];

function geraCarta(elem) {
  const randomStyle = style[Math.floor(Math.random() * style.length)];
  const randomSize = size[Math.floor(Math.random() * size.length)];
  const randomRotate = rotate[Math.floor(Math.random() * rotate.length)];
  const randomInclinate = inclinate[Math.floor(Math.random() * inclinate.length)];

  const classes = [randomStyle, randomSize, randomRotate, randomInclinate];

  elem.classList.add(classes[Math.floor(Math.random() * classes.length)]);
  elem.classList.add(classes[Math.floor(Math.random() * classes.length)]);
  elem.classList.add(classes[Math.floor(Math.random() * classes.length)]);
  elem.classList.add(classes[Math.floor(Math.random() * classes.length)]);
  return elem;
}

function mudarEstiloPalavra() {
  const palavras = document.getElementsByTagName('span');
  // eslint-disable-next-line no-restricted-syntax
  for (const palavra of palavras) {
    palavra.addEventListener('click', () => {
      palavra.className = '';
      geraCarta(palavra);
    });
  }
}

btCriarCarta.addEventListener('click', () => {
  pCartaGerada.innerHTML = '';
  if (inptCartaTexto.value === '' || inptCartaTexto.value === ' ') {
    const spanPalavra = document.createElement('span');
    spanPalavra.innerText = 'Por favor, digite o conteúdo da carta.';
    spanPalavra.id = 'carta-gerada';
    pCartaGerada.appendChild(spanPalavra);
  } else {
    const frase = inptCartaTexto.value.split(' ');
    // eslint-disable-next-line no-restricted-syntax
    for (const palavra of frase) {
      const spanPalavra = document.createElement('span');
      spanPalavra.innerText = palavra;
      geraCarta(spanPalavra);
      pCartaGerada.appendChild(spanPalavra);
    }
  }
  mudarEstiloPalavra();
  pContador.innerText = pCartaGerada.children.length;
});
