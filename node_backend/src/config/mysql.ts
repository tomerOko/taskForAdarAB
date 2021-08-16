import mysql from 'mysql';
import config from './config';

const params = {
    user: config.mysql.user,
    password: config.mysql.pass,
    host: config.mysql.host,
    database: config.mysql.database
};

const Connect = async () :Promise<mysql.Connection>=>{
    const connection = await mysql.createConnection(params);
    await connection.connect();
    return connection
}

const Query = async (connection: mysql.Connection, query: string) =>
new Promise((resolve, reject) => {
    connection.query(query, connection, (error, result) => {
        if (error) {
            reject(error);
            return;
        }
        resolve(result);
    });
});


export { Connect, Query };

///////////////////////





