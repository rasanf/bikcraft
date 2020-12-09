if(window.SimpleSlide) {
  new SimpleSlide({
    slide: "quote",
    time: 5000
  });

  new SimpleSlide({
    slide: "portfolio",
    time: 5000,
    nav: true
  });
}

if(window.SimpleAnime) {
  new SimpleAnime();
}

if(window.SimpleForm) {
  new SimpleForm({
    form: ".formphp",
    button: "#enviar", //id ou classe que foi colocado no button
    erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com</p></div>", 
    sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso!</h2><p>Em breve entrarei em contato com você</p></div>" 
  });
}