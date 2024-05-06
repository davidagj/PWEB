function validarDados(){

    
    if (document.forms.formulario1.elements[0].value == "" || document.forms.formulario1.elements[0].value.length < 10) {
      alert("Preencha campo NOME corretamente!");
      document.forms.formulario1.elements[0].focus();
      return false;
    };
  
    if (document.forms.formulario1.elements["email"].value == "" || document.forms.formulario1.elements["email"].value.indexOf('@') == -1 || document.forms.formulario1.elements["idEmail"].value.indexOf('.') == -1) {
      alert("Preencha campo E-MAIL corretamente!");
      document.forms.formulario1.elements.email.focus();
      return false;
    }
  
    if (document.forms.formulario1.elements.mensagem.value == "" || document.forms.formulario1.elements.mensagem.value.length < 20) {
      alert("É necessario preencher o campo MENSAGEM com mais de 20 caracteres!");
      document.getElementById("idMensagem").focus();
      return false;
    }
  
    if (document.forms.formulario1.pesquisa[0].checked == true) {
      alert("Volte sempre à está página")
    } else if (document.forms.formulario1.pesquisa[1].checked == true) {
      alert("Que bom que você voltou a visitar esta página!")
    } else {
      alert("Escolha uma opção!")
      return false
    }
  }