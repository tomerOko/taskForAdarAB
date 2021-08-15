import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import { mock_Data } from '../mockData';

const NAMESPACE = 'test';

const checkServerConection = (req:Request, res:Response) => {
    res.send('Hello World!!')
}
  
const checkStringiyResponse = (req:Request, res: Response)=>{
    res.send(JSON.stringify(mock_Data))
}
  
const checkResponseAsPromis = async (req:Request, res: Response)=>{
    const data = await JSON.stringify(mock_Data)
    res.send(data)
}

export default {checkServerConection, checkStringiyResponse, checkResponseAsPromis}