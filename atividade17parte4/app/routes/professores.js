/*
var dbConnection = require('../config/dbConnection');
module.exports = function(app){
    app.get('/informacao/professores',function(req,res){
        //const sql = require('mssql');
 
/*const sqlConfig = {
  user: '',
  password: '',
  database: 'BD', //Na FATEC, utilizar o database BD ou LP8
  server: 'APOLO',
  options: {
    encrypt: false, 
    trustServerCertificate: true // se você não tiver um certificado de servidor configurado
  }
}
 
async function getProfessores() {
  try {
    const pool = await dbConnection();
    const results = await pool.request().query('SELECT * from PROFESSORES');
    res.render('informacao/professores',{profs: results.recordset});

    //res.send(results.recordset);
  } catch (err) {
    console.log(err);
  }
}


 /*       const sql = require('mssql/msnodesqlv8');

        const sqlConfig = {
            user: '', //exemplo BD2221001
            password: '',//não deixar essa senha no github
            database: 'BD',
            server: 'Apolo',
        }

        async function getProfessores(){
            try{
                const pool = await sql.connect(sqlConfig);
                const results = await pool.request().query('SELECT * FROM PROFESSORES');

                res.send(results.recordset);
            }catch(err){
                console.log(err);
            }
        }
        getProfessores();
        //res.render("informacao/professores");
        //res.end("<html><body>Professores legais da Fatec Sorocaba</body></html>")
    });
}
*/

//var dbConnection = require('../config/dbConnection');
module.exports = function(app)
{
    app.get('/informacao/professores', function(req, res)
    {
        async function getProfessores()
        {
            try
            {
                var connection = app.config.dbConnection;
                const pool = await connection();

                const results = await pool.request().query('SELECT * FROM Professores');
                res.render('informacao/professores', {profs: results.recordset});
                // res.send(results.recordsets);
            }
            catch (err)
            {
                console.log(err);
                res.status(500).send("Erro ao buscar os professores");
            }
        }
        getProfessores();
    });
}