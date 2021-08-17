import { NextFunction, query, Request, Response } from 'express';
import logging from '../config/logging';
import { mock_Data } from '../mockData';
import {Query} from '../config/mysql'

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
    const dbData = await Query("select * from Messages")
    res.status(200).send(dbData)
}

export default {checkServerConection, checkStringiyResponse, checkResponseAsPromis, checkResponsFromDB}