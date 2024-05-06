function cresce() {
    document.getElementById("minusculo").checked = false; 
    txt = document.getElementById("texto").value;
    document.getElementById("texto").value = txt.toUpperCase();
  }
  
  function diminui() {
    document.getElementById("maiusculo").checked = false;
    txt = document.getElementById("texto").value;
    document.getElementById("texto").value = txt.toLowerCase();
  }