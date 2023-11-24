/*keypress */
const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');

textInput.addEventListener('keypress', function(event) {
  setTimeout(function() {
    const text = textInput.value;
    const count = text.length;   

    charCount.textContent = count;

     if (count > 100) {
      textInput.value = text.slice(0, 100);
      charCount.textContent = 100; 
    }
  }, 0);
});


const alphabeticInput = document.getElementById('alphabeticInput');

    alphabeticInput.addEventListener('keypress', function(event) {
      const charCode = event.which ? event.which : event.keyCode;
      const isAlphabetic = (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 8;

      if (!isAlphabetic) {
        event.preventDefault();
      }
    });



