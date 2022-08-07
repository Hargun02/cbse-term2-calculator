document.forms[0].addEventListener('submit', (event) => {
    event.preventDefault();
    calculate();
  })
  function calculate() {
    const term1 = +document.querySelector('#term-one').value;
    const total = +document.querySelector('#total').value;
  
    const term1weighted = term1 / 50 * 30;
  
    let term2 = null;
  
    for (let i = 40; i >= 0; i--) {
      let marks = Math.ceil(term1weighted + i / 50 * 70);
      if (total === marks) {
        term2 = i;
      }
      if (term2) {
        break;
      }
    };
  
    document.querySelector('#output').innerHTML = `your term 2 marks are ${term2}.` //add whatever text seems suitable to wrap value.
  }