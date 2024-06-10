/*var sql =require('mssql');
module.exports = function(){
 
const sqlConfig = {
//sqlConfig = {
  user: '',
  password: '',
  database: 'BD', //Na FATEC, utilizar o database BD ou LP8
  server: 'APOLO',
  driver:'msnodesql8',
  options: {
    encrypt: false, 
    trustServerCertificate: true // se você não tiver um certificado de servidor configurado
  }
}
return sql.connect(config);
}
*/
const sql = require('mssql');
var connSQLServer = function()
{
    const sqlConfig =
    {
        user: 'BD2221004',
        password: 'Praxedes2003',
        database: 'BD',
        server: 'apolo',
        options:
        {
            encrypt: false,
            trustServerCertificate: true // se você não tiver um certificado de servidor configurado
        }
    }
    return sql.connect(sqlConfig);
}

module.exports = function(){
  console.log('O autoload carregou o módulo de conexão com o BD');
  return connSQLServer;
}