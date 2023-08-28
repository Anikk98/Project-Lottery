//* Tablica, która będzie przechowywała nasze wyniki - żeby nie wypadły dwie te same liczby *//

const result = [];

//* Tworzymy funkcję z elementem div (zamiast w html) - tym, który jest ostylowany w css (niebieskie kółko) *//

function losowanie() {
  if (result.length === 6) return; //* Po sześciu wylosowanych divach przestanie losować *//
  const wyniklosowania = Math.floor(Math.random() * 49 + 1); //* "+ 1" niweluje to, że otrzymamy 0 *//
  for (let i = 0; i < result.length; i++) {
    if (wyniklosowania === result[i]) {
      return losowanie();
    }
  } //* pętla - żeby za każdym razem jak zostanie wylosowana liczba js sprawdził w tablicy, czy taka liczba już nie została wylosowana. Jeśli tak, to powtórzy losowanie *//
  const div = document.createElement("div"); //* Za każdym razem jak będzie wywołana funkcja, to się stworzy ten div *//
  div.textContent = wyniklosowania;
  document.body.appendChild(div); //* Wywołujemy tego diva *//
  result.push(wyniklosowania); //* Dodaje uzyskane wyniki do tablicy "result"*//
}

//* Nie wywołujemy funkcji, ponieważ chcemy, żeby się wywołała po każdym kliknięciu a nie od razu *//

//* Pobranie elementu, na którym pracujemy *//

const button = document.querySelector("button");

//* Ustawienie tego, że jeżeli ktoś kliknie, to wywoła się funkcja *//

button.addEventListener("click", losowanie);
