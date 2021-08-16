import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import { mock_Data } from '../mockData';
import {Connect, Query} from '../config/mysql'

const NAMESPACE = 'test';

const checkServerConection = (req:Request, res:Response) => {
    res.send('Hello World!!')
}
  
const checkStringiyResponse = (req:Request, res: Response)=>{
    console.log("hallow")
    res.send(JSON.stringify(mock_Data))
}
  
const checkResponseAsPromis = async (req:Request, res: Response)=>{
    const data = await JSON.stringify(mock_Data)
    res.send(data)
}

const checkResponsFromDB = async (req:Request, res: Response)=>{
    const connection = await Connect()
    const dbData = await Query(connection,"select * from Messages")
    console.log(dbData)
    res.status(200).send(dbData)
}

export default {checkServerConection, checkStringiyResponse, checkResponseAsPromis, checkResponsFromDB}