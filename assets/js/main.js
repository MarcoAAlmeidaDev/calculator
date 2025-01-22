(function () {  
  const elementsCalc = ['(', ')', '1', '2', '3', 
                        '4', '5', '6', '7', '8', '9', 
                        '0', '.', '-', '+', '/', '*'];

  const display = document.querySelector('.display');
  display.setAttribute('readonly', true); // Torna o display somente leitura para evitar teclado móvel

  document.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
      resultCalc();
    }
  })
  
  function showDisplay(value) {  
    display.value += value;
  }

  function clearDisplay() {
    display.value = '';
  }

  function deleteElement() {
    display.value = display.value.slice(0, -1);
  }

  function verificationElements() {
    let elements = display.value.split('');
    return elements.every(el => elementsCalc.includes(el));
  }

   function resultCalc() {
     let result = verificationElements();

     try {
       if(!result) return alert('Dados inseridos invalidos');
      
       let value = display.value;
       value = eval(value);
       display.value = String(value);
     } catch(e) {
        alert('Conta invalida');
        return
     }
  }

  document.addEventListener('click', (event) => {
    const el = event.target;

    if(el.classList.contains('bnt-number')) showDisplay(el.innerText);
    
    if(el.classList.contains('bnt-clear')) clearDisplay(); 

    if(el.classList.contains('bnt-del')) deleteElement(); 

    if(el.classList.contains('bnt-iqual')) resultCalc();

    display.focus();
  });
})();
