import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import { Connect, Query } from '../config/mysql';
import MassegeDB from '../interfaces/message';

const NAMESPACE = 'chat'

const createUserMessage = async (req: Request, res: Response, next: NextFunction) => {
    
    logging.info(NAMESPACE, 'sending Message');

    let {text} = req.body
    // let {text, name, email, isAdmin} = req.body  // למקרה שאגיע לייסם טופס התחברות לצ'אט שממלאים בו שם ואימייל

    const M:MassegeDB = {
        email: null,
        ip_sender: req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].toString() : null,
        ip_target: 'admin',
        isAdmin: false,
        name: null,
        text: text || null,
        time: new Date()
    }
    
    console.log(M)

    let query = `insert into Messages (ip_sender, ip_target, \`text\`, \`name\`, email, isAdmin)  VALUES ("${M.ip_sender}", "${M.ip_target}","${M.text}","${M.name}","${M.email}","${M.isAdmin}", )`;

    console.log(query)

// insert into Messages (ip_sender, `text`, `name`, email, isAdmin) 
// values 	(123456789, 'jj', 'ferbers', 'tomeroko2@gmail.com', false),
// 		(223456789, 'jj', 'ferbers', 'tomeroko2@gmail.com', true);
//     const checkResponsFromDB = async (req:Request, res: Response)=>{
//         const connection = await Connect()
//         const dbData = await Query(connection,"select * from Messages")
//         console.log(dbData)
//         res.status(200).send(dbData)
//     }
//     //לשנות ל אסינק אוויט
//     Connect()
//         .then((connection) => {
//             Query(connection, query)
//                 .then((result) => {
//                     logging.info(NAMESPACE, 'Book created: ', result);

//                     return res.status(200).json({
//                         result
//                     });
//                 })
//                 .catch((error) => {
//                     logging.error(NAMESPACE, error.message, error);

//                     return res.status(200).json({
//                         message: error.message,
//                         error
//                     });
//                 })
//                 .finally(() => {
//                     logging.info(NAMESPACE, 'Closing connection.');
//                     connection.end();
//                 });
//         })
//         .catch((error) => {
//             logging.error(NAMESPACE, error.message, error);

//             return res.status(200).json({
//                 message: error.message,
//                 error
//             });
//         });
};

const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Getting all books.');

    let query = 'SELECT * FROM books';

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    logging.info(NAMESPACE, 'Retrieved books: ', results);

                    return res.status(200).json({
                        results
                    });
                })
                .catch((error) => {
                    logging.error(NAMESPACE, error.message, error);

                    return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    logging.info(NAMESPACE, 'Closing connection.');
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error);

            return res.status(200).json({
                message: error.message,
                error
            });
        });
};

export default { createUserMessage, getAllBooks };
