var app = require('./app/config/server');

/*var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaAdicionarUsuario = require('./app/routes/adicionar_usuario');
rotaAdicionarUsuario(app);

var rotaHistoria = require('./app/routes/historia');
rotaHistoria(app);

var rotaProfessores = require('./app/routes/professores');
rotaProfessores(app);

var rotaCursos = require('./app/routes/cursos');
rotaCursos(app);*/

//app.set('view engine','ejs');
//app.get('/',function(req,res){
//    res.send("<html><body>Site da Fatec Sorocaba</body></html>");
//});

app.listen(3000,function(){
    console.log("servidor iniciado");
});