async function connect(){
    if (global.connection && global.connection.state != 'disconected'){
        return global.connection;
    }
    const mysql = require("mysql2/promise");
    const connector = await mysql.createConnection(
        "mysql://root:root@localhost:3306/webii");
    console.log("conectou no MySQL");
    global.connection = connection;
    return connection;
}
module.exports = (connect);