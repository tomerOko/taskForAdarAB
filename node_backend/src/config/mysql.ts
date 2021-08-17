import mysql from 'mysql';
import config from './config';

const params = {
    user: config.mysql.user,
    password: config.mysql.pass,
    host: config.mysql.host,
    database: config.mysql.database
};

const QuerySender = async (connection:mysql.Connection, query: string,) => new Promise((resolve, reject) => {
    connection.query(query, connection, (error, result) => {
        if (error) {
            connection.end()
            reject(error);
        }
        resolve(result);
    });
});

let connection : mysql.Connection|null;

const Query = async (query: string) =>{
    try {
        if(!connection || connection.state === 'disconnected'){
            const newconnection = await mysql.createConnection(params);
            await newconnection.connect(); 
            connection=newconnection
        }         
    } catch (error) { 
        try {(connection as mysql.Connection).end()} catch (error) {}
        connection = null  
        console.error(error)
        return null
    }
    try {
        const data = await QuerySender(connection, query)
        return data   
    } catch (error) {   
        console.error(error)
        return null
    }
}


const db_connection = mysql.createPool(params);

const QueryAsPool = (query:string) => {
    return new Promise((resolve, reject) => {
        db_connection.getConnection( (err, conn) => {
            if (err) reject(err);
            console.log('MySQL Connection Established: ', conn.threadId);
            conn.query(query, (err, results) => {
              if (err) reject(err);
              conn.release();
              resolve(results);
            });
        });
    })
}

  




export { Query, QueryAsPool };

///////////////////////





