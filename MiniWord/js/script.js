document.addEventListener('DOMContentLoaded', function() {
    const colorInput = document.getElementById('colorInput');
    const sizeInput = document.getElementById('sizeInput');
    const fontSelect = document.getElementById('fontSelect');
    const textInput = document.getElementById('textInput');
  
    colorInput.addEventListener('input', () => {
      textInput.style.color = colorInput.value;
    });
  
    sizeInput.addEventListener('input', () => {
      textInput.style.fontSize = sizeInput.value + 'px';
    });
  
    fontSelect.addEventListener('change', () => {
      textInput.style.fontFamily = fontSelect.value;
    });
  });
  