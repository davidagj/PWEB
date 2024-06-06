const sql = require('mssql');

module.exports = function(){
    const sqlConfig = {
        user: 'BD2221005',
        password: 'R3dd18gg28',
        database:'BD',
        server:'Apolo',
        options: {
            encrypt: false, 
            trustServerCertificate: true // se você não tiver um certificado de servidor configurado
          }
        }
        return sql.connect(sqlConfig);
}