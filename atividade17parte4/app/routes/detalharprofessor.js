module.exports = function(app){
    app.get('/informacao/professor/detalharprofessor', function(req,res){
   
         async function getProfessoresID() {
             try {
                 var connection = app.config.dbConnection;
   
                 const pool = await connection();
   
                 const results = await pool.request().query('SELECT * FROM professores WHERE id_professor = 1') // atenção para funcionar tem que existem o professor com esse ID
   
                 res.render('informacao/professor/detalharprofessor',{profs :  results.recordset});
   
             } catch (err) {
                 console.log(err)
             }
         } 
   
     getProfessoresID();
     });
  }