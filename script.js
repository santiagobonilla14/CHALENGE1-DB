document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const conversionType = document.getElementById('conversionType');
    const convertButton = document.getElementById('convertButton');
    const copyButton = document.getElementById('copyButton');
    const outputResult = document.getElementById('outputResult');
  
    convertButton.addEventListener('click', function() {
      const text = inputText.value.toLowerCase();
      const type = conversionType.value;
  
      let result = '';
  
      if (type === 'encrypt') {
        result = encryptText(text);
      } else if (type === 'decrypt') {
        result = decryptText(text);
      }
  
      outputResult.textContent = result;
    });
  
    copyButton.addEventListener('click', function() {
      const range = document.createRange();
      range.selectNode(outputResult);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      alert('Texto copiado al portapapeles.');
    });
  
    function encryptText(text) {
      return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    }
  
    function decryptText(text) {
      return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    }
  });
  