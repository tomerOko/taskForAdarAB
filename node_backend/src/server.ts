
import express, { Application, Request, Response, NextFunction } from "express";
import http from 'http';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/config';
import chatRoutes from './routes/chatRouter'; // לא מבין איך זה עובד כי זה לא מיצא את השם הזה וגם לא מייצא דיפולטיבית
import testRoutes from './routes/testRoutes'; // לא מבין איך זה עובד כי זה לא מיצא את השם הזה וגם לא מייצא דיפולטיבית
import cors from 'cors'


const app = express()
const port = 3000

const NAMESPACE = 'Server';
app.use(cors())

/** Log the request */
app.use((req:Request, res:Response, next:NextFunction) => {
    /** Log the req */
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        /** Log the res */
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    })
    
    next();
});


/** Parse the body of the request */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Rules of our API */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
/** Routes go here */
app.use('/chat', chatRoutes);
app.use('/test', testRoutes )

/** Error handling */
app.use((req, res, next) => {
  const error = new Error('Not found');

  res.status(404).json({
      message: error.message
  });
});

const httpServer = http.createServer(app);

httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));


/////////////////////////










